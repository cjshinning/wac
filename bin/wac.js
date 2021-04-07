#!/usr/bin/env node
const { program } = require('commander');
const settings = require('../config/settings');

program.version('0.0.1');

program
  .command('init <appId>')
  .description('项目初始化')
  .action((appId) => {
    require('../lib/init')(appId);
  });

program
  .command('dev <appId>')
  .description('开启本地开发模式')
  .action((appId) => {
    settings.appid = appId;
    require('../lib/server');
  });

program.parse(process.argv);