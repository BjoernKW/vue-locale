"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'se',
  pluralRuleFunction: function (n,ord){if(ord)return"other";return n==1?"one":n==2?"two":"other"},
  fields: {
    year: {
      displayName: 'jáhki',
      relative: {
        '0': 'this year',
        '1': 'next year',
        '-1': 'last year'
      },
      relativeTime: {
        future: {
          one: '{0} jahki maŋŋilit',
          two: '{0} jahkki maŋŋilit',
          other: '{0} jahkki maŋŋilit'
        },
        past: {
          one: '{0} jahki árat',
          two: '{0} jahkki árat',
          other: '{0} jahkki árat'
        }
      }
    },
    month: {
      displayName: 'mánnu',
      relative: {
        '0': 'this month',
        '1': 'next month',
        '-1': 'last month'
      },
      relativeTime: {
        future: {
          one: '{0} mánotbadji maŋŋilit',
          two: '{0} mánotbadji maŋŋilit',
          other: '{0} mánotbadji maŋŋilit'
        },
        past: {
          one: '{0} mánotbadji árat',
          two: '{0} mánotbadji árat',
          other: '{0} mánotbadji árat'
        }
      }
    },
    day: {
      displayName: 'beaivi',
      relative: {
        '0': 'odne',
        '1': 'ihttin',
        '2': 'paijeelittáá',
        '-2': 'oovdebpeivvi',
        '-1': 'ikte'
      },
      relativeTime: {
        future: {
          one: '{0} jándor maŋŋilit',
          two: '{0} jándor amaŋŋilit',
          other: '{0} jándora maŋŋilit'
        },
        past: {
          one: '{0} jándor árat',
          two: '{0} jándora árat',
          other: '{0} jándora árat'
        }
      }
    },
    hour: {
      displayName: 'diibmu',
      relativeTime: {
        future: {
          one: '{0} diibmu maŋŋilit',
          two: '{0} diibmur maŋŋilit',
          other: '{0} diibmur maŋŋilit'
        },
        past: {
          one: '{0} diibmu árat',
          two: '{0} diibmur árat',
          other: '{0} diibmur árat'
        }
      }
    },
    minute: {
      displayName: 'minuhtta',
      relativeTime: {
        future: {
          one: '{0} minuhta maŋŋilit',
          two: '{0} minuhtta maŋŋilit',
          other: '{0} minuhtta maŋŋilit'
        },
        past: {
          one: '{0} minuhta árat',
          two: '{0} minuhtta árat',
          other: '{0} minuhtta árat'
        }
      }
    },
    second: {
      displayName: 'sekunda',
      relative: {
        '0': 'now'
      },
      relativeTime: {
        future: {
          one: '{0} sekunda maŋŋilit',
          two: '{0} sekundda maŋŋilit',
          other: '{0} sekundda maŋŋilit'
        },
        past: {
          one: '{0} sekunda árat',
          two: '{0} sekundda árat',
          other: '{0} sekundda árat'
        }
      }
    }
  }
};