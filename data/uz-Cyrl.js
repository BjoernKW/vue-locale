"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'uz-Cyrl',
  pluralRuleFunction: function (n,ord){if(ord)return"other";return"other"},
  fields: {
    year: {
      displayName: 'Йил',
      relative: {
        '0': 'бу йил',
        '1': 'кейинги йил',
        '-1': 'ўтган йил'
      },
      relativeTime: {
        future: {
          one: '{0} йилдан сўнг',
          other: '{0} йилдан сўнг'
        },
        past: {
          one: '{0} йил аввал',
          other: '{0} йил аввал'
        }
      }
    },
    month: {
      displayName: 'Ой',
      relative: {
        '0': 'бу ой',
        '1': 'кейинги ой',
        '-1': 'ўтган ой'
      },
      relativeTime: {
        future: {
          one: '{0} ойдан сўнг',
          other: '{0} ойдан сўнг'
        },
        past: {
          one: '{0} ой аввал',
          other: '{0} ой аввал'
        }
      }
    },
    day: {
      displayName: 'Кун',
      relative: {
        '0': 'бугун',
        '1': 'эртага',
        '-1': 'кеча'
      },
      relativeTime: {
        future: {
          one: '{0} кундан сўнг',
          other: '{0} кундан сўнг'
        },
        past: {
          one: '{0} кун олдин',
          other: '{0} кун олдин'
        }
      }
    },
    hour: {
      displayName: 'Соат',
      relativeTime: {
        future: {
          one: '{0} соатдан сўнг',
          other: '{0} соатдан сўнг'
        },
        past: {
          one: '{0} соат олдин',
          other: '{0} соат олдин'
        }
      }
    },
    minute: {
      displayName: 'Дақиқа',
      relativeTime: {
        future: {
          one: '{0} дақиқадан сўнг',
          other: '{0} дақиқадан сўнг'
        },
        past: {
          one: '{0} дақиқа олдин',
          other: '{0} дақиқа олдин'
        }
      }
    },
    second: {
      displayName: 'Сония',
      relative: {
        '0': 'ҳозир'
      },
      relativeTime: {
        future: {
          one: '{0} сониядан сўнг',
          other: '{0} сониядан сўнг'
        },
        past: {
          one: '{0} сония олдин',
          other: '{0} сония олдин'
        }
      }
    }
  }
};