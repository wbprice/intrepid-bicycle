'use strict'
/* global describe, it */

const assert = require('assert')

describe('IsAdmin', () => {
  it('should exist', () => {
    assert(global.app.api.policies['IsAdmin'])
  })
})
