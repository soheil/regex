## regex-utils

Regex expressions for common use cases.

[![Build Status](https://api.travis-ci.org/soheil/regex.svg)](https://api.travis-ci.org/soheil/regex)

## Install

```bash
$ npm install regex-utils
```

## Usage

```js
const regexUtils = require('regex-utils')

regexUtils.emails('a random blob of text with an email@example.com in it...')
// => ["email@example.com"]

regexUtils.emailValid('email@example.com')
// => true

regexUtils.emailValid('am I an email@example.com?')
// => false

regexUtils.nameValid('Soheil Yasrebi')
// => true

```
