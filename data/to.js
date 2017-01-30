"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'to',
  pluralRuleFunction: function (n,ord){if(ord)return"other";return"other"},
  fields: {
    year: {
      displayName: 'taʻu',
      relative: {
        '0': 'taʻú ni',
        '1': 'taʻu kahaʻu',
        '-1': 'taʻu kuoʻosi'
      },
      relativeTime: {
        future: {
          other: 'ʻi he taʻu ʻe {0}'
        },
        past: {
          other: 'taʻu ʻe {0} kuoʻosi'
        }
      }
    },
    month: {
      displayName: 'māhina',
      relative: {
        '0': 'māhiná ni',
        '1': 'māhina kahaʻu',
        '-1': 'māhina kuoʻosi'
      },
      relativeTime: {
        future: {
          other: 'ʻi he māhina ʻe {0}'
        },
        past: {
          other: 'māhina ʻe {0} kuoʻosi'
        }
      }
    },
    day: {
      displayName: 'ʻaho',
      relative: {
        '0': 'ʻahó ni',
        '1': 'ʻapongipongi',
        '2': 'ʻahepongipongi',
        '-2': 'ʻaneheafi',
        '-1': 'ʻaneafi'
      },
      relativeTime: {
        future: {
          other: 'ʻi he ʻaho ʻe {0}'
        },
        past: {
          other: 'ʻaho ʻe {0} kuoʻosi'
        }
      }
    },
    hour: {
      displayName: 'houa',
      relativeTime: {
        future: {
          other: 'ʻi he houa ʻe {0}'
        },
        past: {
          other: 'houa ʻe {0} kuoʻosi'
        }
      }
    },
    minute: {
      displayName: 'miniti',
      relativeTime: {
        future: {
          other: 'ʻi he miniti ʻe {0}'
        },
        past: {
          other: 'miniti ʻe {0} kuoʻosi'
        }
      }
    },
    second: {
      displayName: 'sekoni',
      relative: {
        '0': 'taimiʻni'
      },
      relativeTime: {
        future: {
          other: 'ʻi he sekoni ʻe {0}'
        },
        past: {
          other: 'sekoni ʻe {0} kuoʻosi'
        }
      }
    }
  }
};