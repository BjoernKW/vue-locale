"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'as',
  pluralRuleFunction: function (n,ord){if(ord)return n==1||n==5||n==7||n==8||n==9||n==10?"one":n==2||n==3?"two":n==4?"few":n==6?"many":"other";return n>=0&&n<=1?"one":"other"},
  fields: {
    year: {
      displayName: 'বছৰ',
      relative: {
        '0': 'this year',
        '1': 'next year',
        '-1': 'last year'
      },
      relativeTime: {
        future: {
          other: '+{0} y'
        },
        past: {
          other: '-{0} y'
        }
      }
    },
    month: {
      displayName: 'মাহ',
      relative: {
        '0': 'this month',
        '1': 'next month',
        '-1': 'last month'
      },
      relativeTime: {
        future: {
          other: '+{0} m'
        },
        past: {
          other: '-{0} m'
        }
      }
    },
    day: {
      displayName: 'দিন',
      relative: {
        '0': 'আজি',
        '1': 'কাইলৈ',
        '2': 'পৰহিলৈ',
        '-2': 'পৰহি',
        '-1': 'কালি'
      },
      relativeTime: {
        future: {
          other: '+{0} d'
        },
        past: {
          other: '-{0} d'
        }
      }
    },
    hour: {
      displayName: 'ঘণ্টা',
      relativeTime: {
        future: {
          other: '+{0} h'
        },
        past: {
          other: '-{0} h'
        }
      }
    },
    minute: {
      displayName: 'মিনিট',
      relativeTime: {
        future: {
          other: '+{0} min'
        },
        past: {
          other: '-{0} min'
        }
      }
    },
    second: {
      displayName: 'ছেকেণ্ড',
      relative: {
        '0': 'now'
      },
      relativeTime: {
        future: {
          other: '+{0} s'
        },
        past: {
          other: '-{0} s'
        }
      }
    }
  }
};