'use strict'

const Service = require('trails-service')
const bcrypt = require('bcryptjs')

/**
 * @module AuthService
 * @description Service for checking user passwords.
 */
module.exports = class AuthService extends Service {

  verify (emailAddress, plaintextPassword) {

    this.log.info('should find the auth for user with email address', emailAddress)

    return this.app.orm.Auth.find({
      emailAddress: emailAddress
    })
    .then(auth => {

      this.log.info('auth results!', auth)

      return new Promise((resolve, reject) => {
        bcrypt.compare(plaintextPassword, auth[0].password, (err, res) => {
          if (err) reject(err)
          resolve(res)
        })
      })
    })

  }

}
