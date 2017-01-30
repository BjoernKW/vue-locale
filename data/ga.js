"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'ga',
  pluralRuleFunction: function (n,ord){var s=String(n).split("."),t0=Number(s[0])==n;if(ord)return n==1?"one":"other";return n==1?"one":n==2?"two":t0&&n>=3&&n<=6?"few":t0&&n>=7&&n<=10?"many":"other"},
  fields: {
    year: {
      displayName: 'Bliain',
      relative: {
        '0': 'an bhliain seo',
        '1': 'an bhliain seo chugainn',
        '-1': 'anuraidh'
      },
      relativeTime: {
        future: {
          one: 'i gceann {0} bhliain',
          two: 'i gceann {0} bhliain',
          few: 'i gceann {0} bliana',
          many: 'i gceann {0} mbliana',
          other: 'i gceann {0} bliain'
        },
        past: {
          one: '{0} bhliain ó shin',
          two: '{0} bhliain ó shin',
          few: '{0} bliana ó shin',
          many: '{0} mbliana ó shin',
          other: '{0} bliain ó shin'
        }
      }
    },
    month: {
      displayName: 'Mí',
      relative: {
        '0': 'an mhí seo',
        '1': 'an mhí seo chugainn',
        '-1': 'an mhí seo caite'
      },
      relativeTime: {
        future: {
          one: 'i gceann {0} mhí',
          two: 'i gceann {0} mhí',
          few: 'i gceann {0} mhí',
          many: 'i gceann {0} mí',
          other: 'i gceann {0} mí'
        },
        past: {
          one: '{0} mhí ó shin',
          two: '{0} mhí ó shin',
          few: '{0} mhí ó shin',
          many: '{0} mí ó shin',
          other: '{0} mí ó shin'
        }
      }
    },
    day: {
      displayName: 'Lá',
      relative: {
        '0': 'inniu',
        '1': 'amárach',
        '2': 'arú amárach',
        '-2': 'arú inné',
        '-1': 'inné'
      },
      relativeTime: {
        future: {
          one: 'i gceann {0} lá',
          two: 'i gceann {0} lá',
          few: 'i gceann {0} lá',
          many: 'i gceann {0} lá',
          other: 'i gceann {0} lá'
        },
        past: {
          one: '{0} lá ó shin',
          two: '{0} lá ó shin',
          few: '{0} lá ó shin',
          many: '{0} lá ó shin',
          other: '{0} lá ó shin'
        }
      }
    },
    hour: {
      displayName: 'Uair',
      relativeTime: {
        future: {
          one: 'i gceann {0} uair an chloig',
          two: 'i gceann {0} uair an chloig',
          few: 'i gceann {0} huaire an chloig',
          many: 'i gceann {0} n-uaire an chloig',
          other: 'i gceann {0} uair an chloig'
        },
        past: {
          one: '{0} uair an chloig ó shin',
          two: '{0} uair an chloig ó shin',
          few: '{0} huaire an chloig ó shin',
          many: '{0} n-uaire an chloig ó shin',
          other: '{0} uair an chloig ó shin'
        }
      }
    },
    minute: {
      displayName: 'Nóiméad',
      relativeTime: {
        future: {
          one: 'i gceann {0} nóiméad',
          two: 'i gceann {0} nóiméad',
          few: 'i gceann {0} nóiméad',
          many: 'i gceann {0} nóiméad',
          other: 'i gceann {0} nóiméad'
        },
        past: {
          one: '{0} nóiméad ó shin',
          two: '{0} nóiméad ó shin',
          few: '{0} nóiméad ó shin',
          many: '{0} nóiméad ó shin',
          other: '{0} nóiméad ó shin'
        }
      }
    },
    second: {
      displayName: 'Soicind',
      relative: {
        '0': 'anois'
      },
      relativeTime: {
        future: {
          one: 'i gceann {0} soicind',
          two: 'i gceann {0} shoicind',
          few: 'i gceann {0} shoicind',
          many: 'i gceann {0} soicind',
          other: 'i gceann {0} soicind'
        },
        past: {
          one: '{0} soicind ó shin',
          two: '{0} shoicind ó shin',
          few: '{0} shoicind ó shin',
          many: '{0} soicind ó shin',
          other: '{0} soicind ó shin'
        }
      }
    }
  }
};