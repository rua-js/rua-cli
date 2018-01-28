import { AnyObject } from 'rua-core/lib/Types'
// @ts-ignore: node.js
import * as fs from 'fs'
// @ts-ignore: node.js
import * as path from 'path'

import Console from './Console'

class Package {
  private path: string

  public constructor(config: AnyObject) {
    const {
      path,
    } = config

    this.setPath(path)
  }

  public setPath(path: string): void {
    this.path = path
  }

  public getPath(): string {
    return this.path
  }
  
  public init(): number {
    return 1
  }
}

export default Package
