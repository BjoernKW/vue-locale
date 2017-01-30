"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'sr-Latn',
  pluralRuleFunction: function (n,ord){if(ord)return"other";return"other"},
  fields: {
    year: {
      displayName: 'godina',
      relative: {
        '0': 'ove godine',
        '1': 'sledeće godine',
        '-1': 'prošle godine'
      },
      relativeTime: {
        future: {
          one: 'za {0} godinu',
          few: 'za {0} godine',
          other: 'za {0} godina'
        },
        past: {
          one: 'pre {0} godine',
          few: 'pre {0} godine',
          other: 'pre {0} godina'
        }
      }
    },
    month: {
      displayName: 'mesec',
      relative: {
        '0': 'ovog meseca',
        '1': 'sledećeg meseca',
        '-1': 'prošlog meseca'
      },
      relativeTime: {
        future: {
          one: 'za {0} mesec',
          few: 'za {0} meseca',
          other: 'za {0} meseci'
        },
        past: {
          one: 'pre {0} meseca',
          few: 'pre {0} meseca',
          other: 'pre {0} meseci'
        }
      }
    },
    day: {
      displayName: 'dan',
      relative: {
        '0': 'danas',
        '1': 'sutra',
        '2': 'prekosutra',
        '-2': 'prekjuče',
        '-1': 'juče'
      },
      relativeTime: {
        future: {
          one: 'za {0} dan',
          few: 'za {0} dana',
          other: 'za {0} dana'
        },
        past: {
          one: 'pre {0} dana',
          few: 'pre {0} dana',
          other: 'pre {0} dana'
        }
      }
    },
    hour: {
      displayName: 'sat',
      relativeTime: {
        future: {
          one: 'za {0} sat',
          few: 'za {0} sata',
          other: 'za {0} sati'
        },
        past: {
          one: 'pre {0} sata',
          few: 'pre {0} sata',
          other: 'pre {0} sati'
        }
      }
    },
    minute: {
      displayName: 'minut',
      relativeTime: {
        future: {
          one: 'za {0} minut',
          few: 'za {0} minuta',
          other: 'za {0} minuta'
        },
        past: {
          one: 'pre {0} minuta',
          few: 'pre {0} minuta',
          other: 'pre {0} minuta'
        }
      }
    },
    second: {
      displayName: 'sekund',
      relative: {
        '0': 'sada'
      },
      relativeTime: {
        future: {
          one: 'za {0} sekundu',
          few: 'za {0} sekunde',
          other: 'za {0} sekundi'
        },
        past: {
          one: 'pre {0} sekunde',
          few: 'pre {0} sekunde',
          other: 'pre {0} sekundi'
        }
      }
    }
  }
};