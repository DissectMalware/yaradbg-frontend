export const yaraDef = {
  defaultToken: 'invalid',
  octaldigits: /-?0o[0-7]+/,
  hexdigits: /-?0x[0-9a-fA-F]+/,
  digits: /-?[0-9]+/,
  hexchars: /([0-9a-fA-F?]{2})+/,
  keywords: [
    'all',
    'and',
    'any',
    'ascii',
    'at',
    'base64',
    'base64wide',
    'condition',
    'contains',
    'endswith',
    'entrypoint',
    'false',
    'filesize',
    'for',
    'fullword',
    'global',
    'import',
    'icontains',
    'iendswith',
    'iequals',
    'in',
    'include',
    'int16',
    'int16be',
    'int32',
    'int32be',
    'int8',
    'int8be',
    'istartswith',
    'matches',
    'meta',
    'nocase',
    'none',
    'not',
    'of',
    'or',
    'private',
    'rule',
    'startswith',
    'strings',
    'them',
    'true',
    'uint16',
    'uint16be',
    'uint32',
    'uint32be',
    'uint8',
    'uint8be',
    'wide',
    'xor',
    'defined'
  ],
  typeKeywords: [
    'any',
    'of',
    'them',
    'contains',
    'icontains',
    'startswith',
    'istartswith',
    'endswith',
    'iendswith',
    'iequals',
    'matches',
    'and',
    'or'
  ],
  identifiers: /[A-Z_a-z][0-9A-Z_a-z]*/,
  string_names: /[!@#$][0-9A-Z_a-z]*/,
  rule_brackets: /[{}]/,
  regexp_control: /[(){}$^|\-*+?.[\]]/,
  regexp_escapes: /\\[^0-9x\r\nj]/,
  string_escapes: /\\(?:[nrt\\"]|x[0-9A-Fa-f]{2})/,
  operator_chars: /[!%&*+-.:<=>\\^|~]+/,
  operators: [
    '.',
    '..',
    '-',
    '~',
    '*',
    '\\',
    '%',
    '+',
    '-',
    '>>',
    '<<',
    '&',
    '^',
    '|',
    '<',
    '<=',
    '>',
    '>=',
    '==',
    '!=',
    ':',
    '='
  ],
  // The main tokenizer for our languages
  tokenizer: {
    root: [
      {
        include: '@whitespace'
      },
      {
        include: '@modules'
      },
      {
        include: '@rules_files'
      },
      {
        include: '@rules'
      }
    ],
    modules: [
      [
        'import',
        {
          token: 'regexp',
          next: '@quoted_string'
        }
      ]
    ],
    rules_files: [
      [
        'include',
        {
          token: 'keyword',
          next: '@quoted_string'
        }
      ]
    ],
    rules: [
      {
        include: '@rule_restrictions'
      },
      {
        include: '@rule_declaration'
      }
    ],
    rule_restrictions: [
      ['global', 'keyword'],
      ['private', 'keyword']
    ],
    rule_declaration: [
      ['rule', 'keyword'],
      [
        /[A-Z_a-z][0-9A-Z_a-z]{0,127}\b/,
        {
          cases: {
            '@keywords': 'invalid',
            '@default': 'type.identifier'
          }
        }
      ],
      [/:/, 'operator', '@rule_tags'],
      [/\{/, '@brackets', '@rule_content']
    ],
    rule_tags: [
      [
        /[A-Z_a-z][0-9A-Z_a-z]{0,127}\b/,
        {
          cases: {
            '@keywords': 'invalid',
            '@default': 'meta.content'
          }
        }
      ],
      [/(?=\{)/, '', '@pop']
    ],
    rule_content: [
      {
        include: '@whitespace'
      },
      [/meta\b/, 'keyword', '@rule_meta_start'],
      [/strings\b/, 'keyword', '@rule_strings_start'],
      [/condition\b/, 'keyword', '@rule_condition_start'],
      [/\}/, '@brackets', '@pop']
    ],
    // Meta
    rule_meta_start: [
      [
        /:/,
        {
          token: 'keyword',
          switchTo: '@rule_meta'
        }
      ]
    ],
    rule_meta: [
      {
        include: '@whitespace'
      },
      [/(meta|strings|condition|\})/, { token: '@rematch', next: '@pop' }],
      [
        /[A-Z_a-z][0-9A-Z_a-z]{0,127}\b/,
        {
          cases: {
            '@keywords': {
              token: 'invalid',
              next: '@meta_assign'
            },
            '@default': {
              token: 'meta.content',
              next: '@meta_assign'
            }
          }
        }
      ],
      [/[^A-Z_a-z \t\r\n]+[^\t\r\n]*$/, 'invalid']
    ],
    meta_assign: [
      [
        /=/,
        {
          token: 'operator',
          switchTo: '@meta_values'
        }
      ],
      [
        /[^= \t\r\n]+[^\t\r\n]*$/,
        {
          token: 'invalid',
          switchTo: '@meta_values'
        }
      ]
    ],
    meta_values: [
      [
        /(?=")/,
        {
          token: 'string',
          switchTo: '@quoted_string'
        }
      ], // strings
      [/@hexdigits/, 'number', '@pop'], // integers
      [/@octaldigits/, 'number', '@pop'], // integers
      [/@digits/, 'number', '@pop'], // integers
      [
        /([A-Z_a-z][0-9A-Z_a-z]{0,127})(.*$)/,
        [
          {
            cases: {
              'true|false': {
                token: 'keyword',
                next: '@pop'
              },
              '@default': {
                token: 'invalid',
                next: '@pop'
              }
            }
          },
          {
            token: 'invalid'
          }
        ]
      ] // booleans
    ],
    // Strings
    rule_strings_start: [
      [
        /:/,
        {
          token: 'keyword',
          switchTo: '@rule_strings'
        }
      ]
    ],
    rule_strings: [
      {
        include: '@whitespace'
      },
      [/(meta|strings|condition|\})/, { token: '@rematch', next: '@pop' }],
      [
        /[$][0-9A-Z_a-z]*\b/,
        {
          token: 'attribute.name',
          next: '@strings_assign'
        }
      ],
      [
        /[$]/,
        {
          token: 'attribute.name',
          next: '@strings_assign'
        } // anonymous name
      ],
      [
        /(xor)\s*(\()\s*((?:0x[0-9A-Fa-f]{1,2}|0o[0-7]{1,3}|[0-9]{1,3})(?:\s*-\s*(?:0x[0-9A-Fa-f]{1,2}|0o[0-7]{1,3}|[0-9]{1,3}))?)\s*(\))/,
        ['keyword', 'delimiter', 'number', 'delimiter']
      ],
      [
        /(base64|base64wide)(\()("(?:\\(?:[nrt\\"]|x[0-9A-Fa-f]{2})|[\x20\x21\x23-\x5B\x5D-\x7E]){1,64}")(\))/,
        ['keyword', 'delimiter', 'string', 'delimiter']
      ],
      [/(nocase|wide|ascii|fullword|private|xor|base64|base64wide)\b/, 'keyword'],
      [/[^$ \t\r\n]+[^\t\r\n]*$/, 'invalid']
    ],
    strings_assign: [
      [
        /=/,
        {
          token: 'operator',
          switchTo: '@strings_values'
        }
      ],
      [
        /[^= \t\r\n]+[^\t\r\n]*$/,
        {
          token: 'invalid',
          switchTo: '@strings_values'
        }
      ]
    ],
    strings_values: [
      [
        /(?=")/,
        {
          token: 'string',
          switchTo: '@quoted_string'
        }
      ], // strings
      [
        /\//,
        {
          token: 'regexp',
          switchTo: '@regexp'
        }
      ], // regular expressions
      [
        /\{/,
        {
          token: 'delimiter',
          switchTo: '@hex_string'
        }
      ], // hex strings
      [
        /[^{/"]+$/,
        {
          token: 'invalid',
          next: '@pop'
        }
      ] // premature end of line
    ],
    // Condition
    rule_condition_start: [
      [
        /:/,
        {
          token: 'keyword',
          switchTo: '@rule_condition'
        }
      ]
    ],
    rule_condition: [
      {
        include: '@whitespace'
      },
      [/(meta|strings|condition|\})/, { token: '@rematch', next: '@pop' }],
      [/(@string_names)(\[)(@digits)(])/, ['attribute.name', 'delimiter', 'number', 'delimiter']],
      [/(@string_names)(\*?)/, ['attribute.name', 'operator']],
      [
        /@identifiers/,
        {
          cases: {
            'and|or|not': {
              token: 'operator'
            },
            'all|any': {
              token: 'number'
            },
            'global|private|rule|meta|strings|condition|nocase|ascii|wide|base64|base64wide|xor|fullword': {
              token: 'invalid'
            },
            '@keywords': {
              token: 'keyword'
            },
            '@default': {
              token: 'attribute.name'
            }
          }
        }
      ],
      [',', 'delimiter'],
      [
        /@operator_chars/,
        {
          cases: {
            '=': {
              token: 'invalid'
            },
            '@operators': {
              token: 'operators'
            },
            '@default': {
              token: 'invalid'
            }
          }
        }
      ],
      [/@hexdigits/, 'number'],
      [/@octaldigits/, 'number'],
      [/@digits/, 'number'],
      [
        /[()]/,
        {
          token: '@brackets'
        }
      ],
      [
        /(?=")/,
        {
          token: 'string',
          next: '@quoted_string'
        }
      ], // strings
      [
        /\//,
        {
          token: 'regexp',
          next: '@regexp'
        }
      ], // regular expressions
      [/[^A-Z_a-z }\t\r\n]+[^}\t\r\n]*$/, 'invalid']
    ],
    whitespace: [
      [/[ \t\r\n]+/, ''],
      [/\/\*/, 'comment', '@comment'],
      [/\/\/.*$/, 'comment']
    ],
    comment: [
      [/[^/*]+/, 'comment'],
      [/\*\//, 'comment', '@pop'],
      [/[/*]/, 'comment']
    ],
    quoted_string: [
      [/"([^"\\]|@string_escapes)*$/, 'invalid', '@pop'],
      [
        /"/,
        {
          token: 'string',
          bracket: '@open',
          switchTo: '@quoted_chars'
        }
      ]
    ],
    quoted_chars: [
      [/[^\\"]+/, 'string'],
      [/@string_escapes/, 'escape'],
      [/\\./, 'invalid'],
      [
        /"/,
        {
          token: 'string',
          bracket: '@close',
          next: '@pop'
        }
      ]
    ],
    regexp: [
      [/(\{)([0-9]+|[0-9]+,(?:[0-9]+)?|,[0-9]+)(\})/, ['delimiter', 'number.float', 'delimiter']],
      [/\{/, 'regexp'],
      [
        /(\[)(\^?)(-?)(?=(?:[^\r\n\]\\/]|\\.)+\])/,
        [
          {
            token: 'delimiter',
            bracket: '@open',
            next: '@regexp_range'
          },
          'operator',
          'regexp'
        ]
      ],
      [/[^\\/\r\n()[\]{}]/, 'regexp'],
      [
        /(\/)(i?s?)/,
        [
          {
            token: 'regexp',
            bracket: '@close',
            next: '@pop'
          },
          'keyword.other'
        ]
      ],
      [/@regexp_escapes/, 'string'],
      [/@regexp_control/, 'delimiter'],
      [/(.+$)/, 'invalid', '@pop']
    ],
    regexp_range: [
      [
        /(-?)(\])/,
        [
          'regexp',
          {
            token: 'delimiter',
            bracket: '@close',
            next: '@pop'
          }
        ]
      ],
      [/-/, 'delimiter'],
      [/@regexp_escapes/, 'string'],
      [/[^\\\]\r\n]/, 'regexp']
    ],
    hex_string: [
      {
        include: '@whitespace'
      },
      [/}/, 'delimiter', '@pop'], // End of hex string
      [/(meta|strings|condition|\})/, { token: '@rematch', next: '@pop' }],
      [/\?\?/, 'constant'], // hex values with wildcard (?)
      [/(\?)([0-9A-Fa-f])/, ['constant', 'string']],
      [/([0-9A-Fa-f])(\?)/, ['string', 'constant']],
      ['@hexchars', 'string'], // hex values
      [/[|]/, 'delimiter'], // alternate values
      [/(\[)\s*(?:([1-9][0-9]*|[0-9]*\s*-|[0-9]+\s*-\s*[0-9]*)\s*(\]))/, ['delimiter', 'number', 'delimiter']] // hex jump
    ]
  }
};

export const yaraConfig = {
  comments: {
    // symbol used for single line comment. Remove this entry if your language does not support line comments
    lineComment: '//',
    // symbols used for start and end a block comment. Remove this entry if your language does not support block comments
    blockComment: ['/*', '*/']
  },
  // symbols used as brackets
  brackets: [
    ['{', '}'],
    ['[', ']'],
    ['(', ')']
  ],
  // symbols that are auto closed when typing
  autoClosingPairs: [
    {
      open: '"',
      close: '"',
      notIn: ['string', 'regexp', 'comment']
    },
    {
      open: '/',
      close: '/',
      notIn: ['string', 'regexp', 'comment']
    },
    {
      open: '{',
      close: '}',
      notIn: ['string', 'comment']
    },
    {
      open: '[',
      close: ']',
      notIn: ['string', 'comment']
    },
    {
      open: '(',
      close: ')',
      notIn: ['string', 'comment']
    }
  ],
  // symbols that that can be used to surround a selection
  surroundingPairs: [
    ['{', '}'],
    ['[', ']'],
    ['(', ')'],
    ['"', '"'],
    ['/', '/']
  ]
};
