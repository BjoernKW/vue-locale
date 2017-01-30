"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'id',
  pluralRuleFunction: function (n,ord){if(ord)return"other";return"other"},
  fields: {
    year: {
      displayName: 'Tahun',
      relative: {
        '0': 'tahun ini',
        '1': 'tahun depan',
        '-1': 'tahun lalu'
      },
      relativeTime: {
        future: {
          other: 'Dalam {0} tahun'
        },
        past: {
          other: '{0} tahun yang lalu'
        }
      }
    },
    month: {
      displayName: 'Bulan',
      relative: {
        '0': 'bulan ini',
        '1': 'Bulan berikutnya',
        '-1': 'bulan lalu'
      },
      relativeTime: {
        future: {
          other: 'Dalam {0} bulan'
        },
        past: {
          other: '{0} bulan yang lalu'
        }
      }
    },
    day: {
      displayName: 'Hari',
      relative: {
        '0': 'hari ini',
        '1': 'besok',
        '2': 'lusa',
        '-2': 'kemarin lusa',
        '-1': 'kemarin'
      },
      relativeTime: {
        future: {
          other: 'Dalam {0} hari'
        },
        past: {
          other: '{0} hari yang lalu'
        }
      }
    },
    hour: {
      displayName: 'Jam',
      relativeTime: {
        future: {
          other: 'Dalam {0} jam'
        },
        past: {
          other: '{0} jam yang lalu'
        }
      }
    },
    minute: {
      displayName: 'Menit',
      relativeTime: {
        future: {
          other: 'Dalam {0} menit'
        },
        past: {
          other: '{0} menit yang lalu'
        }
      }
    },
    second: {
      displayName: 'Detik',
      relative: {
        '0': 'sekarang'
      },
      relativeTime: {
        future: {
          other: 'Dalam {0} detik'
        },
        past: {
          other: '{0} detik yang lalu'
        }
      }
    }
  }
};