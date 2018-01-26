import chalk from 'chalk'

class Console {
  public static ok(text: string = 'Normal'): void {
    console.log(
      '[',
      chalk.green('OK'),
      ']',
      '-',
      chalk.green(text),
    )
  }

  public static err(text: string = 'An Error Occurred'): void {
    console.log(
      '[',
      chalk.red('ERROR'),
      ']',
      '-',
      chalk.red(text),
    )
  }

  public static warn(text: string = 'An Warning Occurred'): void {
    console.log(
      '[',
      chalk.yellow('WARNING'),
      ']',
      '-',
      chalk.yellow(text),
    )
  }

  public static end(text: string = 'Operation Is Ended'): void {
    console.log(
      '[',
      chalk.cyanBright('END'),
      ']',
      '-',
      chalk.cyanBright(text),
    )
  }
}

export default Console
