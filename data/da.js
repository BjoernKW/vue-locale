"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'da',
  pluralRuleFunction: function (n,ord){var s=String(n).split("."),i=s[0],t0=Number(s[0])==n;if(ord)return"other";return n==1||!t0&&(i==0||i==1)?"one":"other"},
  fields: {
    year: {
      displayName: 'år',
      relative: {
        '0': 'i år',
        '1': 'næste år',
        '-1': 'sidste år'
      },
      relativeTime: {
        future: {
          one: 'om {0} år',
          other: 'om {0} år'
        },
        past: {
          one: 'for {0} år siden',
          other: 'for {0} år siden'
        }
      }
    },
    month: {
      displayName: 'måned',
      relative: {
        '0': 'denne måned',
        '1': 'næste måned',
        '-1': 'sidste måned'
      },
      relativeTime: {
        future: {
          one: 'om {0} måned',
          other: 'om {0} måneder'
        },
        past: {
          one: 'for {0} måned siden',
          other: 'for {0} måneder siden'
        }
      }
    },
    day: {
      displayName: 'dag',
      relative: {
        '0': 'i dag',
        '1': 'i morgen',
        '2': 'i overmorgen',
        '-2': 'i forgårs',
        '-1': 'i går'
      },
      relativeTime: {
        future: {
          one: 'om {0} dag',
          other: 'om {0} dage'
        },
        past: {
          one: 'for {0} dag siden',
          other: 'for {0} dage siden'
        }
      }
    },
    hour: {
      displayName: 'time',
      relativeTime: {
        future: {
          one: 'om {0} time',
          other: 'om {0} timer'
        },
        past: {
          one: 'for {0} time siden',
          other: 'for {0} timer siden'
        }
      }
    },
    minute: {
      displayName: 'minut',
      relativeTime: {
        future: {
          one: 'om {0} minut',
          other: 'om {0} minutter'
        },
        past: {
          one: 'for {0} minut siden',
          other: 'for {0} minutter siden'
        }
      }
    },
    second: {
      displayName: 'sekund',
      relative: {
        '0': 'nu'
      },
      relativeTime: {
        future: {
          one: 'om {0} sekund',
          other: 'om {0} sekunder'
        },
        past: {
          one: 'for {0} sekund siden',
          other: 'for {0} sekunder siden'
        }
      }
    }
  }
};