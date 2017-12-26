exports.handler = handler

const message = `

   __                __      __              ___                   __    _
  / / ___ _  __ _   / /  ___/ / ___ _       / _/ __ __  ___  ____ / /_  (_) ___   ___   ___
 / / / _ \`/ /  ' \ / _ \/ _  / / _ \`/      / _/ / // / / _ \/ __// __/ / / / _ \ / _ \ (_-<
/_/  \_,_/ /_/_/_//_.__/\_,_/  \_,_/      /_/   \_,_/ /_//_/\__/ \__/ /_/  \___//_//_//___/


`

function handler (event, context, cb) {
  console.log(message)
  cb(null, {
    statusCode: 200
  })
}


