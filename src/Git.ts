// @ts-ignore: node.js module
import { spawnSync } from 'child_process'
import chalk from 'chalk'

class Git {
  public static addAll(): void {
    const addAll = spawnSync('gitaa', ['add', '--all'])
    console.log(addAll.error instanceof Error)
    console.log(chalk.green('[OK] Git Add'))
  }

  public static commit(commitMessage: string = 'rua-cli'): void {
    Git.addAll()
    const commit = spawnSync('git', ['commit' ,'-m', `${commitMessage}`])
    console.log(chalk.green(`[OK] Git Commit ${commitMessage}`))
  }
  
  public static push(commitMessage: string = 'rua-cli'): void {
    Git.commit(commitMessage)
    const commit = spawnSync('git', ['push'])
    console.log(chalk.green(`[OK] Git Push`))
  }
}

export default Git
