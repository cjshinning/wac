const path = require('path');
const fs = require('fs-extra');
const inquirer = require('inquirer');
const chalk = require('chalk');
const settings = require('../config/settings');

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
            const tplDir = tplType === 'pc' ? path.resolve(settings.basePath,'template/baseTpl') : path.resolve(settings.basePath,'template/baseTplM');
            fs.copy(tplDir, targetDir)
                .then(() => {
                    console.log(chalk.green('项目初始化成功！'));
                })
                .catch(err => {
                    console.log(chalk.red(err));
                })
        })
        .catch(error => {
            console.log(chalk.red(error));
        });
}

function init(appId){
    const targetDir = path.resolve(settings.basePath,'src',appId);
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
                    console.log(chalk.red('项目初始化失败'));
                    return;
                }
                copyTpl(targetDir);
            })
            .catch(error => {
                console.log(chalk.red(error));
            });
    }else{
        copyTpl(targetDir);
    }
}

module.exports = (...args) => {
    return init(...args);
}