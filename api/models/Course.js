'use strict'

const Model = require('trails-model')

/**
 * @module Course
 * @description Model for managing information about a course.
 */
module.exports = class Course extends Model {

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
      },

      students: {
        collection: 'student',
        via: 'courses'
      }

    }
  }
}
