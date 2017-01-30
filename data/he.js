"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'he',
  pluralRuleFunction: function (n,ord){var s=String(n).split("."),i=s[0],v0=!s[1],t0=Number(s[0])==n,n10=t0&&s[0].slice(-1);if(ord)return"other";return n==1&&v0?"one":i==2&&v0?"two":v0&&(n<0||n>10)&&t0&&n10==0?"many":"other"},
  fields: {
    year: {
      displayName: 'שנה',
      relative: {
        '0': 'השנה',
        '1': 'השנה הבאה',
        '-1': 'השנה שעברה'
      },
      relativeTime: {
        future: {
          one: 'בעוד שנה',
          two: 'בעוד שנתיים',
          many: 'בעוד {0} שנה',
          other: 'בעוד {0} שנים'
        },
        past: {
          one: 'לפני שנה',
          two: 'לפני שנתיים',
          many: 'לפני {0} שנה',
          other: 'לפני {0} שנים'
        }
      }
    },
    month: {
      displayName: 'חודש',
      relative: {
        '0': 'החודש',
        '1': 'החודש הבא',
        '-1': 'החודש שעבר'
      },
      relativeTime: {
        future: {
          one: 'בעוד חודש',
          two: 'בעוד חודשיים',
          many: 'בעוד {0} חודשים',
          other: 'בעוד {0} חודשים'
        },
        past: {
          one: 'לפני חודש',
          two: 'לפני חודשיים',
          many: 'לפני {0} חודשים',
          other: 'לפני {0} חודשים'
        }
      }
    },
    day: {
      displayName: 'יום',
      relative: {
        '0': 'היום',
        '1': 'מחר',
        '2': 'מחרתיים',
        '-2': 'שלשום',
        '-1': 'אתמול'
      },
      relativeTime: {
        future: {
          one: 'בעוד יום {0}',
          two: 'בעוד יומיים',
          many: 'בעוד {0} ימים',
          other: 'בעוד {0} ימים'
        },
        past: {
          one: 'לפני יום {0}',
          two: 'לפני יומיים',
          many: 'לפני {0} ימים',
          other: 'לפני {0} ימים'
        }
      }
    },
    hour: {
      displayName: 'שעה',
      relativeTime: {
        future: {
          one: 'בעוד שעה',
          two: 'בעוד שעתיים',
          many: 'בעוד {0} שעות',
          other: 'בעוד {0} שעות'
        },
        past: {
          one: 'לפני שעה',
          two: 'לפני שעתיים',
          many: 'לפני {0} שעות',
          other: 'לפני {0} שעות'
        }
      }
    },
    minute: {
      displayName: 'דקה',
      relativeTime: {
        future: {
          one: 'בעוד דקה',
          two: 'בעוד שתי דקות',
          many: 'בעוד {0} דקות',
          other: 'בעוד {0} דקות'
        },
        past: {
          one: 'לפני דקה',
          two: 'לפני שתי דקות',
          many: 'לפני {0} דקות',
          other: 'לפני {0} דקות'
        }
      }
    },
    second: {
      displayName: 'שנייה',
      relative: {
        '0': 'עכשיו'
      },
      relativeTime: {
        future: {
          one: 'בעוד שנייה',
          two: 'בעוד שתי שניות',
          many: 'בעוד {0} שניות',
          other: 'בעוד {0} שניות'
        },
        past: {
          one: 'לפני שנייה',
          two: 'לפני שתי שניות',
          many: 'לפני {0} שניות',
          other: 'לפני {0} שניות'
        }
      }
    }
  }
};