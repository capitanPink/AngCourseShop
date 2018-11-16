import { InjectionToken } from '@angular/core';

export const generator = new InjectionToken<any>('generator');

export function GeneratorService(n: number) {
  return function():string {
    let sequence: string = '';
    const getRandom = Math.random;
    for (let i = 0; i < this.n; i++) {
      if (getRandom() > 0.5) {
        sequence += getRandom().toString(36).substring(2,3).toUpperCase();
      } else {
        sequence += getRandom().toString(36).substring(2,3);
      }
    }
    return sequence;
  }
}
