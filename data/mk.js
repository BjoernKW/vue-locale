"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'mk',
  pluralRuleFunction: function (n,ord){var s=String(n).split("."),i=s[0],f=s[1]||"",v0=!s[1],i10=i.slice(-1),i100=i.slice(-2),f10=f.slice(-1);if(ord)return i10==1&&i100!=11?"one":i10==2&&i100!=12?"two":(i10==7||i10==8)&&i100!=17&&i100!=18?"many":"other";return v0&&i10==1||f10==1?"one":"other"},
  fields: {
    year: {
      displayName: 'година',
      relative: {
        '0': 'оваа година',
        '1': 'следната година',
        '-1': 'минатата година'
      },
      relativeTime: {
        future: {
          one: 'за {0} година',
          other: 'за {0} години'
        },
        past: {
          one: 'пред {0} година',
          other: 'пред {0} години'
        }
      }
    },
    month: {
      displayName: 'месец',
      relative: {
        '0': 'овој месец',
        '1': 'следниот месец',
        '-1': 'минатиот месец'
      },
      relativeTime: {
        future: {
          one: 'за {0} месец',
          other: 'за {0} месеци'
        },
        past: {
          one: 'пред {0} месец',
          other: 'пред {0} месеци'
        }
      }
    },
    day: {
      displayName: 'ден',
      relative: {
        '0': 'денес',
        '1': 'утре',
        '2': 'задутре',
        '-2': 'завчера',
        '-1': 'вчера'
      },
      relativeTime: {
        future: {
          one: 'за {0} ден',
          other: 'за {0} дена'
        },
        past: {
          one: 'пред {0} ден',
          other: 'пред {0} дена'
        }
      }
    },
    hour: {
      displayName: 'час',
      relativeTime: {
        future: {
          one: 'за {0} час',
          other: 'за {0} часа'
        },
        past: {
          one: 'пред {0} час',
          other: 'пред {0} часа'
        }
      }
    },
    minute: {
      displayName: 'минута',
      relativeTime: {
        future: {
          one: 'за {0} минута',
          other: 'за {0} минути'
        },
        past: {
          one: 'пред {0} минута',
          other: 'пред {0} минути'
        }
      }
    },
    second: {
      displayName: 'секунда',
      relative: {
        '0': 'сега'
      },
      relativeTime: {
        future: {
          one: 'за {0} секунда',
          other: 'за {0} секунди'
        },
        past: {
          one: 'пред {0} секунда',
          other: 'пред {0} секунди'
        }
      }
    }
  }
};