exports.handler = handler

function handler (event, context, cb) {
  var message = "hello world from AWS " + Date.now()
  // do some work
  cb(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: message })
  })
}


