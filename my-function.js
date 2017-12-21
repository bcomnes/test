exports.handler = function myHandlerFunction (event, context, cb) {
  var msg = 'Hello you invoked me at ' + Date.now()
  console.log(msg)
  cb(null, {
    statusCode: 200,
    body: JSON.stringify({ msg: msg })
  })
}
