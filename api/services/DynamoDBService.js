'use strict'

const Service = require('trails-service')

/**
 * @module DynamoDBService
 * @description A service for interfacing with DynamoDB
 */

module.exports = class DynamoDBService extends Service {

  signup(user) {

    const dynamodb = new AWS.DynamoDB()
    const AWS = require('aws-sdk')
    AWS.config.update({
      region: 'us-east-1',
      endpoint: process.env.AWS_DYNAMODB_ENDPOINT || 'http://localhost:8000'
    })

    const params = {
      name: user.name,
      emailAddress: user.emailAddress,
      interests: user.interests
    }

  }

}
