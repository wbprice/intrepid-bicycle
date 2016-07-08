'use strict'

const Controller = require('trails-controller')

/**
 * @module CourseworkController
 * @description Generated Trails.js Controller.
 */
module.exports = class CourseworkController extends Controller {

  upload (request, reply) {

    const files = request.payload.files

    this.log.info('files to be uploaded to S3', files)

    this.app.services.CourseworkService.upload(files)
    .then(response => {
      reply(response)
    })
    .catch(err => {
      reply(err)
    })

  }

}
