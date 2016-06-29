'use strict'

const Service = require('trails-service')
const AWS = require('aws-sdk')
const sns = new AWS.SNS()

/**
 * @module SnsService
 * @description A service for making calls to AWS SNS
 */
module.exports = class SnsService extends Service {

  /*
   * @name
   * SnsService#signup
   * Given an SMS number, creates a subscription to a given topic.
   */

  signup(emailAddress) {

    this.log.info('should do something!')

    if (!emailAddress) {
      throw 'Please provide an email address.'
    }

    const params = {
      Protocol: 'email',
      TopicArn: 'arn:aws:sns:us-east-1:456718055477:langaemail',
      Endpoint: emailAddress
    }

    return 'win sauce'

    sns.subscribe(params, (err, data) => {
      if (err) {
        this.log.info(err)
      }
      else {
        this.log.info(data)
      }
    })

  }

}
