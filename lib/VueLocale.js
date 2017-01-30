"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _intlMessageformat = require("intl-messageformat");

var _intlMessageformat2 = _interopRequireDefault(_intlMessageformat);

var _intlRelativeformat = require("intl-relativeformat");

var _intlRelativeformat2 = _interopRequireDefault(_intlRelativeformat);

var _intlLocalesSupported = require("intl-locales-supported");

var _intlLocalesSupported2 = _interopRequireDefault(_intlLocalesSupported);

var _intlFormatCache = require("intl-format-cache");

var _intlFormatCache2 = _interopRequireDefault(_intlFormatCache);

var _lodash = require("lodash");

require("intl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// NodeJS by default to not offer full ICU support and therefor break the unit tests
/*
===========================================================================
    Copyright 2015-2016 Sebastian Software GmbH, Germany
    Licensed under Apache-2.0
===========================================================================
*/

if (!(0, _intlLocalesSupported2.default)(["en", "de", "fr", "es"])) {
  /* global IntlPolyfill */
  Intl.NumberFormat = IntlPolyfill.NumberFormat;
  Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
}

// Be sure to import the Polyfill
// TODO: Figure out if there is a ES2015 way to conditional load this


var formats = _intlMessageformat2.default.formats;

var getCachedNumberFormat = (0, _intlFormatCache2.default)(Intl.NumberFormat);
var getCachedDateTimeFormat = (0, _intlFormatCache2.default)(Intl.DateTimeFormat);
var getCachedMessageFormat = (0, _intlFormatCache2.default)(_intlMessageformat2.default);
var getCachedRelativeFormat = (0, _intlFormatCache2.default)(_intlRelativeformat2.default);

// A constant defined by the standard Intl.NumberFormat
// const maximumFractionDigits = 20;
// Unfortunately through formatting issues of percent values in IE
// we have to use a small value here, because IE (as of v11) seems to
// account the percent symbol + optional space to the fraction digits.
// See also: https://github.com/sebastian-software/vue-locale/issues/1#issuecomment-215396481
var maximumFractionDigits = 18;

function install(Vue, options) {
  var language = options.language,
      currency = options.currency,
      messages = options.messages;

  var locale = language;

  function changeLocale(language) {
    locale = language;
  }

  // =============================================
  //   FORMATTER FUNCTIONS
  // =============================================

  function formatDate(date, format) {
    var parsedDate = new Date(date);
    if (!(0, _lodash.isDate)(parsedDate)) throw new TypeError("A date or timestamp must be provided to {{formatDate}}");

    if ((0, _lodash.isString)(format) && format in formats.date) format = formats.date[format];

    return getCachedDateTimeFormat(locale, format).format(parsedDate);
  }

  function formatTime(date, format) {
    var parsedDate = new Date(date);
    if (!(0, _lodash.isDate)(date)) throw new TypeError("A date or timestamp must be provided to {{formatTime}}");

    if ((0, _lodash.isString)(format) && format in formats.time) format = formats.time[format];

    return getCachedDateTimeFormat(locale, format).format(parsedDate);
  }

  function formatNumber(num, format) {
    if (!(0, _lodash.isNumber)(num)) throw new TypeError("A number must be provided to {{formatNumber}}");

    if ((0, _lodash.isString)(format)) {
      if (format === "currency") format = { style: "currency", currency: currency };else if (format in formats.number) format = formats.number[format];
    }

    return getCachedNumberFormat(locale, format).format(num);
  }

  function formatRelative(date, format, now) {
    var parsedDate = new Date(date);
    if (!(0, _lodash.isDate)(parsedDate)) throw new TypeError("A date or timestamp must be provided to {{formatRelative}}");

    return getCachedRelativeFormat(locale, format).format(parsedDate, {
      now: now || new Date()
    });
  }

  function formatMessage(message) {
    for (var _len = arguments.length, formatOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      formatOptions[_key - 1] = arguments[_key];
    }

    // Read real message from DB
    if (message in messages) message = messages[message];

    if (typeof message === "string") message = getCachedMessageFormat(message, locale, {});

    // If there is a single map parameter, use that instead of the formatOptions array
    if (formatOptions.length === 1 && (0, _lodash.isPlainObject)(formatOptions[0])) formatOptions = formatOptions[0];

    return message.format(formatOptions);
  }

  // =============================================
  //   PARSERS
  // =============================================

  // Figuring out whether the separator is either "," or "." (Are there any other possibilities at all?)
  var decimalTestNumber = 3.1;
  var decimalSeparator = formatNumber(decimalTestNumber).charAt(1);

  function extractNumberParts(value) {
    var parsed = parseInt(value.replace(/[^0-9]/g, ""), 0);
    return isNaN(parsed) ? 0 : parsed;
  }

  function parseToNumber(value) {
    if (value == null || value === "") return 0;

    var splits = value.split(decimalSeparator).map(extractNumberParts);

    // Build up float number to let parseFloat convert it back into a number
    if (splits[1] > 0) return parseFloat(splits[0] + "." + splits[1]);

    // Return plain integer
    return splits[0];
  }

  // =============================================
  //   REGISTER GLOBALS
  // =============================================

  Vue.changeLocale = function () {
    changeLocale();
  };

  // =============================================
  //   REGISTER FILTERS
  // =============================================

  var helpers = {
    formatDate: formatDate,
    formatTime: formatTime,
    formatRelative: formatRelative,
    formatNumber: formatNumber,
    formatMessage: formatMessage
  };

  (0, _lodash.each)(helpers, function (helper, name) {
    // Adding features as a VueJS filter for easily pass a string over (only numberic parameters though)
    Vue.filter((0, _lodash.kebabCase)(name), helper);

    // Support alternative full blown calling of methods with real options object
    Vue.prototype["$" + name] = helper;
  });

  Vue.directive("i18n", function (id) {
    /* eslint no-invalid-this: 0 */
    if (id == null || isNaN(id)) id = this.expression;

    this.el.innerHTML = formatMessage(id);
  });

  Vue.component("text", {
    template: '<span class="text">{{{ translated }}}</span>',
    props: {
      msg: {
        type: String,
        required: true
      }
    },
    computed: {
      translated: function translated() {
        for (var _len2 = arguments.length, formatOptions = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          formatOptions[_key2] = arguments[_key2];
        }

        return formatMessage.apply(undefined, [this.msg].concat(formatOptions));
      }
    }
  });

  // =============================================
  //   ADDITIONAL FILTERS
  // =============================================

  // Via: http://jsfiddle.net/6jjuoypf/2/
  Vue.filter("format-currency", {
    // model -> view: formats the value when updating the input element.
    read: function read(val) {
      var numberOptions = {
        style: "currency",
        currency: currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      };

      return formatNumber(val == null || val === "" || isNaN(val) ? 0 : val, numberOptions);
    },

    // view -> model: formats the value when writing to the data.
    write: function write(val) {
      return parseToNumber(val);
    }
  });

  Vue.filter("format-currency-precise", {
    // model -> view: formats the value when updating the input element.
    read: function read(val) {
      return formatNumber(val == null || val === "" || isNaN(val) ? 0 : val, "currency");
    },

    // view -> model: formats the value when writing to the data.
    write: function write(val) {
      return parseToNumber(val);
    }
  });

  Vue.filter("format-percent", {
    // model -> view: formats the value when updating the input element.
    read: function read(val, fractionDigits) {
      return formatNumber(val == null || val === "" ? 0 : (0, _lodash.clamp)(val / 100, 0, 1), {
        style: "percent",
        minimumFractionDigits: fractionDigits == null ? 0 : fractionDigits,
        maximumFractionDigits: fractionDigits == null ? maximumFractionDigits : fractionDigits
      });
    },

    // view -> model: formats the value when writing to the data.
    write: function write(val) {
      return parseToNumber(val);
    }
  });

  Vue.filter("format-number", {
    // model -> view: formats the value when updating the input element.
    read: function read(val, fractionDigits) {
      return val == null || val === "" ? 0 : formatNumber(val, {
        minimumFractionDigits: fractionDigits == null ? 0 : fractionDigits,
        maximumFractionDigits: fractionDigits == null ? maximumFractionDigits : fractionDigits
      });
    },

    // view -> model: formats the value when writing to the data.
    write: function write(val) {
      return parseToNumber(val);
    }
  });
}

var plugin = {
  install: install
};

exports.default = plugin;
//# sourceMappingURL=VueLocale.js.map