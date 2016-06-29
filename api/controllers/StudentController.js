'use strict'

const Controller = require('trails-controller')

/**
 * @module StudentController
 * @description Generated Trails.js Controller.
 */
module.exports = class StudentController extends Controller{

  register (request, reply) {

    const student = {
      emailAddress: request.payload.emailAddress,
      name: request.payload.name,
      interests: request.payload.interests
    }

    this.app.services.StudentService.register(student)
    .then(data => {
      this.log.info('student data', data)
      reply(data)
    })
    .catch(err => {
      this.log.info('error found: ', err)
      reply(err)
    })

  }

  list (request, reply) {

    this.app.services.StudentService.list()
    .then(data => {
      reply(data)
    })
    .catch(err => {
      this.log.info(err)
      reply(err)
    })

  }

  delete (request, reply) {

    const student = {
      id: request.payload.id,
      name: request.payload.name
    }

    this.app.services.StudentService.delete(student)
    .then(data => {
      reply(data)
    })
    .catch(err => {
      this.log.info(err)
      reply(err)
    })

  }

}
