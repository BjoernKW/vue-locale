"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'zh-Hant',
  pluralRuleFunction: function (n,ord){if(ord)return"other";return"other"},
  fields: {
    year: {
      displayName: '年',
      relative: {
        '0': '今年',
        '1': '明年',
        '-1': '去年'
      },
      relativeTime: {
        future: {
          other: '{0} 年後'
        },
        past: {
          other: '{0} 年前'
        }
      }
    },
    month: {
      displayName: '月',
      relative: {
        '0': '本月',
        '1': '下個月',
        '-1': '上個月'
      },
      relativeTime: {
        future: {
          other: '{0} 個月後'
        },
        past: {
          other: '{0} 個月前'
        }
      }
    },
    day: {
      displayName: '日',
      relative: {
        '0': '今天',
        '1': '明天',
        '2': '後天',
        '-2': '前天',
        '-1': '昨天'
      },
      relativeTime: {
        future: {
          other: '{0} 天後'
        },
        past: {
          other: '{0} 天前'
        }
      }
    },
    hour: {
      displayName: '小時',
      relativeTime: {
        future: {
          other: '{0} 小時後'
        },
        past: {
          other: '{0} 小時前'
        }
      }
    },
    minute: {
      displayName: '分鐘',
      relativeTime: {
        future: {
          other: '{0} 分鐘後'
        },
        past: {
          other: '{0} 分鐘前'
        }
      }
    },
    second: {
      displayName: '秒',
      relative: {
        '0': '現在'
      },
      relativeTime: {
        future: {
          other: '{0} 秒後'
        },
        past: {
          other: '{0} 秒前'
        }
      }
    }
  }
};