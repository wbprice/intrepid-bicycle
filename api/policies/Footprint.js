'use strict'

const Policy = require('trails-policy')
const jwtSecretKey = process.env.JWT_SECRET_KEY
const jwt = require('jsonwebtoken')
const Boom = require('Boom')

/**
 * @module FootprintsPolicy
 * @description Various footprint policies
 */
module.exports = class FootprintPolicy extends Policy {

  test (request, reply) {

    function decodeToken() {
      const token = request.headers.authorization &&
                    request.headers.authorization.replace('Bearer ', '')

      if (!token || token === 'null') {
        return reply(Boom.badRequest('Please include an authorization header'))
      }

      return jwt.verify(token.replace('Bearer ', ''), jwtSecretKey)

    }

    // Functions that students and admins should have access to.
    function isStudent() {
      const decodedToken = decodeToken()
      if (decodedToken.role === 'student' || decodedToken.role === 'admin') {
        return reply()
      }
      return reply(Boom.unauthorized('Only registered students are able to perform this action'))
    }

    // Functions that only an admin should have access to.
    function isAdmin() {
      const decodedToken = decodeToken()
      if (decodedToken.role === 'admin') {
        return reply()
      }
      return reply(Boom.unauthorized('Only admins are able to perform this action'))
    }


    switch (request.params.model) {

    case 'auth':
      return isStudent()
    case 'course':
      return isStudent()
    case 'student':
      return isAdmin()
    default:
      return reply()

    }

  }

}
