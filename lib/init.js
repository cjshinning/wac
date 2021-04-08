const path = require('path');
const fs = require('fs-extra');
const inquirer = require('inquirer');
const settings = require('../config/settings');
const { log } = require('./util');

function copyTpl(targetDir){
    const tplDir = path.resolve(settings.basePath,'template/gw');
    fs.copy(tplDir, targetDir)
        .then(() => {
            log('项目初始化成功！', 'green');
        })
        .catch(error => {
            log(error, 'red');
        })
}

function init(appName){
    const targetDir = path.resolve(settings.basePath,'src',appName);
    if(fs.existsSync(targetDir)){
        inquirer
            .prompt([
                {
                    name: 'ifCopy',
                    default: false,
                    type: 'confirm',
                    message: '您当前初始化的目录已存在，是否重新覆盖(默认no)：'
                }
            ])
            .then(answers => {
                if(!answers.ifCopy){
                    log('项目初始化失败', 'red');
                    return;
                }
                copyTpl(targetDir);
            })
            .catch(error => {
                log(error, 'red');
            });
    }else{
        copyTpl(targetDir);
    }
}

module.exports = (...args) => {
    return init(...args);
}