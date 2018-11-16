import { Injectable } from '@angular/core';

import { IConfigOptions } from '../interfaces/i-config-options';

@Injectable()
export class ConfigOptionsService {
  private _configOptions: IConfigOptions;

  constructor() { }

  setConfigOptions(options: IConfigOptions): void {
    this._configOptions = options;
  }

  getConfigOptions(): IConfigOptions {
    return this._configOptions;
  }
}
