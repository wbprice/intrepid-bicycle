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

    Promise.all([
      this.app.orm.Student.findOne(studentId),
      this.app.orm.Course.findOne(courseId)
    ])
    .then(results => {
      this.log.info('results are ', results)

      const studentRecord = results[0]
      const courseRecord = results[1]

      studentRecord.courses.add(courseRecord.id)
      studentRecord.save(err => {
        if (err) throw err
        reply(Object.assign({}, studentRecord, {
          courses: [
            ...studentRecord.courses,
            courseRecord
          ]
        }))
      })

    })
    .catch(error => {
      reply(Boom.badRequest('There was an error.  That\'s all we know.'))
    })
  }

  quit (request, reply) {

    const payload = JSON.parse(request.payload)
    const studentId = payload.studentId
    const courseId = payload.courseId

    Promise.all([
      this.app.orm.Student.findOne(studentId),
      this.app.orm.Course.findOne(courseId)
    ])
    .then(results => {

      const studentRecord = results[0]
      const courseRecord = results[1]

      studentRecord.courses.remove(courseRecord.id)
      studentRecord.save(err => {
        reply(Object.assign({}, studentRecord, {
          courses: studentRecord.courses.filter(course => {
            return course.id !== courseRecord.id
          })
        }))
      })

    })
    .catch(error => {
      reply(Boom.badRequest('There was an error.  That\'s all we know.'))
    })

  }

}
