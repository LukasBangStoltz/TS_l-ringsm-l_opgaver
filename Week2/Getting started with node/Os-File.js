const os = require("os")

const osObj = {
platforn: os.platform(),
osType: os.type(),
freeMemory: os.freemem(),
totalMemory: os.totalmem(),
EOIL: "\r\n"
}
  
  module.exports.osObj = osObj;