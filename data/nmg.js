"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'nmg',
  pluralRuleFunction: function (n,ord){if(ord)return"other";return"other"},
  fields: {
    year: {
      displayName: 'Mbvu',
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
      displayName: 'Ngwɛn',
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
      displayName: 'Duö',
      relative: {
        '0': 'Dɔl',
        '1': 'Namáná',
        '-1': 'Nakugú'
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
      displayName: 'Wulā',
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
      displayName: 'Mpálâ',
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
      displayName: 'Nyiɛl',
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