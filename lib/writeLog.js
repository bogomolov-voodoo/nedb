const fs = require('fs');
const path = require('path');

module.exports = (value) => {
  try {
    const appDataPath = process.env.APPDATA || process.env.HOME + '/Library/Preferences';
    // const appDataPath = path.join(__dirname, '../../bodygram-electron-old/src/server/appData');
    const logsPath = path.join(appDataPath, 'bodygramlogs');

    if (!fs.existsSync(logsPath)) {
      fs.mkdirSync(logsPath);
    }

    const currentDate = new Date();

    fs.appendFileSync(
      path.join(logsPath, `${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()}.txt`),
      `[${currentDate.getFullYear()}-${currentDate.getMonth()}-${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}:${currentDate.getMilliseconds()}] ${value}\r\n`
    );
  } catch (error) {
    console.log(error);
  }
};
