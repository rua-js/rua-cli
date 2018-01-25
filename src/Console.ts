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
      chalk.red('ERROR'),
      ']',
      '-',
      text,
    )
  }

  public static warn(text: string): void {
    console.log(
      '[',
      chalk.yellow('WARNING'),
      ']',
      '-',
      text,
    )
  }

  public static done(text: string): void {
    console.log(

    )
  }
}

export default Console
