"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'uz',
  pluralRuleFunction: function (n,ord){if(ord)return"other";return n==1?"one":"other"},
  fields: {
    year: {
      displayName: 'yil',
      relative: {
        '0': 'bu yil',
        '1': 'keyingi yil',
        '-1': 'oʻtgan yil'
      },
      relativeTime: {
        future: {
          one: '{0} yildan soʻng',
          other: '{0} yildan so‘ng'
        },
        past: {
          one: '{0} yil oldin',
          other: '{0} yil oldin'
        }
      }
    },
    month: {
      displayName: 'oy',
      relative: {
        '0': 'shu oy',
        '1': 'keyingi oy',
        '-1': 'o‘tgan oy'
      },
      relativeTime: {
        future: {
          one: '{0} oydan so‘ng',
          other: '{0} oydan so‘ng'
        },
        past: {
          one: '{0} oy oldin',
          other: '{0} oy oldin'
        }
      }
    },
    day: {
      displayName: 'kun',
      relative: {
        '0': 'bugun',
        '1': 'ertaga',
        '-1': 'kecha'
      },
      relativeTime: {
        future: {
          one: '{0} kundan so‘ng',
          other: '{0} kundan so‘ng'
        },
        past: {
          one: '{0} kun oldin',
          other: '{0} kun oldin'
        }
      }
    },
    hour: {
      displayName: 'soat',
      relativeTime: {
        future: {
          one: '{0} soatdan so‘ng',
          other: '{0} soatdan so‘ng'
        },
        past: {
          one: '{0} soat oldin',
          other: '{0} soat oldin'
        }
      }
    },
    minute: {
      displayName: 'daqiqa',
      relativeTime: {
        future: {
          one: '{0} daqiqadan so‘ng',
          other: '{0} daqiqadan so‘ng'
        },
        past: {
          one: '{0} daqiqa oldin',
          other: '{0} daqiqa oldin'
        }
      }
    },
    second: {
      displayName: 'soniya',
      relative: {
        '0': 'hozir'
      },
      relativeTime: {
        future: {
          one: '{0} soniyadan so‘ng',
          other: '{0} soniyadan so‘ng'
        },
        past: {
          one: '{0} soniya oldin',
          other: '{0} soniya oldin'
        }
      }
    }
  }
};