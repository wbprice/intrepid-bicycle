'use strict'

const Model = require('trails-model')

/**
 * @module Auth
 * @description Model for containing information related to authorization
 */
module.exports = class Auth extends Model {

  static config () {
  }

  static schema () {
    return {

      emailAddress: {
        type: 'string',
        unique: true
      },

      password: {
        type: 'string'
      }
    }

  }
}
