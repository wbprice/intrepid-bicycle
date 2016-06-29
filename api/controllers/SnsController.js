'use strict'

const Controller = require('trails-controller')

/**
 * @module SnsController
 * @description Generated Trails.js Controller.
 */

module.exports = class SnsController extends Controller{

  signup (request, reply) {

    const emailAddress = request.param.emailAddress

    this.app.services.SnsService.signup(emailAddress, (data) => {
      if (data) {
        reply.ok()
      }
      else {
        reply.error()
      }
    })

  }

}
