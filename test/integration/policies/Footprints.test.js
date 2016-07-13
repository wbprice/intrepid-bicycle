'use strict'
/* global describe, it */

const assert = require('assert')

describe('Footprints', () => {
  it('should exist', () => {
    assert(global.app.api.policies['Footprints'])
  })
})
