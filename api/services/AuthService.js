'use strict'

const Service = require('trails-service')
const bcrypt = require('bycryptjs')

/**
 * @module AuthService
 * @description Service for checking user passwords.
 */
module.exports = class AuthService extends Service {

  verify (emailAddress, plaintextPassword) {

    this.app.orm.Auth.find({
      emailAddress: emailAddress
    })
    .then(auth => {
      return bcrypt.compare(plaintextPassword, auth.password, (err, res) => {
        if (err) throw err
        return res
      })
    })

  }

}
