'use strict'

const Service = require('trails-service')
const Promise = require('bluebird')

/**
 * @module StudentService
 * @description A service for interacting with student data in AWS
 */

module.exports = class StudentService extends Service {

  /**
   * @name
   * StudentService#create
   * @description
   * Modifies behavior of stock #create Footprint action.
   */

  create(student) {

    return Promise.all([
      this.app.orm.Student.create({
        name: student.name,
        emailAddress: student.emailAddress,
        interests: student.interests
      }),
      this.app.orm.Auth.create({
        emailAddress: student.emailAddress,
        password: student.password
      })
    ])

  }

}
