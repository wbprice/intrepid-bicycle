'use strict'

const Controller = require('trails-controller')

/**
 * @module AuthController
 * @description Generated Trails.js Controller.
 */
module.exports = class AuthController extends Controller {

  login (request, reply) {

    this.log.info('hit AuthController#login')

    this.log.info('request.body: ', request.body)
    this.log.info('request.payload: ', request.payload)

    const emailAddress = request.payload.emailAddress
    const plaintextPassword = request.payload.plaintextPassword

    this.app.services.AuthService.verify(emailAddress, plaintextPassword)
    .then(response => {

      this.log.info('auth endpoint worked and the response is: ', response)

      if (response === true) {
        reply.view('index')
      }
      else {
        reply.view('login', {
          error: 'That user/password combination wasn\'t found.'
        })
      }
    })
    .catch(error => {

      this.log.info('there was an epic fail and the error is: ', error)

      reply.view('login', {
        error: 'There was an error logging in'
      })
    })

  }

}
