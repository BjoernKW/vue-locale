"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'it',
  pluralRuleFunction: function (n,ord){var s=String(n).split("."),v0=!s[1];if(ord)return n==11||n==8||n==80||n==800?"many":"other";return n==1&&v0?"one":"other"},
  fields: {
    year: {
      displayName: 'anno',
      relative: {
        '0': 'quest’anno',
        '1': 'anno prossimo',
        '-1': 'anno scorso'
      },
      relativeTime: {
        future: {
          one: 'tra {0} anno',
          other: 'tra {0} anni'
        },
        past: {
          one: '{0} anno fa',
          other: '{0} anni fa'
        }
      }
    },
    month: {
      displayName: 'mese',
      relative: {
        '0': 'questo mese',
        '1': 'mese prossimo',
        '-1': 'mese scorso'
      },
      relativeTime: {
        future: {
          one: 'tra {0} mese',
          other: 'tra {0} mesi'
        },
        past: {
          one: '{0} mese fa',
          other: '{0} mesi fa'
        }
      }
    },
    day: {
      displayName: 'giorno',
      relative: {
        '0': 'oggi',
        '1': 'domani',
        '2': 'dopodomani',
        '-2': 'l’altro ieri',
        '-1': 'ieri'
      },
      relativeTime: {
        future: {
          one: 'tra {0} giorno',
          other: 'tra {0} giorni'
        },
        past: {
          one: '{0} giorno fa',
          other: '{0} giorni fa'
        }
      }
    },
    hour: {
      displayName: 'ora',
      relativeTime: {
        future: {
          one: 'tra {0} ora',
          other: 'tra {0} ore'
        },
        past: {
          one: '{0} ora fa',
          other: '{0} ore fa'
        }
      }
    },
    minute: {
      displayName: 'minuto',
      relativeTime: {
        future: {
          one: 'tra {0} minuto',
          other: 'tra {0} minuti'
        },
        past: {
          one: '{0} minuto fa',
          other: '{0} minuti fa'
        }
      }
    },
    second: {
      displayName: 'Secondo',
      relative: {
        '0': 'ora'
      },
      relativeTime: {
        future: {
          one: 'tra {0} secondo',
          other: 'tra {0} secondi'
        },
        past: {
          one: '{0} secondo fa',
          other: '{0} secondi fa'
        }
      }
    }
  }
};