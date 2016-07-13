'use strict'
/* global describe, it */

const assert = require('assert')

describe('Auth Model', () => {
  it('should exist', () => {
    assert(global.app.api.models['Auth'])
  })
})
