"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'sr',
  pluralRuleFunction: function (n,ord){var s=String(n).split("."),i=s[0],f=s[1]||"",v0=!s[1],i10=i.slice(-1),i100=i.slice(-2),f10=f.slice(-1),f100=f.slice(-2);if(ord)return"other";return v0&&i10==1&&i100!=11||f10==1&&f100!=11?"one":v0&&(i10>=2&&i10<=4)&&(i100<12||i100>14)||f10>=2&&f10<=4&&(f100<12||f100>14)?"few":"other"},
  fields: {
    year: {
      displayName: 'година',
      relative: {
        '0': 'ове године',
        '1': 'следеће године',
        '-1': 'прошле године'
      },
      relativeTime: {
        future: {
          one: 'за {0} годину',
          few: 'за {0} године',
          other: 'за {0} година'
        },
        past: {
          one: 'пре {0} године',
          few: 'пре {0} године',
          other: 'пре {0} година'
        }
      }
    },
    month: {
      displayName: 'месец',
      relative: {
        '0': 'овог месеца',
        '1': 'следећег месеца',
        '-1': 'прошлог месеца'
      },
      relativeTime: {
        future: {
          one: 'за {0} месец',
          few: 'за {0} месеца',
          other: 'за {0} месеци'
        },
        past: {
          one: 'пре {0} месеца',
          few: 'пре {0} месеца',
          other: 'пре {0} месеци'
        }
      }
    },
    day: {
      displayName: 'дан',
      relative: {
        '0': 'данас',
        '1': 'сутра',
        '2': 'прекосутра',
        '-2': 'прекјуче',
        '-1': 'јуче'
      },
      relativeTime: {
        future: {
          one: 'за {0} дан',
          few: 'за {0} дана',
          other: 'за {0} дана'
        },
        past: {
          one: 'пре {0} дана',
          few: 'пре {0} дана',
          other: 'пре {0} дана'
        }
      }
    },
    hour: {
      displayName: 'сат',
      relativeTime: {
        future: {
          one: 'за {0} сат',
          few: 'за {0} сата',
          other: 'за {0} сати'
        },
        past: {
          one: 'пре {0} сата',
          few: 'пре {0} сата',
          other: 'пре {0} сати'
        }
      }
    },
    minute: {
      displayName: 'минут',
      relativeTime: {
        future: {
          one: 'за {0} минут',
          few: 'за {0} минута',
          other: 'за {0} минута'
        },
        past: {
          one: 'пре {0} минута',
          few: 'пре {0} минута',
          other: 'пре {0} минута'
        }
      }
    },
    second: {
      displayName: 'секунд',
      relative: {
        '0': 'сада'
      },
      relativeTime: {
        future: {
          one: 'за {0} секунду',
          few: 'за {0} секунде',
          other: 'за {0} секунди'
        },
        past: {
          one: 'пре {0} секунде',
          few: 'пре {0} секунде',
          other: 'пре {0} секунди'
        }
      }
    }
  }
};