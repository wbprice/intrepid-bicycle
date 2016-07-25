'use strict'

const Service = require('trails-service')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const jwtSecretKey = process.env.JWT_SECRET_KEY

/**
 * @module AuthService
 * @description Service for checking user passwords.
 */
module.exports = class AuthService extends Service {

  login (emailAddress, plaintextPassword) {

    return this.app.orm.Auth.findOne({
      emailAddress: emailAddress
    })
    .then(account => {

      const tokenAccount = Object.assign({}, {
        role: 'student',
        emailAddress: account.emailAddress
      })

      return new Promise((resolve, reject) => {
        bcrypt.compare(plaintextPassword, account.password, (err, res) => {
          if (err) reject(err)
          resolve(res)
        })
      })
      .then(verdict => {
        if (verdict) {
          return jwt.sign(tokenAccount, jwtSecretKey, {
            expiresIn: '1 day'
          })
        }
      })

    })

  }

  verify (token) {
    return new Promise((resolve, reject) => {
      jwt.verify(token, jwtSecretKey, (err, decoded) => {
        if (err) reject(err)
        resolve(decoded)
      })
    })
  }

}
