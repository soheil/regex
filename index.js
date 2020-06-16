'use strict';

class regexUtils {
  static emails(str) {
    return str.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
  }

  static emailValid(str) {
    return this.emails(str).length > 0 && this.emails(str)[0].length === str.length
  }

  static nameValid(str) {
    return str.match(/[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/g) !== null;
  }
}

module.exports = regexUtils;
