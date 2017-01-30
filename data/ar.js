"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'ar',
  pluralRuleFunction: function (n,ord){var s=String(n).split("."),t0=Number(s[0])==n,n100=t0&&s[0].slice(-2);if(ord)return"other";return n==0?"zero":n==1?"one":n==2?"two":n100>=3&&n100<=10?"few":n100>=11&&n100<=99?"many":"other"},
  fields: {
    year: {
      displayName: 'السنة',
      relative: {
        '0': 'السنة الحالية',
        '1': 'السنة التالية',
        '-1': 'السنة الماضية'
      },
      relativeTime: {
        future: {
          zero: 'خلال {0} سنة',
          one: 'خلال سنة واحدة',
          two: 'خلال سنتين',
          few: 'خلال {0} سنوات',
          many: 'خلال {0} سنة',
          other: 'خلال {0} سنة'
        },
        past: {
          zero: 'قبل {0} سنة',
          one: 'قبل سنة واحدة',
          two: 'قبل سنتين',
          few: 'قبل {0} سنوات',
          many: 'قبل {0} سنة',
          other: 'قبل {0} سنة'
        }
      }
    },
    month: {
      displayName: 'الشهر',
      relative: {
        '0': 'هذا الشهر',
        '1': 'الشهر التالي',
        '-1': 'الشهر الماضي'
      },
      relativeTime: {
        future: {
          zero: 'خلال {0} شهر',
          one: 'خلال شهر واحد',
          two: 'خلال شهرين',
          few: 'خلال {0} أشهر',
          many: 'خلال {0} شهرًا',
          other: 'خلال {0} شهر'
        },
        past: {
          zero: 'قبل {0} شهر',
          one: 'قبل شهر واحد',
          two: 'قبل شهرين',
          few: 'قبل {0} أشهر',
          many: 'قبل {0} شهرًا',
          other: 'قبل {0} شهر'
        }
      }
    },
    day: {
      displayName: 'يوم',
      relative: {
        '0': 'اليوم',
        '1': 'غدًا',
        '2': 'بعد الغد',
        '-2': 'أول أمس',
        '-1': 'أمس'
      },
      relativeTime: {
        future: {
          zero: 'خلال {0} يوم',
          one: 'خلال يوم واحد',
          two: 'خلال يومين',
          few: 'خلال {0} أيام',
          many: 'خلال {0} يومًا',
          other: 'خلال {0} يوم'
        },
        past: {
          zero: 'قبل {0} يوم',
          one: 'قبل يوم واحد',
          two: 'قبل يومين',
          few: 'قبل {0} أيام',
          many: 'قبل {0} يومًا',
          other: 'قبل {0} يوم'
        }
      }
    },
    hour: {
      displayName: 'الساعات',
      relativeTime: {
        future: {
          zero: 'خلال {0} ساعة',
          one: 'خلال ساعة واحدة',
          two: 'خلال ساعتين',
          few: 'خلال {0} ساعات',
          many: 'خلال {0} ساعة',
          other: 'خلال {0} ساعة'
        },
        past: {
          zero: 'قبل {0} ساعة',
          one: 'قبل ساعة واحدة',
          two: 'قبل ساعتين',
          few: 'قبل {0} ساعات',
          many: 'قبل {0} ساعة',
          other: 'قبل {0} ساعة'
        }
      }
    },
    minute: {
      displayName: 'الدقائق',
      relativeTime: {
        future: {
          zero: 'خلال {0} دقيقة',
          one: 'خلال دقيقة واحدة',
          two: 'خلال دقيقتين',
          few: 'خلال {0} دقائق',
          many: 'خلال {0} دقيقة',
          other: 'خلال {0} دقيقة'
        },
        past: {
          zero: 'قبل {0} دقيقة',
          one: 'قبل دقيقة واحدة',
          two: 'قبل دقيقتين',
          few: 'قبل {0} دقائق',
          many: 'قبل {0} دقيقة',
          other: 'قبل {0} دقيقة'
        }
      }
    },
    second: {
      displayName: 'الثواني',
      relative: {
        '0': 'الآن'
      },
      relativeTime: {
        future: {
          zero: 'خلال {0} ثانية',
          one: 'خلال ثانية واحدة',
          two: 'خلال ثانيتين',
          few: 'خلال {0} ثوانِ',
          many: 'خلال {0} ثانية',
          other: 'خلال {0} ثانية'
        },
        past: {
          zero: 'قبل {0} ثانية',
          one: 'قبل ثانية واحدة',
          two: 'قبل ثانيتين',
          few: 'قبل {0} ثوانِ',
          many: 'قبل {0} ثانية',
          other: 'قبل {0} ثانية'
        }
      }
    }
  }
};