"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'zgh',
  pluralRuleFunction: function (n,ord){if(ord)return"other";return"other"},
  fields: {
    year: {
      displayName: 'ⴰⵙⴳⴳⵯⴰⵙ',
      relative: {
        '0': 'this year',
        '1': 'next year',
        '-1': 'last year'
      },
      relativeTime: {
        future: {
          other: '+{0} y'
        },
        past: {
          other: '-{0} y'
        }
      }
    },
    month: {
      displayName: 'ⴰⵢⵢⵓⵔ',
      relative: {
        '0': 'this month',
        '1': 'next month',
        '-1': 'last month'
      },
      relativeTime: {
        future: {
          other: '+{0} m'
        },
        past: {
          other: '-{0} m'
        }
      }
    },
    day: {
      displayName: 'ⴰⵙⵙ',
      relative: {
        '0': 'ⴰⵙⵙⴰ',
        '1': 'ⴰⵙⴽⴽⴰ',
        '-1': 'ⵉⴹⵍⵍⵉ'
      },
      relativeTime: {
        future: {
          other: '+{0} d'
        },
        past: {
          other: '-{0} d'
        }
      }
    },
    hour: {
      displayName: 'ⵜⴰⵙⵔⴰⴳⵜ',
      relativeTime: {
        future: {
          other: '+{0} h'
        },
        past: {
          other: '-{0} h'
        }
      }
    },
    minute: {
      displayName: 'ⵜⵓⵙⴷⵉⴷⵜ',
      relativeTime: {
        future: {
          other: '+{0} min'
        },
        past: {
          other: '-{0} min'
        }
      }
    },
    second: {
      displayName: 'ⵜⴰⵙⵉⵏⵜ',
      relative: {
        '0': 'now'
      },
      relativeTime: {
        future: {
          other: '+{0} s'
        },
        past: {
          other: '-{0} s'
        }
      }
    }
  }
};