const consoleColors = require('./consoleColors')

type Log = (msg: string) => void

const LogSuccess: Log = (msg) => {
  console.log(consoleColors.GREEN_LOG, msg)
}
const LogInfo: Log = (msg) => {
  console.log(consoleColors.CYAN, msg)
}
const LogWarning: Log = (msg) => {
  console.log(consoleColors.YELLOW, msg)
}
const LogDanger: Log = (msg) => {
  console.log(consoleColors.RED, msg)
}

module.exports.LogDanger = LogDanger
module.exports.LogInfo = LogInfo
module.exports.LogWarning = LogWarning
module.exports.LogSuccess = LogSuccess
