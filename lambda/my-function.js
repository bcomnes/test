exports.handler = handler

const message = `

                 _     _   _    __
  _ __     ___  | |_  | | (_)  / _|  _   _
 | '_ \   / _ \ | __| | | | | | |_  | | | |
 | | | | |  __/ | |_  | | | | |  _| | |_| |
 |_| |_|  \___|  \__| |_| |_| |_|    \__, |
                                     |___/


`

function handler (event, context, cb) {
  console.log(message)
  cb(null, {
    statusCode: 200
  })
}


