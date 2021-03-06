var AWS = require('aws-sdk');

exports.handler = function (event, context) {
    var ec2 = new AWS.EC2({region: 'us-east-1'});

      ec2.startInstances({InstanceIds : ['<INSTANCE_ID>']},function (err, data) {
            if (err)
              console.log(err, err.stack); // an error occurred
          else
              console.log(data); // successful response
          context.done(err,data);
            });
};
