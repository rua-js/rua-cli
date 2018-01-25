// @ts-ignore: node.js module
import { spawnSync } from 'child_process'
import chalk from 'chalk'
import Console from './Console'

class Git {
  public static addAll(): void {
    const cmd = spawnSync('git', ['add', '--all'])
    if (cmd.error instanceof Error) {
      Console.err('Git Add')
      throw cmd.error
    } else if (cmd.status !== 0) {
      Console.warn('Git Add, no error but not succeed')
    } else {
      Console.ok('Git Add')
    }
  }

  public static commit(commitMessage: string = 'rua-cli'): void {
    Git.addAll()
    const cmd = spawnSync('git', ['commit', '-m', `${commitMessage}`])
    if (cmd.error instanceof Error) {
      Console.err('Git Commit')
      throw cmd.error
    } else if (cmd.status !== 0) {
      Console.warn('Git Commit, no error but not succeed')
    } else {
      Console.ok(`Git Commit: "${commitMessage}"`)
    }
    // console.log(commit)
    console.log(chalk.green(`[OK] Git Commit "${commitMessage}"`))
  }

  public static push(commitMessage: string = 'rua-cli'): void {
    Git.commit(commitMessage)
    const cmd = spawnSync('git', ['push'])
    // console.log(push)
    if (cmd.error instanceof Error) {
      Console.err('Git Push')
      throw cmd.error
    } else if (cmd.status !== 0) {
      Console.warn('Git Push, no error but not succeed')
    } else {
      Console.ok('Git Push')
    }
    console.log(chalk.green(`[OK] Git Push`))
  }
}

export default Git
