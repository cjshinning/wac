const path = require('path');
const fs = require('fs-extra');
const inquirer = require('inquirer');
const chalk = require('chalk');

function copyTpl(targetDir){
    inquirer
        .prompt([
            {
                name: 'tplType',
                default: 'm',
                type: 'list',
                message: '请选择您需要初始化的目录类型（默认移动端）：',
                choices: ['pc', 'm']
            }
        ])
        .then(answers => {
            const tplType = answers.tplType;
            const tplDir = tplType === 'pc' ? path.resolve(process.cwd(),'template/baseTpl') : path.resolve(process.cwd(),'template/baseTplM');
            fs.copy(tplDir, targetDir);
        })
        .catch(error => {
            chalk.red(error)
        });
}

function init(appName){
    const targetDir = path.resolve(process.cwd(),'src',appName);
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
                    chalk.red('项目初始化失败');
                    return;
                }
                copyTpl(targetDir);
            })
            .catch(error => {
                chalk.red(error)
            });
    }else{
        copyTpl(targetDir);
    }
}

module.exports = (...args) => {
    return init(...args);
}