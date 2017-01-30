"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'ru',
  pluralRuleFunction: function (n,ord){var s=String(n).split("."),i=s[0],v0=!s[1],i10=i.slice(-1),i100=i.slice(-2);if(ord)return"other";return v0&&i10==1&&i100!=11?"one":v0&&(i10>=2&&i10<=4)&&(i100<12||i100>14)?"few":v0&&i10==0||v0&&(i10>=5&&i10<=9)||v0&&(i100>=11&&i100<=14)?"many":"other"},
  fields: {
    year: {
      displayName: 'год',
      relative: {
        '0': 'в этом году',
        '1': 'в следующем году',
        '-1': 'в прошлом году'
      },
      relativeTime: {
        future: {
          one: 'через {0} год',
          few: 'через {0} года',
          many: 'через {0} лет',
          other: 'через {0} года'
        },
        past: {
          one: '{0} год назад',
          few: '{0} года назад',
          many: '{0} лет назад',
          other: '{0} года назад'
        }
      }
    },
    month: {
      displayName: 'месяц',
      relative: {
        '0': 'в этом месяце',
        '1': 'в следующем месяце',
        '-1': 'в прошлом месяце'
      },
      relativeTime: {
        future: {
          one: 'через {0} месяц',
          few: 'через {0} месяца',
          many: 'через {0} месяцев',
          other: 'через {0} месяца'
        },
        past: {
          one: '{0} месяц назад',
          few: '{0} месяца назад',
          many: '{0} месяцев назад',
          other: '{0} месяца назад'
        }
      }
    },
    day: {
      displayName: 'день',
      relative: {
        '0': 'сегодня',
        '1': 'завтра',
        '2': 'послезавтра',
        '-2': 'позавчера',
        '-1': 'вчера'
      },
      relativeTime: {
        future: {
          one: 'через {0} день',
          few: 'через {0} дня',
          many: 'через {0} дней',
          other: 'через {0} дней'
        },
        past: {
          one: '{0} день назад',
          few: '{0} дня назад',
          many: '{0} дней назад',
          other: '{0} дня назад'
        }
      }
    },
    hour: {
      displayName: 'час',
      relativeTime: {
        future: {
          one: 'через {0} час',
          few: 'через {0} часа',
          many: 'через {0} часов',
          other: 'через {0} часа'
        },
        past: {
          one: '{0} час назад',
          few: '{0} часа назад',
          many: '{0} часов назад',
          other: '{0} часа назад'
        }
      }
    },
    minute: {
      displayName: 'минута',
      relativeTime: {
        future: {
          one: 'через {0} минуту',
          few: 'через {0} минуты',
          many: 'через {0} минут',
          other: 'через {0} минуты'
        },
        past: {
          one: '{0} минуту назад',
          few: '{0} минуты назад',
          many: '{0} минут назад',
          other: '{0} минуты назад'
        }
      }
    },
    second: {
      displayName: 'секунда',
      relative: {
        '0': 'сейчас'
      },
      relativeTime: {
        future: {
          one: 'через {0} секунду',
          few: 'через {0} секунды',
          many: 'через {0} секунд',
          other: 'через {0} секунды'
        },
        past: {
          one: '{0} секунду назад',
          few: '{0} секунды назад',
          many: '{0} секунд назад',
          other: '{0} секунды назад'
        }
      }
    }
  }
};