"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'cs',
  pluralRuleFunction: function (n,ord){var s=String(n).split("."),i=s[0],v0=!s[1];if(ord)return"other";return n==1&&v0?"one":i>=2&&i<=4&&v0?"few":!v0?"many":"other"},
  fields: {
    year: {
      displayName: 'rok',
      relative: {
        '0': 'tento rok',
        '1': 'příští rok',
        '-1': 'minulý rok'
      },
      relativeTime: {
        future: {
          one: 'za {0} rok',
          few: 'za {0} roky',
          many: 'za {0} roku',
          other: 'za {0} let'
        },
        past: {
          one: 'před {0} rokem',
          few: 'před {0} lety',
          many: 'před {0} rokem',
          other: 'před {0} lety'
        }
      }
    },
    month: {
      displayName: 'měsíc',
      relative: {
        '0': 'tento měsíc',
        '1': 'příští měsíc',
        '-1': 'minulý měsíc'
      },
      relativeTime: {
        future: {
          one: 'za {0} měsíc',
          few: 'za {0} měsíce',
          many: 'za {0} měsíce',
          other: 'za {0} měsíců'
        },
        past: {
          one: 'před {0} měsícem',
          few: 'před {0} měsíci',
          many: 'před {0} měsícem',
          other: 'před {0} měsíci'
        }
      }
    },
    day: {
      displayName: 'den',
      relative: {
        '0': 'dnes',
        '1': 'zítra',
        '2': 'pozítří',
        '-2': 'předevčírem',
        '-1': 'včera'
      },
      relativeTime: {
        future: {
          one: 'za {0} den',
          few: 'za {0} dny',
          many: 'za {0} dne',
          other: 'za {0} dní'
        },
        past: {
          one: 'před {0} dnem',
          few: 'před {0} dny',
          many: 'před {0} dnem',
          other: 'před {0} dny'
        }
      }
    },
    hour: {
      displayName: 'hodina',
      relativeTime: {
        future: {
          one: 'za {0} hodinu',
          few: 'za {0} hodiny',
          many: 'za {0} hodiny',
          other: 'za {0} hodin'
        },
        past: {
          one: 'před {0} hodinou',
          few: 'před {0} hodinami',
          many: 'před {0} hodinou',
          other: 'před {0} hodinami'
        }
      }
    },
    minute: {
      displayName: 'minuta',
      relativeTime: {
        future: {
          one: 'za {0} minutu',
          few: 'za {0} minuty',
          many: 'za {0} minuty',
          other: 'za {0} minut'
        },
        past: {
          one: 'před {0} minutou',
          few: 'před {0} minutami',
          many: 'před {0} minutou',
          other: 'před {0} minutami'
        }
      }
    },
    second: {
      displayName: 'sekunda',
      relative: {
        '0': 'nyní'
      },
      relativeTime: {
        future: {
          one: 'za {0} sekundu',
          few: 'za {0} sekundy',
          many: 'za {0} sekundy',
          other: 'za {0} sekund'
        },
        past: {
          one: 'před {0} sekundou',
          few: 'před {0} sekundami',
          many: 'před {0} sekundou',
          other: 'před {0} sekundami'
        }
      }
    }
  }
};