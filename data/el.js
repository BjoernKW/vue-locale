"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'el',
  pluralRuleFunction: function (n,ord){if(ord)return"other";return n==1?"one":"other"},
  fields: {
    year: {
      displayName: 'έτος',
      relative: {
        '0': 'φέτος',
        '1': 'επόμενο έτος',
        '-1': 'πέρσι'
      },
      relativeTime: {
        future: {
          one: 'σε {0} έτος',
          other: 'σε {0} έτη'
        },
        past: {
          one: 'πριν από {0} έτος',
          other: 'πριν από {0} έτη'
        }
      }
    },
    month: {
      displayName: 'μήνας',
      relative: {
        '0': 'τρέχων μήνας',
        '1': 'επόμενος μήνας',
        '-1': 'προηγούμενος μήνας'
      },
      relativeTime: {
        future: {
          one: 'σε {0} μήνα',
          other: 'σε {0} μήνες'
        },
        past: {
          one: 'πριν από {0} μήνα',
          other: 'πριν από {0} μήνες'
        }
      }
    },
    day: {
      displayName: 'ημέρα',
      relative: {
        '0': 'σήμερα',
        '1': 'αύριο',
        '2': 'μεθαύριο',
        '-2': 'προχθές',
        '-1': 'χθες'
      },
      relativeTime: {
        future: {
          one: 'σε {0} ημέρα',
          other: 'σε {0} ημέρες'
        },
        past: {
          one: 'πριν από {0} ημέρα',
          other: 'πριν από {0} ημέρες'
        }
      }
    },
    hour: {
      displayName: 'ώρα',
      relativeTime: {
        future: {
          one: 'σε {0} ώρα',
          other: 'σε {0} ώρες'
        },
        past: {
          one: 'πριν από {0} ώρα',
          other: 'πριν από {0} ώρες'
        }
      }
    },
    minute: {
      displayName: 'λεπτό',
      relativeTime: {
        future: {
          one: 'σε {0} λεπτό',
          other: 'σε {0} λεπτά'
        },
        past: {
          one: 'πριν από {0} λεπτό',
          other: 'πριν από {0} λεπτά'
        }
      }
    },
    second: {
      displayName: 'δευτερόλεπτο',
      relative: {
        '0': 'τώρα'
      },
      relativeTime: {
        future: {
          one: 'σε {0} δευτερόλεπτο',
          other: 'σε {0} δευτερόλεπτα'
        },
        past: {
          one: 'πριν από {0} δευτερόλεπτο',
          other: 'πριν από {0} δευτερόλεπτα'
        }
      }
    }
  }
};