'use strict'

const Controller = require('trails-controller')

/**
 * @module SnsController
 * @description Generated Trails.js Controller.
 */

module.exports = class SnsController extends Controller{

  signup (request, reply) {

    console.log(request.payload)

    const emailAddress = request.payload.emailAddress

    reply('things are ok')

    this.app.services.SnsService.signup(emailAddress)

  }

}
