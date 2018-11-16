import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  constructor(private _localStorage: Storage) { }

  getItem(key: string): string | null {
    return this._localStorage.getItem(key);
  }

  setItem(key: string, value: string): void {
    this._localStorage.setItem(key, value)
  }

  removeItem(key: string): void {
    this._localStorage.removeItem(key);
  }
}
