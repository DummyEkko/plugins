#! /usr/bin/env node  
// const { program } = require('commander');
// const { create } = require('../lib/create.js');
import { program } from 'commander'
import { create } from '../lib/create.js'

program
  .name('mycli')
  .version('0.0.1')
  .description('An example CLI tool');

program
  .command(`create <name>`)
  .description(`create a new project`)
  .option(`-f,--force`,`overwrite target directory if it exists`)
  .action((name, options)=>{
    create(name, options)
  })

program.parse(process.argv);