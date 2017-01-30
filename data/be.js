"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'be',
  pluralRuleFunction: function (n,ord){var s=String(n).split("."),t0=Number(s[0])==n,n10=t0&&s[0].slice(-1),n100=t0&&s[0].slice(-2);if(ord)return(n10==2||n10==3)&&n100!=12&&n100!=13?"few":"other";return n10==1&&n100!=11?"one":n10>=2&&n10<=4&&(n100<12||n100>14)?"few":t0&&n10==0||n10>=5&&n10<=9||n100>=11&&n100<=14?"many":"other"},
  fields: {
    year: {
      displayName: 'год',
      relative: {
        '0': 'у гэтым годзе',
        '1': 'у наступным годзе',
        '-1': 'у мінулым годзе'
      },
      relativeTime: {
        future: {
          one: 'праз {0} год',
          few: 'праз {0} гады',
          many: 'праз {0} гадоў',
          other: 'праз {0} года'
        },
        past: {
          one: '{0} год таму',
          few: '{0} гады таму',
          many: '{0} гадоў таму',
          other: '{0} года таму'
        }
      }
    },
    month: {
      displayName: 'месяц',
      relative: {
        '0': 'у гэтым месяцы',
        '1': 'у наступным месяцы',
        '-1': 'у мінулым месяцы'
      },
      relativeTime: {
        future: {
          one: 'праз {0} месяц',
          few: 'праз {0} месяцы',
          many: 'праз {0} месяцаў',
          other: 'праз {0} месяца'
        },
        past: {
          one: '{0} месяц таму',
          few: '{0} месяцы таму',
          many: '{0} месяцаў таму',
          other: '{0} месяца таму'
        }
      }
    },
    day: {
      displayName: 'дзень',
      relative: {
        '0': 'сёння',
        '1': 'заўтра',
        '2': 'паслязаўтра',
        '-2': 'пазаўчора',
        '-1': 'учора'
      },
      relativeTime: {
        future: {
          one: 'праз {0} дзень',
          few: 'праз {0} дні',
          many: 'праз {0} дзён',
          other: 'праз {0} дня'
        },
        past: {
          one: '{0} дзень таму',
          few: '{0} дні таму',
          many: '{0} дзён таму',
          other: '{0} дня таму'
        }
      }
    },
    hour: {
      displayName: 'гадзіна',
      relativeTime: {
        future: {
          one: 'праз {0} гадзіну',
          few: 'праз {0} гадзіны',
          many: 'праз {0} гадзін',
          other: 'праз {0} гадзіны'
        },
        past: {
          one: '{0} гадзіна таму',
          few: '{0} гадзіны таму',
          many: '{0} гадзін таму',
          other: '{0} гадзіны таму'
        }
      }
    },
    minute: {
      displayName: 'хвіліна',
      relativeTime: {
        future: {
          one: 'праз {0} хвіліну',
          few: 'праз {0} хвіліны',
          many: 'праз {0} хвілін',
          other: 'праз {0} хвіліны'
        },
        past: {
          one: '{0} хвіліна таму',
          few: '{0} хвіліны таму',
          many: '{0} хвілін таму',
          other: '{0} хвіліны таму'
        }
      }
    },
    second: {
      displayName: 'секунда',
      relative: {
        '0': 'now'
      },
      relativeTime: {
        future: {
          one: 'праз {0} секунду',
          few: 'праз {0} секунды',
          many: 'праз {0} секунд',
          other: 'праз {0} секунды'
        },
        past: {
          one: '{0} секунда таму',
          few: '{0} секунды таму',
          many: '{0} секунд таму',
          other: '{0} секунды таму'
        }
      }
    }
  }
};