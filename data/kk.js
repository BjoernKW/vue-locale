"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'kk',
  pluralRuleFunction: function (n,ord){var s=String(n).split("."),t0=Number(s[0])==n,n10=t0&&s[0].slice(-1);if(ord)return n10==6||n10==9||t0&&n10==0&&n!=0?"many":"other";return n==1?"one":"other"},
  fields: {
    year: {
      displayName: 'жыл',
      relative: {
        '0': 'биылғы жыл',
        '1': 'келесі жыл',
        '-1': 'былтырғы жыл'
      },
      relativeTime: {
        future: {
          one: '{0} жылдан кейін',
          other: '{0} жылдан кейін'
        },
        past: {
          one: '{0} жыл бұрын',
          other: '{0} жыл бұрын'
        }
      }
    },
    month: {
      displayName: 'ай',
      relative: {
        '0': 'осы ай',
        '1': 'келесі ай',
        '-1': 'өткен ай'
      },
      relativeTime: {
        future: {
          one: '{0} айдан кейін',
          other: '{0} айдан кейін'
        },
        past: {
          one: '{0} ай бұрын',
          other: '{0} ай бұрын'
        }
      }
    },
    day: {
      displayName: 'күн',
      relative: {
        '0': 'бүгін',
        '1': 'ертең',
        '2': 'бүрсігүні',
        '-2': 'алдыңғы күні',
        '-1': 'кеше'
      },
      relativeTime: {
        future: {
          one: '{0} күннен кейін',
          other: '{0} күннен кейін'
        },
        past: {
          one: '{0} күн бұрын',
          other: '{0} күн бұрын'
        }
      }
    },
    hour: {
      displayName: 'сағат',
      relativeTime: {
        future: {
          one: '{0} сағаттан кейін',
          other: '{0} сағаттан кейін'
        },
        past: {
          one: '{0} сағат бұрын',
          other: '{0} сағат бұрын'
        }
      }
    },
    minute: {
      displayName: 'минут',
      relativeTime: {
        future: {
          one: '{0} минуттан кейін',
          other: '{0} минуттан кейін'
        },
        past: {
          one: '{0} минут бұрын',
          other: '{0} минут бұрын'
        }
      }
    },
    second: {
      displayName: 'секунд',
      relative: {
        '0': 'қазір'
      },
      relativeTime: {
        future: {
          one: '{0} секундтан кейін',
          other: '{0} секундтан кейін'
        },
        past: {
          one: '{0} секунд бұрын',
          other: '{0} секунд бұрын'
        }
      }
    }
  }
};