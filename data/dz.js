"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'dz',
  pluralRuleFunction: function (n,ord){if(ord)return"other";return"other"},
  fields: {
    year: {
      displayName: 'ལོ',
      relative: {
        '0': 'this year',
        '1': 'next year',
        '-1': 'last year'
      },
      relativeTime: {
        future: {
          other: 'ལོ་འཁོར་ {0} ནང་'
        },
        past: {
          other: 'ལོ་འཁོར་ {0} ཧེ་མ་'
        }
      }
    },
    month: {
      displayName: 'ཟླ་ཝ་',
      relative: {
        '0': 'this month',
        '1': 'next month',
        '-1': 'last month'
      },
      relativeTime: {
        future: {
          other: 'ཟླཝ་ {0} ནང་'
        },
        past: {
          other: 'ཟླཝ་ {0} ཧེ་མ་'
        }
      }
    },
    day: {
      displayName: 'ཚེས་',
      relative: {
        '0': 'ད་རིས་',
        '1': 'ནངས་པ་',
        '2': 'གནངས་ཚེ',
        '-2': 'ཁ་ཉིམ',
        '-1': 'ཁ་ཙ་'
      },
      relativeTime: {
        future: {
          other: 'ཉིནམ་ {0} ནང་'
        },
        past: {
          other: 'ཉིནམ་ {0} ཧེ་མ་'
        }
      }
    },
    hour: {
      displayName: 'ཆུ་ཚོད',
      relativeTime: {
        future: {
          other: 'ཆུ་ཚོད་ {0} ནང་'
        },
        past: {
          other: 'ཆུ་ཚོད་ {0} ཧེ་མ་'
        }
      }
    },
    minute: {
      displayName: 'སྐར་མ',
      relativeTime: {
        future: {
          other: 'སྐར་མ་ {0} ནང་'
        },
        past: {
          other: 'སྐར་མ་ {0} ཧེ་མ་'
        }
      }
    },
    second: {
      displayName: 'སྐར་ཆཱ་',
      relative: {
        '0': 'now'
      },
      relativeTime: {
        future: {
          other: 'སྐར་ཆ་ {0} ནང་'
        },
        past: {
          other: 'སྐར་ཆ་ {0} ཧེ་མ་'
        }
      }
    }
  }
};