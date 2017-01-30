"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'pt',
  pluralRuleFunction: function (n,ord){var s=String(n).split("."),t0=Number(s[0])==n;if(ord)return"other";return t0&&n>=0&&n<=2&&n!=2?"one":"other"},
  fields: {
    year: {
      displayName: 'ano',
      relative: {
        '0': 'este ano',
        '1': 'próximo ano',
        '-1': 'ano passado'
      },
      relativeTime: {
        future: {
          one: 'em {0} ano',
          other: 'em {0} anos'
        },
        past: {
          one: 'há {0} ano',
          other: 'há {0} anos'
        }
      }
    },
    month: {
      displayName: 'mês',
      relative: {
        '0': 'este mês',
        '1': 'próximo mês',
        '-1': 'mês passado'
      },
      relativeTime: {
        future: {
          one: 'em {0} mês',
          other: 'em {0} meses'
        },
        past: {
          one: 'há {0} mês',
          other: 'há {0} meses'
        }
      }
    },
    day: {
      displayName: 'dia',
      relative: {
        '0': 'hoje',
        '1': 'amanhã',
        '2': 'depois de amanhã',
        '-2': 'anteontem',
        '-1': 'ontem'
      },
      relativeTime: {
        future: {
          one: 'em {0} dia',
          other: 'em {0} dias'
        },
        past: {
          one: 'há {0} dia',
          other: 'há {0} dias'
        }
      }
    },
    hour: {
      displayName: 'hora',
      relativeTime: {
        future: {
          one: 'em {0} hora',
          other: 'em {0} horas'
        },
        past: {
          one: 'há {0} hora',
          other: 'há {0} horas'
        }
      }
    },
    minute: {
      displayName: 'minuto',
      relativeTime: {
        future: {
          one: 'em {0} minuto',
          other: 'em {0} minutos'
        },
        past: {
          one: 'há {0} minuto',
          other: 'há {0} minutos'
        }
      }
    },
    second: {
      displayName: 'segundo',
      relative: {
        '0': 'agora'
      },
      relativeTime: {
        future: {
          one: 'em {0} segundo',
          other: 'em {0} segundos'
        },
        past: {
          one: 'há {0} segundo',
          other: 'há {0} segundos'
        }
      }
    }
  }
};