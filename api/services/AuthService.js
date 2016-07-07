'use strict'

const Service = require('trails-service')
const bcrypt = require('bcryptjs')

/**
 * @module AuthService
 * @description Service for checking user passwords.
 */
module.exports = class AuthService extends Service {

  verify (emailAddress, plaintextPassword) {

    return this.app.orm.Auth.find({
      emailAddress: emailAddress
    })
    .then(auth => {
      return bcrypt.compare(plaintextPassword, auth[0].password, (err, res) => {
        if (err) throw err
        return res
      })
    })

  }

}
