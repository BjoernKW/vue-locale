"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'ast',
  pluralRuleFunction: function (n,ord){var s=String(n).split("."),v0=!s[1];if(ord)return"other";return n==1&&v0?"one":"other"},
  fields: {
    year: {
      displayName: 'añu',
      relative: {
        '0': 'esti añu',
        '1': 'l’añu viniente',
        '-1': 'l’añu pasáu'
      },
      relativeTime: {
        future: {
          one: 'en {0} añu',
          other: 'en {0} años'
        },
        past: {
          one: 'hai {0} añu',
          other: 'hai {0} años'
        }
      }
    },
    month: {
      displayName: 'mes',
      relative: {
        '0': 'esti mes',
        '1': 'el mes viniente',
        '-1': 'el mes pasáu'
      },
      relativeTime: {
        future: {
          one: 'en {0} mes',
          other: 'en {0} meses'
        },
        past: {
          one: 'hai {0} mes',
          other: 'hai {0} meses'
        }
      }
    },
    day: {
      displayName: 'día',
      relative: {
        '0': 'güei',
        '1': 'mañana',
        '2': 'pasao mañana',
        '-2': 'antayeri',
        '-1': 'ayeri'
      },
      relativeTime: {
        future: {
          one: 'en {0} día',
          other: 'en {0} díes'
        },
        past: {
          one: 'hai {0} día',
          other: 'hai {0} díes'
        }
      }
    },
    hour: {
      displayName: 'hora',
      relativeTime: {
        future: {
          one: 'en {0} hora',
          other: 'en {0} hores'
        },
        past: {
          one: 'hai {0} hora',
          other: 'hai {0} hores'
        }
      }
    },
    minute: {
      displayName: 'minutu',
      relativeTime: {
        future: {
          one: 'en {0} minutu',
          other: 'en {0} minutos'
        },
        past: {
          one: 'hai {0} minutu',
          other: 'hai {0} minutos'
        }
      }
    },
    second: {
      displayName: 'segundu',
      relative: {
        '0': 'agora'
      },
      relativeTime: {
        future: {
          one: 'en {0} segundu',
          other: 'en {0} segundos'
        },
        past: {
          one: 'hai {0} segundu',
          other: 'hai {0} segundos'
        }
      }
    }
  }
};