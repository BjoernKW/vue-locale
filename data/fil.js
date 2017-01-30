"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default={
  locale: 'fil',
  pluralRuleFunction: function (n,ord){var s=String(n).split("."),i=s[0],f=s[1]||"",v0=!s[1],i10=i.slice(-1),f10=f.slice(-1);if(ord)return n==1?"one":"other";return v0&&(i==1||i==2||i==3)||v0&&i10!=4&&i10!=6&&i10!=9||!v0&&f10!=4&&f10!=6&&f10!=9?"one":"other"},
  fields: {
    year: {
      displayName: 'taon',
      relative: {
        '0': 'ngayong taon',
        '1': 'susunod na taon',
        '-1': 'nakaraang taon'
      },
      relativeTime: {
        future: {
          one: 'sa {0} taon',
          other: 'sa {0} (na) taon'
        },
        past: {
          one: '{0} taon ang nakalipas',
          other: '{0} (na) taon ang nakalipas'
        }
      }
    },
    month: {
      displayName: 'buwan',
      relative: {
        '0': 'ngayong buwan',
        '1': 'susunod na buwan',
        '-1': 'nakaraang buwan'
      },
      relativeTime: {
        future: {
          one: 'sa {0} buwan',
          other: 'sa {0} (na) buwan'
        },
        past: {
          one: '{0} buwan ang nakalipas',
          other: '{0} (na) buwan ang nakalipas'
        }
      }
    },
    day: {
      displayName: 'araw',
      relative: {
        '0': 'ngayong araw',
        '1': 'bukas',
        '2': 'Samakalawa',
        '-2': 'Araw bago ang kahapon',
        '-1': 'kahapon'
      },
      relativeTime: {
        future: {
          one: 'sa {0} araw',
          other: 'sa {0} (na) araw'
        },
        past: {
          one: '{0} araw ang nakalipas',
          other: '{0} (na) araw ang nakalipas'
        }
      }
    },
    hour: {
      displayName: 'oras',
      relativeTime: {
        future: {
          one: 'sa {0} oras',
          other: 'sa {0} (na) oras'
        },
        past: {
          one: '{0} oras ang nakalipas',
          other: '{0} (na) oras ang nakalipas'
        }
      }
    },
    minute: {
      displayName: 'minuto',
      relativeTime: {
        future: {
          one: 'sa {0} minuto',
          other: 'sa {0} (na) minuto'
        },
        past: {
          one: '{0} minuto ang nakalipas',
          other: '{0} (na) minuto ang nakalipas'
        }
      }
    },
    second: {
      displayName: 'segundo',
      relative: {
        '0': 'ngayon'
      },
      relativeTime: {
        future: {
          one: 'sa {0} segundo',
          other: 'sa {0} (na) segundo'
        },
        past: {
          one: '{0} segundo ang nakalipas',
          other: '{0} (na) segundo ang nakalipas'
        }
      }
    }
  }
};