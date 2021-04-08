
const chalk = require('chalk');

module.exports = {
    log(msg, type='blue'){
        console.log(chalk.bold[type](msg));
    }
}