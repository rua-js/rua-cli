import chalk from 'chalk'

class Console {
  public static ok(text: string): void {
    console.log(
      '[',
      chalk.green('OK'),
      ']',
      text,
    )
  }
}

export default Console
