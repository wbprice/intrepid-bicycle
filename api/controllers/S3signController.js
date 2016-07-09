'use strict'

const Controller = require('trails-controller')

/**
 * @module S3signController
 * @description Generated Trails.js Controller.
 */

module.exports = class S3signController extends Controller {

  getSignedUrl(request, reply) {

    const filename = request.query.filename
    const filetype = request.query.filetype

    this.app.services.S3signService.getSignedUrl(filename, filetype)
    .then(response => {
      this.log.info('response was ', response)
      reply(response)
    })
    .catch(error => {
      this.log.info('error was ', error)
      reply(error)
    })

  }

}
