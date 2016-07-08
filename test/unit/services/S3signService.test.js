'use strict'
/* global describe, it */

const assert = require('assert')

describe('S3signService', () => {
  it('should exist', () => {
    assert(global.app.api.services['S3signService'])
  })
})
