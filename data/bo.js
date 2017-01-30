"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'bo',
  pluralRuleFunction: function (n,ord){if(ord)return"other";return"other"},
  fields: {
    year: {
      displayName: 'ལོ།',
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
      displayName: 'ཟླ་བ་',
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
      displayName: 'ཉིན།',
      relative: {
        '0': 'དེ་རིང་',
        '1': 'སང་ཉིན་',
        '2': 'གནངས་ཉིན་',
        '-2': 'ཁས་ཉིན་',
        '-1': 'ཁས་ས་'
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
      displayName: 'ཆུ་ཚོད་',
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
      displayName: 'སྐར་མ།',
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
      displayName: 'སྐར་ཆ།',
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