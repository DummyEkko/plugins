import chalk from "chalk"
import path from 'path'
import fs from 'fs-extra'
import inquirer from 'inquirer'

async function create(projectName, options) {
  const cwd = process.cwd()
  const targetDir = path.join(cwd, projectName)

  if (fs.existsSync(targetDir)) {
    console.log(chalk.red(`${projectName} 文件名重复`))
    let { action } = await inquirer.prompt([
      {
        name: 'action',
        type: 'list',
        massage: '当前文件名重复是否覆盖?',
        choices: [
            { name: '覆盖', value: 'overwrite' },
            { name: '取消', value: false }
        ]
      }
    ])
  } else {
  }
}

// module.exports.create = create

export {
  create
}