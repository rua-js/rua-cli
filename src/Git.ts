// @ts-ignore: node.js module
import { spawnSync } from 'child_process'
import chalk from 'chalk'

class Git {
  public static addAll(): void {
    const addAll = spawnSync('git', ['add', '--all'])
    if (addAll.error instanceof Error) {
      throw addAll.error
    }
    console.log(chalk.green('[OK] Git Add'))
  }

  public static commit(commitMessage: string = 'rua-cli'): void {
    Git.addAll()
    const commit = spawnSync('git', ['commit' ,'-m', `${commitMessage}`])
    if (commit.error instanceof Error) {
      throw commit.error
    }
    console.log(chalk.green(`[OK] Git Commit ${commitMessage}`))
  }
  
  public static push(commitMessage: string = 'rua-cli'): void {
    Git.commit(commitMessage)
    const push = spawnSync('git', ['push'])
    if (push.error instanceof Error) {
      throw push.error
    }
    console.log(chalk.green(`[OK] Git Push`))
  }
}

export default Git
