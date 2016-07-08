'use strict'

const Model = require('trails-model')

/**
 * @module Student
 * @description Model that contains information about students.
 */
module.exports = class Student extends Model {

  static config () {
  }

  static schema () {
    return {
      name: {
        type: 'string'
      },

      emailAddress: {
        type: 'string',
        unique: true
      },

      interests: {
        type: 'string'
      },

      password: {
        type: 'string'
      }
    }
  }
}
