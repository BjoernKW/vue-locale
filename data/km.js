"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'km',
  pluralRuleFunction: function (n,ord){if(ord)return"other";return"other"},
  fields: {
    year: {
      displayName: 'ឆ្នាំ',
      relative: {
        '0': 'ឆ្នាំ​នេះ',
        '1': 'ឆ្នាំ​ក្រោយ',
        '-1': 'ឆ្នាំ​មុន'
      },
      relativeTime: {
        future: {
          other: 'ក្នុង​រយៈ​ពេល {0} ឆ្នាំ'
        },
        past: {
          other: '{0} ឆ្នាំ​មុន'
        }
      }
    },
    month: {
      displayName: 'ខែ',
      relative: {
        '0': 'ខែ​នេះ',
        '1': 'ខែ​ក្រោយ',
        '-1': 'ខែ​មុន'
      },
      relativeTime: {
        future: {
          other: 'ក្នុង​រយៈ​ពេល {0} ខែ'
        },
        past: {
          other: '{0} ខែមុន'
        }
      }
    },
    day: {
      displayName: 'ថ្ងៃ',
      relative: {
        '0': 'ថ្ងៃ​នេះ',
        '1': 'ថ្ងៃ​ស្អែក',
        '2': '​ខាន​ស្អែក',
        '-2': 'ម្សិល​ម៉្ងៃ',
        '-1': 'ម្សិលមិញ'
      },
      relativeTime: {
        future: {
          other: 'ក្នុង​រយៈ​ពេល {0} ថ្ងៃ'
        },
        past: {
          other: '{0} ថ្ងៃ​មុន'
        }
      }
    },
    hour: {
      displayName: 'ម៉ោង',
      relativeTime: {
        future: {
          other: 'ក្នុង​រយៈ​ពេល {0} ម៉ោង'
        },
        past: {
          other: '{0} ម៉ោង​មុន'
        }
      }
    },
    minute: {
      displayName: 'នាទី',
      relativeTime: {
        future: {
          other: 'ក្នុង​រយៈពេល {0} នាទី'
        },
        past: {
          other: '{0} នាទី​មុន'
        }
      }
    },
    second: {
      displayName: 'វិនាទី',
      relative: {
        '0': 'ឥឡូវ'
      },
      relativeTime: {
        future: {
          other: 'ក្នុង​រយៈពេល {0} វិនាទី'
        },
        past: {
          other: '{0} វិនាទី​មុន'
        }
      }
    }
  }
};