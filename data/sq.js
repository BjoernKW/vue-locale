"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'sq',
  pluralRuleFunction: function (n,ord){var s=String(n).split("."),t0=Number(s[0])==n,n10=t0&&s[0].slice(-1),n100=t0&&s[0].slice(-2);if(ord)return n==1?"one":n10==4&&n100!=14?"many":"other";return n==1?"one":"other"},
  fields: {
    year: {
      displayName: 'vit',
      relative: {
        '0': 'këtë vit',
        '1': 'vitin e ardhshëm',
        '-1': 'vitin e kaluar'
      },
      relativeTime: {
        future: {
          one: 'pas {0} viti',
          other: 'pas {0} vjetësh'
        },
        past: {
          one: '{0} vit më parë',
          other: '{0} vjet më parë'
        }
      }
    },
    month: {
      displayName: 'muaj',
      relative: {
        '0': 'këtë muaj',
        '1': 'muajin e ardhshëm',
        '-1': 'muajin e kaluar'
      },
      relativeTime: {
        future: {
          one: 'pas {0} muaji',
          other: 'pas {0} muajsh'
        },
        past: {
          one: '{0} muaj më parë',
          other: '{0} muaj më parë'
        }
      }
    },
    day: {
      displayName: 'ditë',
      relative: {
        '0': 'sot',
        '1': 'nesër',
        '-1': 'dje'
      },
      relativeTime: {
        future: {
          one: 'pas {0} dite',
          other: 'pas {0} ditësh'
        },
        past: {
          one: '{0} ditë më parë',
          other: '{0} ditë më parë'
        }
      }
    },
    hour: {
      displayName: 'orë',
      relativeTime: {
        future: {
          one: 'pas {0} ore',
          other: 'pas {0} orësh'
        },
        past: {
          one: '{0} orë më parë',
          other: '{0} orë më parë'
        }
      }
    },
    minute: {
      displayName: 'minutë',
      relativeTime: {
        future: {
          one: 'pas {0} minute',
          other: 'pas {0} minutash'
        },
        past: {
          one: '{0} minutë më parë',
          other: '{0} minuta më parë'
        }
      }
    },
    second: {
      displayName: 'sekondë',
      relative: {
        '0': 'tani'
      },
      relativeTime: {
        future: {
          one: 'pas {0} sekonde',
          other: 'pas {0} sekondash'
        },
        past: {
          one: '{0} sekondë më parë',
          other: '{0} sekonda më parë'
        }
      }
    }
  }
};