#!/usr/bin/env node
const { program } = require('commander');
const ora = require('ora');
const settings = require('../config/settings');
const { log } = require('../lib/util');
const path = require('path');

// 检查官网初始化目录是否正确
function checkName(appName, cb){
    if(/^\w+$/.test(appName)){
        cb(appName);
    }else{
        log('请输入正确的官网名称！', 'red');
    }
}

// 检查官网开发目录是否正确
function checkId(appId, cb){
    if(/^\w+\/[^\/]+$/.test(appId)){
        cb(appId);
    }else{
        log('请输入正确的官网开发目录！', 'red');
    }
}

// 检查官网平台（pc或者wap）
function checkPlatform(appId, cb){
    if(appId.split('/')[1] === 'pc'){
        settings.platform = 'pc';
    }else if(appId.split('/')[1] === 'wap'){
        settings.platform = 'wap';
    }else {
        log('请输入正确的开发目录', 'red');
        return;
    }
    cb();
}

program.version('0.0.1');

program
  .command('init <appId>')
  .description('项目初始化')
  .action((appId) => {
    checkId(appId, () => {
        settings.appId = appId;
        checkPlatform(settings.appId, () => {
            require('../command/init')();
        })
    })
  });

program
  .command('dev <appId>')
  .description('进入本地开发模式')
  .action((appId) => {
    process.env.NODE_ENV = 'development';
    checkId(appId, () => {
        settings.appId = appId;
        checkPlatform(settings.appId, () => {
            require('../command/server');
        })
    })
  });

program
    .command('prod <appId>')
    .description('进入测试环境开发模式')
    .action((appId) => {
        process.env.NODE_ENV = 'production';
        checkId(appId, () => {
            const spinner = ora('正准备上传资源到测试环境').start();
            settings.appId = appId;
            checkPlatform(settings.appId, () => {
                require('../command/build');
                spinner.succeed('开始上传资源');
            })
        })
    });

program
    .command('deploy <appId>')
    .description('进入svn上传模式')
    .action((appId) => {
        process.env.NODE_ENV = 'production';
        checkId(appId, () => {
            settings.appId= appId;
            checkPlatform(settings.appId, () => {
                require('../command/deploy');
            })
        })
    });

program.parse(process.argv);