'use strict'

const Policy = require('trails-policy')
const jwtSecretKey = process.env.JWT_SECRET_KEY
const jwt = require('jsonwebtoken')
const Boom = require('Boom')

/**
 * @module IsStudentPolicy
 * @description Determines if the user making a request is a Student.
 */

module.exports = class IsStudentPolicy extends Policy {

  test (request, reply) {

    const token = request.headers.authorization &&
                  request.headers.authorization.replace('Bearer ', '')

    if (!token || token === 'null') {
      return reply(Boom.badRequest('Please include an authorization header'))
    }

    const decodedToken = jwt.verify(token, jwtSecretKey)
    if (decodedToken.role !== 'student') {
      reply(Boom.unauthorized('Only registered students are able to submit coursework'))
    }

    reply()

  }

}
