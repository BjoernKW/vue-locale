"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'si',
  pluralRuleFunction: function (n,ord){var s=String(n).split("."),i=s[0],f=s[1]||"";if(ord)return"other";return n==0||n==1||i==0&&f==1?"one":"other"},
  fields: {
    year: {
      displayName: 'වර්ෂය',
      relative: {
        '0': 'මෙම වසර',
        '1': 'ඊළඟ වසර',
        '-1': 'පසුගිය වසර'
      },
      relativeTime: {
        future: {
          one: 'වසර {0}කින්',
          other: 'වසර {0}කින්'
        },
        past: {
          one: 'වසර {0}කට පෙර',
          other: 'වසර {0}කට පෙර'
        }
      }
    },
    month: {
      displayName: 'මාසය',
      relative: {
        '0': 'මෙම මාසය',
        '1': 'ඊළඟ මාසය',
        '-1': 'පසුගිය මාසය'
      },
      relativeTime: {
        future: {
          one: 'මාස {0}කින්',
          other: 'මාස {0}කින්'
        },
        past: {
          one: 'මාස {0}කට පෙර',
          other: 'මාස {0}කට පෙර'
        }
      }
    },
    day: {
      displayName: 'දිනය',
      relative: {
        '0': 'අද',
        '1': 'හෙට',
        '2': 'අනිද්දා',
        '-2': 'පෙරේදා',
        '-1': 'ඊයේ'
      },
      relativeTime: {
        future: {
          one: 'දින {0}න්',
          other: 'දින {0}න්'
        },
        past: {
          one: 'දින {0}කට පෙර',
          other: 'දින {0}කට පෙර'
        }
      }
    },
    hour: {
      displayName: 'පැය',
      relativeTime: {
        future: {
          one: 'පැය {0}කින්',
          other: 'පැය {0}කින්'
        },
        past: {
          one: 'පැය {0}කට පෙර',
          other: 'පැය {0}කට පෙර'
        }
      }
    },
    minute: {
      displayName: 'මිනිත්තුව',
      relativeTime: {
        future: {
          one: 'මිනිත්තු {0}කින්',
          other: 'මිනිත්තු {0}කින්'
        },
        past: {
          one: 'මිනිත්තු {0}කට පෙර',
          other: 'මිනිත්තු {0}කට පෙර'
        }
      }
    },
    second: {
      displayName: 'තත්පරය',
      relative: {
        '0': 'දැන්'
      },
      relativeTime: {
        future: {
          one: 'තත්පර {0}කින්',
          other: 'තත්පර {0}කින්'
        },
        past: {
          one: 'තත්පර {0}කට පෙර',
          other: 'තත්පර {0}කට පෙර'
        }
      }
    }
  }
};