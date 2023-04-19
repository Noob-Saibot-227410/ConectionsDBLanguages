const AWS = require('aws-sdk');

AWS.config.update({
  region: 'us-west-2',
  accessKeyId: 'myAccessKeyId',
  secretAccessKey: 'mySecretAccessKey'
});

const docClient = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: 'mytable',
  Key: {
    'id': 'mykey'
  }
};

docClient.get(params, (err, data) => {
  if (err) {
    console.error('Unable to read item. Error JSON:', JSON.stringify(err, null, 2));
  } else {
    console.log('GetItem succeeded:', JSON.stringify(data, null, 2));
  }
});
