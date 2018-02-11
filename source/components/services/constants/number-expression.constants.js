export default {
    SPACE_AFTER: /(?:[\(\)\+\-\*\/]?)\s+/g,
    SPACE_BEFORE: /\s+(?=[\(\)\+\-\*\/])/g,
    LEFT_BRACKETS: /\(/g,
    RIGHT_BRACKETS: /\)/g,
    VERIFY_LEFT_BRACKETS: /\([\(\d\-]/g,
    VERIFY_RIGHT_BRACKETS: /\)[\)\-\/\+\*]|\)$/g,
    DUPLICATE_LEFT_BRACKETS: /\({2}/g,
    DUPLICATE_RIGHT_BRACKETS: /\){2}/g,
    NUMBER: /\d+/,
    NUMBERS: /\d+/g,
    CHECK_NUMBER: /\d+|\-\d+/,
    VERIFY_NUMBERS: /\d+[\)\-\/\+\*]/g,
    OPERATORS: /[\-\/\+\*]/g,
    VERIFY_OPERATORS: /[\-\/\+\*][\d\(]/g,
    PARSE_EXPRESSION: /\d+| \-\d+|[\(\)\+\-\*\/]/g,
    PARSE_EXCEPTION_MINUS: /\(\-/g,
    NO_NUMBERS: /\D$/,
    ALL_SYMBOLS: /[^\(\)\+\-\*\/ \ \d]/,
}