'use strict'

const Service = require('trails-service')

const AWS = require('aws-sdk')
AWS.config.update({
  region: 'us-east-1',
  endpoint: process.env.AWS_DYNAMODB_ENDPOINT || 'http://localhost:8000'
})

const dynamodb = new AWS.DynamoDB()
const docClient = new AWS.DynamoDB.DocumentClient()
const uuid = require('uuid')

/**
 * @module StudentService
 * @description A service for interacting with student data in AWS
 */

module.exports = class StudentService extends Service {

  /**
   * @name
   * StudentService#register
   * @description
   * Accepts an object containing information about the student and creates a
   * new student record.
   */

  register(student) {

    const queryParams = {
      TableName: 'Students',
      IndexName: 'EmailAddressIndex',
      KeyConditionExpression: '#emailAddress = :newEmailAddress',
      ExpressionAttributeNames: {
        '#emailAddress': 'emailAddress'
      },
      ExpressionAttributeValues: {
        ':newEmailAddress': student.emailAddress
      }
    }

    const params = {
      TableName: 'Students',
      Item: {
        id: uuid.v4(),
        name: student.name,
        emailAddress: student.emailAddress,
        interests: student.interests
      }
    }

    return new Promise((resolve, reject) => {
      docClient.query(queryParams, (err, data) => {
        if (err) return reject(err)

        else if (data.Count > 0) {
          reject('This email address already exists')
        }

        else {
          docClient.put(params, (err, data) => {
            if (err) reject(err)
            resolve(data)
          })
        }

      })
    })

  }

  /**
   * @name
   * StudentService#delete
   * @description
   * Accepts a student ID and deletes the record from the database.
   */

  delete(student) {

    this.log.info('should delete student with ID: ', student)

    const params = {
      TableName: 'Students',
      Key: {
        id: student.id,
        name: student.name
      }
    }

    return new Promise((resolve, reject) => {
      docClient.delete(params, (err, data) => {
        if (err) return reject(err)
        resolve(data)
      })
    })

  }

  /**
   * @name
   * StudentService#list
   * @description
   * Returns a list of registered students.
   */

  list() {

    const params = {
      TableName: 'Students'
    }

    return new Promise((resolve, reject) => {
      docClient.scan(params, (err, data) => {
        if (err) return reject(err)
        resolve(data)
      })
    })

  }

}
