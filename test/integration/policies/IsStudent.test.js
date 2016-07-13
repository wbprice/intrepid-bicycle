'use strict'
/* global describe, it */

const assert = require('assert')

describe('IsStudent', () => {
  it('should exist', () => {
    assert(global.app.api.policies['IsStudent'])
  })
})
