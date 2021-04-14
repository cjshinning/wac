const path = require('path');
const fs = require('fs-extra');
const inquirer = require('inquirer');
const settings = require('../config/settings');
const { log } = require('./util');

function chooseComponents(platform, baseDist){
    const baseSrc = platform === 'pc' ? path.resolve(settings.basePath, 'template/baseTplPc') : path.resolve(settings.basePath, 'template/baseTplWap');
    const componentsSrc = platform === 'pc' ? path.resolve(settings.basePath, 'template/componentsPc') : path.resolve(settings.basePath, 'template/componentsWap');
    let fileFilter = [".idea",".vscode",".DS_Store"];
    fs.removeSync(baseDist);
    fs.copy(baseSrc, baseDist)
        .then(() => {
            fs.readdir(componentsSrc, (err,files) => {
                if (err) throw err;
                fileFilter = files.filter(file => !fileFilter.includes(file));
                inquirer
                    .prompt([
                        {
                            name: 'component',
                            default: fileFilter,
                            type: 'checkbox',
                            choices: fileFilter,
                            message: '请选择您需要使用到的组件(默认全选):'
                        }
                    ])
                    .then(answers => {
                        if(answers.component.length === 0){
                            log('项目初始化成功！', 'green');
                            return;
                        }
                        answers.component.forEach(file => {
                            const src = path.resolve(componentsSrc, file);
                            const dist = path.resolve(baseDist, 'src/components/', file);
                            fs.copySync(src,dist);
                        })
                        log('项目初始化成功！', 'green');
                    })
                    .catch(error => {
                        log(error, 'red');
                    });
            })
        })
        .catch(error => {
            log(error, 'red');
        })
}

function init(){
    const baseDist = path.resolve(settings.basePath, 'src', settings.appId);
    let platform = '';
    if(settings.appId.split('/')[1] === 'pc'){
        platform = 'pc';
    }else if(settings.appId.split('/')[1] === 'wap'){
        platform = 'wap'
    }else {
        log('请输入正确的初始化目录', 'red');
        return;
    }
    if(fs.existsSync(baseDist)){
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
                chooseComponents(platform, baseDist);
            })
            .catch(error => {
                log(error, 'red');
            });
    }else{
        chooseComponents(platform, baseDist);
    }
}

module.exports = () => {
    return init();
}