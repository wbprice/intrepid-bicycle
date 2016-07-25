'use strict'

const winston = require('winston')

module.exports = {

  trailpack: {
    disabled: [
      'repl'
    ]
  },

  /**
   * This 'connection' object could also be a connection string
   * e.g. 'postgresql://user:password@localhost:5432/databaseName?ssl=false'
   */

  log: {
    logger: new winston.Logger({
      level: 'info',
      exitOnError: false,
      transports: [
        new winston.transports.Console({
          timestamp: true
        }),
        new winston.transports.File({
          name: 'info-file',
          level: 'info',
          filename: 'trails-info.log',
          timestamp: true
        }),
        new winston.transports.File({
          name: 'error-file',
          level: 'error',
          filename: 'trails-error.log',
          timestamp: true
        })
      ]
    })
  }

}
