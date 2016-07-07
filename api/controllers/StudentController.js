'use strict'

const Controller = require('trails-controller')

/**
 * @module StudentController
 * @description Generated Trails.js Controller.
 */
module.exports = class StudentController extends Controller {

  create (request, reply) {

    this.log.info('Student controller hit')

    const student = request.payload

    this.app.services.StudentService.create(student)
    .then(response => {
      reply(response)
    })
    .catch(error => {
      reply(error)
    })
  }

}
