'use strict'

const Controller = require('trails-controller')
const Boom = require('Boom')

/**
 * @module CourseController
 * @description Generated Trails.js Controller.
 */
module.exports = class CourseController extends Controller {

  enroll (request, reply) {

    const studentId = request.payload.studentId
    const courseId = request.payload.courseId

    this.app.orm.Student.findOne(studentId)
    .then(student => {
      student.courses.add(courseId)
      student.save(err => {
        if (err) throw err
      })
      reply(student)
    })
    .catch(error => {
      reply(Boom.badRequest('There was an error. That\'s all we know'))
    })
  }

  quit (request, reply) {

    enroll (request, reply) {

      const studentId = request.payload.studentId
      const courseId = request.payload.courseId

      this.app.orm.Student.findOne(studentId)
      .then(student => {
        student.courses.remove(courseId)
        student.save(err => {
          if (err) throw err
        })
        reply(student)
      })
      .catch(error => {
        reply(Boom.badRequest('There was an error. That\'s all we know'))
      })
    }

  }

}
