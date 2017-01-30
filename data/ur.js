"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'ur',
  pluralRuleFunction: function (n,ord){var s=String(n).split("."),v0=!s[1];if(ord)return"other";return n==1&&v0?"one":"other"},
  fields: {
    year: {
      displayName: 'سال',
      relative: {
        '0': 'اس سال',
        '1': 'اگلے سال',
        '-1': 'گزشتہ سال'
      },
      relativeTime: {
        future: {
          one: '{0} سال میں',
          other: '{0} سال میں'
        },
        past: {
          one: '{0} سال پہلے',
          other: '{0} سال پہلے'
        }
      }
    },
    month: {
      displayName: 'مہینہ',
      relative: {
        '0': 'اس مہینہ',
        '1': 'اگلے مہینہ',
        '-1': 'پچھلے مہینہ'
      },
      relativeTime: {
        future: {
          one: '{0} مہینہ میں',
          other: '{0} مہینے میں'
        },
        past: {
          one: '{0} مہینہ پہلے',
          other: '{0} مہینے پہلے'
        }
      }
    },
    day: {
      displayName: 'دن',
      relative: {
        '0': 'آج',
        '1': 'آئندہ کل',
        '2': 'آنے والا پرسوں',
        '-2': 'گزشتہ پرسوں',
        '-1': 'گزشتہ کل'
      },
      relativeTime: {
        future: {
          one: '{0} دن میں',
          other: '{0} دنوں میں'
        },
        past: {
          one: '{0} دن پہلے',
          other: '{0} دنوں پہلے'
        }
      }
    },
    hour: {
      displayName: 'گھنٹہ',
      relativeTime: {
        future: {
          one: '{0} گھنٹہ میں',
          other: '{0} گھنٹے میں'
        },
        past: {
          one: '{0} گھنٹہ پہلے',
          other: '{0} گھنٹے پہلے'
        }
      }
    },
    minute: {
      displayName: 'منٹ',
      relativeTime: {
        future: {
          one: '{0} منٹ میں',
          other: '{0} منٹ میں'
        },
        past: {
          one: '{0} منٹ پہلے',
          other: '{0} منٹ پہلے'
        }
      }
    },
    second: {
      displayName: 'سیکنڈ',
      relative: {
        '0': 'اب'
      },
      relativeTime: {
        future: {
          one: '{0} سیکنڈ میں',
          other: '{0} سیکنڈ میں'
        },
        past: {
          one: '{0} سیکنڈ پہلے',
          other: '{0} سیکنڈ پہلے'
        }
      }
    }
  }
};