"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'lv',
  pluralRuleFunction: function (n,ord){var s=String(n).split("."),f=s[1]||"",v=f.length,t0=Number(s[0])==n,n10=t0&&s[0].slice(-1),n100=t0&&s[0].slice(-2),f100=f.slice(-2),f10=f.slice(-1);if(ord)return"other";return t0&&n10==0||n100>=11&&n100<=19||v==2&&(f100>=11&&f100<=19)?"zero":n10==1&&n100!=11||v==2&&f10==1&&f100!=11||v!=2&&f10==1?"one":"other"},
  fields: {
    year: {
      displayName: 'gads',
      relative: {
        '0': 'šajā gadā',
        '1': 'nākamajā gadā',
        '-1': 'pagājušajā gadā'
      },
      relativeTime: {
        future: {
          zero: 'pēc {0} gadiem',
          one: 'pēc {0} gada',
          other: 'pēc {0} gadiem'
        },
        past: {
          zero: 'pirms {0} gadiem',
          one: 'pirms {0} gada',
          other: 'pirms {0} gadiem'
        }
      }
    },
    month: {
      displayName: 'mēnesis',
      relative: {
        '0': 'šajā mēnesī',
        '1': 'nākamajā mēnesī',
        '-1': 'pagājušajā mēnesī'
      },
      relativeTime: {
        future: {
          zero: 'pēc {0} mēnešiem',
          one: 'pēc {0} mēneša',
          other: 'pēc {0} mēnešiem'
        },
        past: {
          zero: 'pirms {0} mēnešiem',
          one: 'pirms {0} mēneša',
          other: 'pirms {0} mēnešiem'
        }
      }
    },
    day: {
      displayName: 'diena',
      relative: {
        '0': 'šodien',
        '1': 'rīt',
        '2': 'parīt',
        '-2': 'aizvakar',
        '-1': 'vakar'
      },
      relativeTime: {
        future: {
          zero: 'pēc {0} dienām',
          one: 'pēc {0} dienas',
          other: 'pēc {0} dienām'
        },
        past: {
          zero: 'pirms {0} dienām',
          one: 'pirms {0} dienas',
          other: 'pirms {0} dienām'
        }
      }
    },
    hour: {
      displayName: 'stundas',
      relativeTime: {
        future: {
          zero: 'pēc {0} stundām',
          one: 'pēc {0} stundas',
          other: 'pēc {0} stundām'
        },
        past: {
          zero: 'pirms {0} stundām',
          one: 'pirms {0} stundas',
          other: 'pirms {0} stundām'
        }
      }
    },
    minute: {
      displayName: 'minūtes',
      relativeTime: {
        future: {
          zero: 'pēc {0} minūtēm',
          one: 'pēc {0} minūtes',
          other: 'pēc {0} minūtēm'
        },
        past: {
          zero: 'pirms {0} minūtēm',
          one: 'pirms {0} minūtes',
          other: 'pirms {0} minūtēm'
        }
      }
    },
    second: {
      displayName: 'sekundes',
      relative: {
        '0': 'tagad'
      },
      relativeTime: {
        future: {
          zero: 'pēc {0} sekundēm',
          one: 'pēc {0} sekundes',
          other: 'pēc {0} sekundēm'
        },
        past: {
          zero: 'pirms {0} sekundēm',
          one: 'pirms {0} sekundes',
          other: 'pirms {0} sekundēm'
        }
      }
    }
  }
};