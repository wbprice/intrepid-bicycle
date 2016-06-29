
module.exports = function(app) {

  const AWS = require('aws-sdk')

  AWS.config.update({
    region: 'us-east-1',
    endpoint: process.env.AWS_DYNAMODB_ENDPOINT || 'http://localhost:8000'
  })

  const dynamodb = new AWS.DynamoDB()

  dynamodb.listTables({}, (err, data) => {

    if (!data.TableNames.find(table => table === 'Students')) {

      dynamodb.createTable({
        TableName: 'Students',
        KeySchema: [
          { AttributeName: 'id', KeyType: 'HASH'},
          { AttributeName: 'name', KeyType: 'RANGE'}
        ],
        AttributeDefinitions: [
          { AttributeName: 'id', AttributeType: 'S' },
          { AttributeName: 'name', AttributeType: 'S' },
          { AttributeName: 'emailAddress', AttributeType: 'S' }
        ],
        ProvisionedThroughput: {
          ReadCapacityUnits: 1,
          WriteCapacityUnits: 1
        },
        GlobalSecondaryIndexes: [ // optional (list of GlobalSecondaryIndex)
          {
            IndexName: 'EmailAddressIndex',
            KeySchema: [
              { AttributeName: 'emailAddress', KeyType: 'HASH' }
            ],
            Projection: {
              ProjectionType: 'KEYS_ONLY'
            },
            ProvisionedThroughput: {
              ReadCapacityUnits: 1,
              WriteCapacityUnits: 1
            }
          }
        ]
      }, (err, data) => {
        if (err) {
          console.log('There was an error making the \'Students\' table: ', err)
        }
        else {
          console.log('Student\'s table created successfully.')
        }
      })

    }
  })

}
