import { Injectable } from '@angular/core';

@Injectable()
export class ConstantService {
  
  readonly App: string = 'Online store';
  readonly version: string = 'v-1.0.1';

  constructor() { }
}
