'use strict'
/* global describe, it */

const assert = require('assert')

describe('Student Model', () => {
  it('should exist', () => {
    assert(global.app.api.models['Student'])
  })
})
