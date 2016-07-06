'use strict'

const Model = require('trails-model')

/**
 * @module Classes
 * @description Model for managing information about classes
 */
module.exports = class Classes extends Model {

  static config () {
  }

  static schema () {
    return {
      title: {
        type: 'string'
      },
      description: {
        type: 'string'
      },
      shortcode: {
        type: 'string'
      }
    }
  }
}
