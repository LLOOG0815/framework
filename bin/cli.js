#!/usr/bin/env node

const { Command } = require('commander');
const inquirer = require('inquirer').default;
const path = require('path');
const fs = require('fs-extra');
const { cloneRepo, getBranches } = require('../src/index');

const program = new Command();

program
  .name('lloog_cli')
  .description('拉取自定义框架')
  .version('1.0.0');

const DEFAULT_REPO = 'https://github.com/LLOOG0815/framework.git';
const DEFAULT_OUTPUT = './framework';

program
  .command('create')
  .description('创建自定义框架')
  .option('-o, --output <dir>', '输出目录')
  .action(async (options) => {
    try {
      console.log('获取框架列表...');
      const branches = await getBranches(DEFAULT_REPO);

      const answers = await inquirer.prompt([
        {
          type: 'list',
          name: 'branch',
          message: '请选择要创建的框架:',
          choices: branches
        },
        {
          type: 'input',
          name: 'output',
          message: '请输入输出目录:',
          default: DEFAULT_OUTPUT
        }
      ]);

      const outputDir = options.output || answers.output;

      console.log('开始创建框架...');
      await cloneRepo(DEFAULT_REPO, answers.branch, outputDir);
      console.log('框架创建成功！');
    } catch (error) {
      console.error('框架创建失败:', error.message);
    }
  });

program.parse(process.argv);