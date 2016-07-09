'use strict'

const Policy = require('trails-policy')
const jwtSecretKey = process.env.JWT_SECRET_KEY
const jwt = require('jsonwebtoken')
const Boom = require('Boom')

/**
 * @module IsAdminPolicy
 * @description Checks to see if the user is an admin.
 */
module.exports = class IsAdminPolicy extends Policy {

  test (request, reply) {

    const token = request.headers.authorization &&
                  request.headers.authorization.replace('Bearer ', '')

    if (!token || token === 'null') {
      return reply(Boom.badRequest('Please include an authorization header'))
    }

    const decodedToken = jwt.verify(token.replace('Bearer ', ''), jwtSecretKey)
    if (decodedToken.role !== 'admin') {
      reply(Boom.unauthorized('Only admins are able to perform this action'))
    }

    reply()

  }

}
