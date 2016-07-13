'use strict'

const Controller = require('trails-controller')
const Boom = require('Boom')

/**
 * @module AuthController
 * @description Generated Trails.js Controller.
 */
module.exports = class AuthController extends Controller {

  login (request, reply) {

    const emailAddress = request.payload.emailAddress
    const plaintextPassword = request.payload.plaintextPassword

    this.app.services.AuthService.login(emailAddress, plaintextPassword)
    .then(token => {

      if (token) {
        this.app.orm.Student.findOne({
          emailAddress
        }).then(user => {
          reply({
            token,
            user
          })
        })
      }

      else {
        reply(Boom.unauthorized('That user/password combination wasn\'t found'))
      }

    })
    .catch(error => {
      reply(Boom.badRequest('There was an error. That\'s all we know.'))
    })

  }

  verify (request, reply) {

    const token = request.query.auth_token

    if (!token || token === 'null') {
      return reply(Boom.unauthorized('No key was passed'))
    }

    this.app.services.AuthService.verify(token)
    .then(response => {
      if (response) {
        reply()
      }
      else {
        reply(Boom.unauthorized('An invalid key was passed'))
      }
    })

  }

}
