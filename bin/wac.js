#!/usr/bin/env node

const { program } = require('commander');

program.version('0.0.1');

program
  .command('init <appName>')
  .description('项目初始化')
  .action((appName) => {
    require('../lib/init')(appName);
  });

program.parse(process.argv);