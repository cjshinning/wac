#!/usr/bin/env node
const { program } = require('commander');
const ora = require('ora');
const settings = require('../config/settings');
const { log } = require('../lib/util');

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

program.version('0.0.1');

program
  .command('init <appName>')
  .description('项目初始化')
  .action((appId) => {
    checkId(appId, () => {
        settings.appId = appId;
        require('../command/init')();
    })
  });

program
  .command('dev <appId>')
  .description('进入本地开发模式')
  .action((appId) => {
    checkId(appId, () => {
        settings.appid = appId;
        require('../command/server');
    })
  });

program
    .command('prod <appId>')
    .description('进入测试环境开发模式')
    .action((appId) => {
        checkId(appId, () => {
            const spinner = ora('正准备上传资源到测试环境').start();
            settings.appid = appId;
            require('../command/build');
            spinner.succeed('开始上传资源');
        })
    });

program
    .command('deploy <appId>')
    .description('进入svn上传模式')
    .action((appId) => {
        checkId(appId, () => {
            settings.appid = appId;
            require('../command/deploy');
        })
    });

program.parse(process.argv);