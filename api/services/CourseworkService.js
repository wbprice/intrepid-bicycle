'use strict'

const Service = require('trails-service')

/**
 * @module CourseworkService
 * @description Service for handling coursework
 */
module.exports = class CourseworkService extends Service {

  upload (files) {

    this.log.info('should upload all the files! ', files)

  }

}
