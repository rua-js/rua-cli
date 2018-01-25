// @ts-ignore: node.js module
import { spawnSync } from 'child_process'
import chalk from 'chalk'
import Console from './Console'

class Git {
  public static addAll(): void {
    const cmd = spawnSync('git', ['add', '--all'])
    if (cmd.error instanceof Error) {
      throw cmd.error
    } else if (cmd.status !== 0) {
      Console.warn('Git Add, no error but not succeed')
    } else {
      Console.ok('Git Add')
    }
  }

  public static commit(commitMessage: string = 'rua-cli'): void {
    Git.addAll()
    const commit = spawnSync('git', ['commit', '-m', `${commitMessage}`])
    if (commit.error instanceof Error) {
      throw commit.error
    }
    // console.log(commit)
    console.log(chalk.green(`[OK] Git Commit "${commitMessage}"`))
  }

  public static push(commitMessage: string = 'rua-cli'): void {
    Git.commit(commitMessage)
    const push = spawnSync('git', ['push'])
    // console.log(push)
    if (push.error instanceof Error) {
      throw push.error
    }
    console.log(chalk.green(`[OK] Git Push`))
  }
}

export default Git
