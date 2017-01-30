"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'ne',
  pluralRuleFunction: function (n,ord){var s=String(n).split("."),t0=Number(s[0])==n;if(ord)return t0&&n>=1&&n<=4?"one":"other";return n==1?"one":"other"},
  fields: {
    year: {
      displayName: 'वर्ष',
      relative: {
        '0': 'यो वर्ष',
        '1': 'अर्को वर्ष',
        '-1': 'पहिलो वर्ष'
      },
      relativeTime: {
        future: {
          one: '{0} वर्षमा',
          other: '{0} वर्षमा'
        },
        past: {
          one: '{0} वर्ष अघि',
          other: '{0} वर्ष अघि'
        }
      }
    },
    month: {
      displayName: 'महिना',
      relative: {
        '0': 'यो महिना',
        '1': 'अर्को महिना',
        '-1': 'गएको महिना'
      },
      relativeTime: {
        future: {
          one: '{0} महिनामा',
          other: '{0} महिनामा'
        },
        past: {
          one: '{0} महिना पहिले',
          other: '{0} महिना पहिले'
        }
      }
    },
    day: {
      displayName: 'बार',
      relative: {
        '0': 'आज',
        '1': 'भोलि',
        '2': 'पर्सि',
        '-2': 'अस्ति',
        '-1': 'हिजो'
      },
      relativeTime: {
        future: {
          one: '{0} दिनमा',
          other: '{0} दिनमा'
        },
        past: {
          one: '{0} दिन पहिले',
          other: '{0} दिन पहिले'
        }
      }
    },
    hour: {
      displayName: 'घण्टा',
      relativeTime: {
        future: {
          one: '{0} घण्टामा',
          other: '{0} घण्टामा'
        },
        past: {
          one: '{0} घण्टा पहिले',
          other: '{0} घण्टा पहिले'
        }
      }
    },
    minute: {
      displayName: 'मिनेट',
      relativeTime: {
        future: {
          one: '{0} मिनेटमा',
          other: '{0} मिनेटमा'
        },
        past: {
          one: '{0} मिनेट पहिले',
          other: '{0} मिनेट पहिले'
        }
      }
    },
    second: {
      displayName: 'सेकेन्ड',
      relative: {
        '0': 'अब'
      },
      relativeTime: {
        future: {
          one: '{0} सेकेण्डमा',
          other: '{0} सेकेण्डमा'
        },
        past: {
          one: '{0} सेकेण्ड पहिले',
          other: '{0} सेकेण्ड पहिले'
        }
      }
    }
  }
};