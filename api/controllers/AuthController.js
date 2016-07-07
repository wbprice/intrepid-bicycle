'use strict'

const Controller = require('trails-controller')

/**
 * @module AuthController
 * @description Generated Trails.js Controller.
 */
module.exports = class AuthController extends Controller {

  login (request, reply) {

    const emailAddress = request.payload.emailAddress
    const plaintextPassword = request.payload.plaintextPassword

    this.app.services.AuthService.verify(emailAddress, plaintextPassword)
    .then(token => {

      if (token) {
        reply({token})
      }

      else {
        reply.view('login', {
          error: 'That user/password combination wasn\'t found.'
        })
      }

    })
    .catch(error => {
      reply.view('login', {
        error: 'There was an error logging in'
      })
    })

  }

}
