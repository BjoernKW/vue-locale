"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'pa',
  pluralRuleFunction: function (n,ord){if(ord)return"other";return n==0||n==1?"one":"other"},
  fields: {
    year: {
      displayName: 'ਸਾਲ',
      relative: {
        '0': 'ਇਹ ਸਾਲ',
        '1': 'ਅਗਲਾ ਸਾਲ',
        '-1': 'ਪਿਛਲਾ ਸਾਲ'
      },
      relativeTime: {
        future: {
          one: '{0} ਸਾਲ ਵਿੱਚ',
          other: '{0} ਸਾਲਾਂ ਵਿੱਚ'
        },
        past: {
          one: '{0} ਸਾਲ ਪਹਿਲਾਂ',
          other: '{0} ਸਾਲ ਪਹਿਲਾਂ'
        }
      }
    },
    month: {
      displayName: 'ਮਹੀਨਾ',
      relative: {
        '0': 'ਇਹ ਮਹੀਨਾ',
        '1': 'ਅਗਲਾ ਮਹੀਨਾ',
        '-1': 'ਪਿਛਲਾ ਮਹੀਨਾ'
      },
      relativeTime: {
        future: {
          one: '{0} ਮਹੀਨੇ ਵਿੱਚ',
          other: '{0} ਮਹੀਨਿਆਂ ਵਿੱਚ'
        },
        past: {
          one: '{0} ਮਹੀਨੇ ਪਹਿਲਾਂ',
          other: '{0} ਮਹੀਨੇ ਪਹਿਲਾਂ'
        }
      }
    },
    day: {
      displayName: 'ਦਿਨ',
      relative: {
        '0': 'ਅੱਜ',
        '1': 'ਭਲਕੇ',
        '-1': 'ਬੀਤਿਆ ਕੱਲ੍ਹ'
      },
      relativeTime: {
        future: {
          one: '{0} ਦਿਨ ਵਿੱਚ',
          other: '{0} ਦਿਨਾਂ ਵਿੱਚ'
        },
        past: {
          one: '{0} ਦਿਨ ਪਹਿਲਾਂ',
          other: '{0} ਦਿਨ ਪਹਿਲਾਂ'
        }
      }
    },
    hour: {
      displayName: 'ਘੰਟਾ',
      relativeTime: {
        future: {
          one: '{0} ਘੰਟੇ ਵਿੱਚ',
          other: '{0} ਘੰਟਿਆਂ ਵਿੱਚ'
        },
        past: {
          one: '{0} ਘੰਟਾ ਪਹਿਲਾਂ',
          other: '{0} ਘੰਟੇ ਪਹਿਲਾਂ'
        }
      }
    },
    minute: {
      displayName: 'ਮਿੰਟ',
      relativeTime: {
        future: {
          one: '{0} ਮਿੰਟ ਵਿੱਚ',
          other: '{0} ਮਿੰਟਾਂ ਵਿੱਚ'
        },
        past: {
          one: '{0} ਮਿੰਟ ਪਹਿਲਾਂ',
          other: '{0} ਮਿੰਟ ਪਹਿਲਾਂ'
        }
      }
    },
    second: {
      displayName: 'ਸਕਿੰਟ',
      relative: {
        '0': 'ਹੁਣ'
      },
      relativeTime: {
        future: {
          one: '{0} ਸਕਿੰਟ ਵਿੱਚ',
          other: '{0} ਸਕਿੰਟਾਂ ਵਿੱਚ'
        },
        past: {
          one: '{0} ਸਕਿੰਟ ਪਹਿਲਾਂ',
          other: '{0} ਸਕਿੰਟ ਪਹਿਲਾਂ'
        }
      }
    }
  }
};