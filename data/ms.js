"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'ms',
  pluralRuleFunction: function (n,ord){if(ord)return n==1?"one":"other";return"other"},
  fields: {
    year: {
      displayName: 'Tahun',
      relative: {
        '0': 'tahun ini',
        '1': 'tahun depan',
        '-1': 'tahun lepas'
      },
      relativeTime: {
        future: {
          other: 'dalam {0} saat'
        },
        past: {
          other: '{0} tahun lalu'
        }
      }
    },
    month: {
      displayName: 'Bulan',
      relative: {
        '0': 'bulan ini',
        '1': 'bulan depan',
        '-1': 'bulan lalu'
      },
      relativeTime: {
        future: {
          other: 'dalam {0} bulan'
        },
        past: {
          other: '{0} bulan lalu'
        }
      }
    },
    day: {
      displayName: 'Hari',
      relative: {
        '0': 'hari ini',
        '1': 'esok',
        '2': 'lusa',
        '-2': 'kelmarin',
        '-1': 'semalam'
      },
      relativeTime: {
        future: {
          other: 'dalam {0} hari'
        },
        past: {
          other: '{0} hari lalu'
        }
      }
    },
    hour: {
      displayName: 'Jam',
      relativeTime: {
        future: {
          other: 'dalam {0} jam'
        },
        past: {
          other: '{0} jam yang lalu'
        }
      }
    },
    minute: {
      displayName: 'Minit',
      relativeTime: {
        future: {
          other: 'dalam {0} minit'
        },
        past: {
          other: '{0} minit yang lalu'
        }
      }
    },
    second: {
      displayName: 'Saat',
      relative: {
        '0': 'sekarang'
      },
      relativeTime: {
        future: {
          other: 'dalam {0} saat'
        },
        past: {
          other: '{0} saat lalu'
        }
      }
    }
  }
};