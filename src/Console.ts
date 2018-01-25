import chalk from 'chalk'

class Console {
  public static ok(text: string): void {
    console.log(
      '[',
      chalk.green('OK'),
      ']',
      '-',
      text,
    )
  }

  public static err(text: string): void {
    console.log(
      '[',
      chalk.green('ERROR'),
      ']',
      '-',
      text,
    )
  }

  public static warn(text: string): void {
    console.log(
      '[',
      chalk.green('WARNING'),
      ']',
      '-',
      text,
    )
  }
}

export default Console
