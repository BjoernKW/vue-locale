"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'lkt',
  pluralRuleFunction: function (n,ord){if(ord)return"other";return"other"},
  fields: {
    year: {
      displayName: 'Ómakȟa',
      relative: {
        '0': 'Lé ómakȟa kiŋ',
        '1': 'Tȟokáta ómakȟa kiŋháŋ',
        '-1': 'Ómakȟa kʼuŋ héhaŋ'
      },
      relativeTime: {
        future: {
          other: 'Letáŋhaŋ ómakȟa {0} kiŋháŋ'
        },
        past: {
          other: 'Hékta ómakȟa {0} kʼuŋ héhaŋ'
        }
      }
    },
    month: {
      displayName: 'Wí',
      relative: {
        '0': 'Lé wí kiŋ',
        '1': 'Wí kiŋháŋ',
        '-1': 'Wí kʼuŋ héhaŋ'
      },
      relativeTime: {
        future: {
          other: 'Letáŋhaŋ wíyawapi {0} kiŋháŋ'
        },
        past: {
          other: 'Hékta wíyawapi {0} kʼuŋ héhaŋ'
        }
      }
    },
    day: {
      displayName: 'Aŋpétu',
      relative: {
        '0': 'Lé aŋpétu kiŋ',
        '1': 'Híŋhaŋni kiŋháŋ',
        '-1': 'Lé aŋpétu kiŋ'
      },
      relativeTime: {
        future: {
          other: 'Letáŋhaŋ {0}-čháŋ kiŋháŋ'
        },
        past: {
          other: 'Hékta {0}-čháŋ k’uŋ héhaŋ'
        }
      }
    },
    hour: {
      displayName: 'Owápȟe',
      relativeTime: {
        future: {
          other: 'Letáŋhaŋ owápȟe {0} kiŋháŋ'
        },
        past: {
          other: 'Hékta owápȟe {0} kʼuŋ héhaŋ'
        }
      }
    },
    minute: {
      displayName: 'Owápȟe oȟʼáŋkȟo',
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
      displayName: 'Okpí',
      relative: {
        '0': 'now'
      },
      relativeTime: {
        future: {
          other: 'Letáŋhaŋ okpí {0} kiŋháŋ'
        },
        past: {
          other: 'Hékta okpí {0} k’uŋ héhaŋ'
        }
      }
    }
  }
};