"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'bs-Cyrl',
  pluralRuleFunction: function (n,ord){if(ord)return"other";return"other"},
  fields: {
    year: {
      displayName: 'година',
      relative: {
        '0': 'Ове године',
        '1': 'Следеће године',
        '-1': 'Прошле године'
      },
      relativeTime: {
        future: {
          one: 'за {0} годину',
          few: 'за {0} године',
          other: 'за {0} година'
        },
        past: {
          one: 'пре {0} годину',
          few: 'пре {0} године',
          other: 'пре {0} година'
        }
      }
    },
    month: {
      displayName: 'месец',
      relative: {
        '0': 'Овог месеца',
        '1': 'Следећег месеца',
        '-1': 'Прошлог месеца'
      },
      relativeTime: {
        future: {
          one: 'за {0} месец',
          few: 'за {0} месеца',
          other: 'за {0} месеци'
        },
        past: {
          one: 'пре {0} месец',
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
          one: 'пре {0} дан',
          few: 'пре {0} дана',
          other: 'пре {0} дана'
        }
      }
    },
    hour: {
      displayName: 'час',
      relativeTime: {
        future: {
          one: 'за {0} сат',
          few: 'за {0} сата',
          other: 'за {0} сати'
        },
        past: {
          one: 'пре {0} сат',
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
          one: 'пре {0} минут',
          few: 'пре {0} минута',
          other: 'пре {0} минута'
        }
      }
    },
    second: {
      displayName: 'секунд',
      relative: {
        '0': 'now'
      },
      relativeTime: {
        future: {
          one: 'за {0} секунд',
          few: 'за {0} секунде',
          other: 'за {0} секунди'
        },
        past: {
          one: 'пре {0} секунд',
          few: 'пре {0} секунде',
          other: 'пре {0} секунди'
        }
      }
    }
  }
};