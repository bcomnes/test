exports.handler = myHandlerFunction

function myHandlerFunction (event, context, cb) {
  var msg = "Hello world from AWS lambda at " + Date.now()
  console.log(msg)
  cb(null, {
    statusCode: 200
    body: JSON.stringify({ msg: msg })
  })
}


