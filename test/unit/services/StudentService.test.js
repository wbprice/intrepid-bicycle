'use strict'
/* global describe, it */

const assert = require('assert')

describe('StudentService', () => {
  it('should exist', () => {
    assert(global.app.api.services['StudentService'])
  })
})
