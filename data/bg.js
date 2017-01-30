"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'bg',
  pluralRuleFunction: function (n,ord){if(ord)return"other";return n==1?"one":"other"},
  fields: {
    year: {
      displayName: 'година',
      relative: {
        '0': 'тази година',
        '1': 'следващата година',
        '-1': 'миналата година'
      },
      relativeTime: {
        future: {
          one: 'след {0} година',
          other: 'след {0} години'
        },
        past: {
          one: 'преди {0} година',
          other: 'преди {0} години'
        }
      }
    },
    month: {
      displayName: 'месец',
      relative: {
        '0': 'този месец',
        '1': 'следващият месец',
        '-1': 'миналият месец'
      },
      relativeTime: {
        future: {
          one: 'след {0} месец',
          other: 'след {0} месеца'
        },
        past: {
          one: 'преди {0} месец',
          other: 'преди {0} месеца'
        }
      }
    },
    day: {
      displayName: 'ден',
      relative: {
        '0': 'днес',
        '1': 'утре',
        '2': 'вдругиден',
        '-2': 'онзи ден',
        '-1': 'вчера'
      },
      relativeTime: {
        future: {
          one: 'след {0} ден',
          other: 'след {0} дни'
        },
        past: {
          one: 'преди {0} ден',
          other: 'преди {0} дни'
        }
      }
    },
    hour: {
      displayName: 'час',
      relativeTime: {
        future: {
          one: 'след {0} час',
          other: 'след {0} часа'
        },
        past: {
          one: 'преди {0} час',
          other: 'преди {0} часа'
        }
      }
    },
    minute: {
      displayName: 'минута',
      relativeTime: {
        future: {
          one: 'след {0} минута',
          other: 'след {0} минути'
        },
        past: {
          one: 'преди {0} минута',
          other: 'преди {0} минути'
        }
      }
    },
    second: {
      displayName: 'секунда',
      relative: {
        '0': 'сега'
      },
      relativeTime: {
        future: {
          one: 'след {0} секунда',
          other: 'след {0} секунди'
        },
        past: {
          one: 'преди {0} секунда',
          other: 'преди {0} секунди'
        }
      }
    }
  }
};