"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'br',
  pluralRuleFunction: function (n,ord){var s=String(n).split("."),t0=Number(s[0])==n,n10=t0&&s[0].slice(-1),n100=t0&&s[0].slice(-2),n1000000=t0&&s[0].slice(-6);if(ord)return"other";return n10==1&&n100!=11&&n100!=71&&n100!=91?"one":n10==2&&n100!=12&&n100!=72&&n100!=92?"two":(n10==3||n10==4||n10==9)&&(n100<10||n100>19)&&(n100<70||n100>79)&&(n100<90||n100>99)?"few":n!=0&&t0&&n1000000==0?"many":"other"},
  fields: {
    year: {
      displayName: 'bloaz',
      relative: {
        '0': 'hevlene',
        '1': 'ar bloaz a zeu',
        '-1': 'warlene'
      },
      relativeTime: {
        future: {
          one: 'a-benn {0} bloaz',
          two: 'a-benn {0} vloaz',
          few: 'a-benn {0} bloaz',
          many: 'a-benn {0} a vloazioù',
          other: 'a-benn {0} vloaz'
        },
        past: {
          one: '{0} bloaz zo',
          two: '{0} vloaz zo',
          few: '{0} bloaz zo',
          many: '{0} a vloazioù zo',
          other: '{0} vloaz zo'
        }
      }
    },
    month: {
      displayName: 'miz',
      relative: {
        '0': 'ar miz-mañ',
        '1': 'ar miz a zeu',
        '-1': 'ar miz diaraok'
      },
      relativeTime: {
        future: {
          one: 'a-benn {0} miz',
          two: 'a-benn {0} viz',
          few: 'a-benn {0} miz',
          many: 'a-benn {0} a vizioù',
          other: 'a-benn {0} miz'
        },
        past: {
          one: '{0} miz zo',
          two: '{0} viz zo',
          few: '{0} miz zo',
          many: '{0} a vizioù zo',
          other: '{0} miz zo'
        }
      }
    },
    day: {
      displayName: 'deiz',
      relative: {
        '0': 'hiziv',
        '1': 'warcʼhoazh',
        '-2': 'dercʼhent-decʼh',
        '-1': 'decʼh'
      },
      relativeTime: {
        future: {
          one: 'a-benn {0} deiz',
          two: 'a-benn {0} zeiz',
          few: 'a-benn {0} deiz',
          many: 'a-benn {0} a zeizioù',
          other: 'a-benn {0} deiz'
        },
        past: {
          one: '{0} deiz zo',
          two: '{0} zeiz zo',
          few: '{0} deiz zo',
          many: '{0} a zeizioù zo',
          other: '{0} deiz zo'
        }
      }
    },
    hour: {
      displayName: 'eur',
      relativeTime: {
        future: {
          one: 'a-benn {0} eur',
          two: 'a-benn {0} eur',
          few: 'a-benn {0} eur',
          many: 'a-benn {0} a eurioù',
          other: 'a-benn {0} eur'
        },
        past: {
          one: '{0} eur zo',
          two: '{0} eur zo',
          few: '{0} eur zo',
          many: '{0} a eurioù zo',
          other: '{0} eur zo'
        }
      }
    },
    minute: {
      displayName: 'munut',
      relativeTime: {
        future: {
          one: 'a-benn {0} munut',
          two: 'a-benn {0} vunut',
          few: 'a-benn {0} munut',
          many: 'a-benn {0} a vunutoù',
          other: 'a-benn {0} munut'
        },
        past: {
          one: '{0} munut zo',
          two: '{0} vunut zo',
          few: '{0} munut zo',
          many: '{0} a vunutoù zo',
          other: '{0} munut zo'
        }
      }
    },
    second: {
      displayName: 'eilenn',
      relative: {
        '0': 'bremañ'
      },
      relativeTime: {
        future: {
          one: 'a-benn {0} eilenn',
          two: 'a-benn {0} eilenn',
          few: 'a-benn {0} eilenn',
          many: 'a-benn {0} a eilennoù',
          other: 'a-benn {0} eilenn'
        },
        past: {
          one: '{0} eilenn zo',
          two: '{0} eilenn zo',
          few: '{0} eilenn zo',
          many: '{0} eilenn zo',
          other: '{0} eilenn zo'
        }
      }
    }
  }
};