"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'mn',
  pluralRuleFunction: function (n,ord){if(ord)return"other";return n==1?"one":"other"},
  fields: {
    year: {
      displayName: 'Жил',
      relative: {
        '0': 'энэ жил',
        '1': 'ирэх жил',
        '-1': 'өнгөрсөн жил'
      },
      relativeTime: {
        future: {
          one: '{0} жилийн дараа',
          other: '{0} жилийн дараа'
        },
        past: {
          one: '{0} жилийн өмнө',
          other: '{0} жилийн өмнө'
        }
      }
    },
    month: {
      displayName: 'Сар',
      relative: {
        '0': 'энэ сар',
        '1': 'ирэх сар',
        '-1': 'өнгөрсөн сар'
      },
      relativeTime: {
        future: {
          one: '{0} сарын дараа',
          other: '{0} сарын дараа'
        },
        past: {
          one: '{0} сарын өмнө',
          other: '{0} сарын өмнө'
        }
      }
    },
    day: {
      displayName: 'Өдөр',
      relative: {
        '0': 'өнөөдөр',
        '1': 'маргааш',
        '2': 'нөгөөдөр',
        '-2': 'уржигдар',
        '-1': 'өчигдөр'
      },
      relativeTime: {
        future: {
          one: '{0} өдрийн дараа',
          other: '{0} өдрийн дараа'
        },
        past: {
          one: '{0} өдрийн өмнө',
          other: '{0} өдрийн өмнө'
        }
      }
    },
    hour: {
      displayName: 'Цаг',
      relativeTime: {
        future: {
          one: '{0} цагийн дараа',
          other: '{0} цагийн дараа'
        },
        past: {
          one: '{0} цагийн өмнө',
          other: '{0} цагийн өмнө'
        }
      }
    },
    minute: {
      displayName: 'Минут',
      relativeTime: {
        future: {
          one: '{0} минутын дараа',
          other: '{0} минутын дараа'
        },
        past: {
          one: '{0} минутын өмнө',
          other: '{0} минутын өмнө'
        }
      }
    },
    second: {
      displayName: 'Секунд',
      relative: {
        '0': 'Одоо'
      },
      relativeTime: {
        future: {
          one: '{0} секундын дараа',
          other: '{0} секундын дараа'
        },
        past: {
          one: '{0} секундын өмнө',
          other: '{0} секундын өмнө'
        }
      }
    }
  }
};