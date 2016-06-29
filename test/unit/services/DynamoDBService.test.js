'use strict'
/* global describe, it */

const assert = require('assert')

describe('DynamoDBService', () => {
  it('should exist', () => {
    assert(global.app.api.services['DynamoDBService'])
  })
})
