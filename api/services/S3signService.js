'use strict'

const Service = require('trails-service')

/**
 * @module S3signService
 * @description TODO document Service
 */

module.exports = class S3signService extends Service {

  getSignedUrl(filename, filetype) {

    const AWS = require('aws-sdk')

    const S3_BUCKET = process.env.S3_BUCKET
    const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID
    const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY

    AWS.config.update({
      region: process.env.S3_REGION,
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY
    })

    const s3 = new AWS.S3()

    const params = {
      Bucket: S3_BUCKET,
      Key: filename,
      ContentType: filetype,
      ACL: 'public-read'
    }

    this.log.info('S3 Sign Params: ', params)

    return new Promise((resolve, reject) => {
      s3.getSignedUrl('putObject', params, (err, data) => {
        if (err) reject(err)

        this.log.info('Pre-edit: ', data)

        data = data.replace(/\.dynamodb\./, '.s3.')
        data = data.replace(/\.us-east-1\./, '.')

        resolve({
          signed_request: data,
          url: `https://${S3_BUCKET}.s3.amazonaws.com/${filename}`
        })
      })
    })

  }

}
