'use strict'

const Controller = require('trails-controller')

/**
 * @module AuthController
 * @description Generated Trails.js Controller.
 */
module.exports = class AuthController extends Controller {

  verify (request, reply) {

    const emailAddress = request.payload.emailAddress
    const plaintextPassword = request.payload.plaintextPassword

    this.app.services.AuthService.verify(emailAddress, plaintextPassword)
    .then(response => {
      reply(response)
    })
    .catch(error => {
      reply(error)
    })

  }

}
