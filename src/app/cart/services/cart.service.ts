import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { IProduct } from 'src/app/products/interfaces/i-product';
import { ICartSummery } from './../components/interfaces/i-cart-summery';

@Injectable()
export class CartService {

  private _cart: IProduct[] = [];
  private _summery: ICartSummery = { sum: 0, quantity: 0 };
  private _cartSubject = new BehaviorSubject<IProduct[]>(null);
  private _summerySubject = new BehaviorSubject<ICartSummery>(null);

  constructor() { }

  getCart(): Observable<IProduct[]> {
    return this._cartSubject.asObservable();
  }

  addProduct(product: IProduct): void {
    const newCart = [product].concat(this._cart);
    this._updateCart(newCart);
  }

  getSummery() {
    return this._summerySubject.asObservable();
  }

  getTotals(cart: IProduct[]): ICartSummery {
    const sum = cart.reduce((acc: number, next: IProduct) => acc + next.price, 0);
    const quantity = cart.reduce((acc: number, next: IProduct) => acc + next.quantity, 0);
    this._summery = { sum, quantity };
    return this._summery;
  }

  deleteFromCart(product: IProduct): void {
    const newCart = this._cart.filter((item: IProduct) => item.id !== product.id);
    this._updateCart(newCart);
  }

  private _updateCart(newCart: IProduct[]): void {
    this._cartSubject.next(newCart);
    this._summerySubject.next(this.getTotals(newCart));
    this._cart = newCart;
  }
}
