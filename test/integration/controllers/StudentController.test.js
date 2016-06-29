'use strict'
/* global describe, it */

const assert = require('assert')

describe('StudentController', () => {
  it('should exist', () => {
    assert(global.app.api.controllers['StudentController'])
  })
})
