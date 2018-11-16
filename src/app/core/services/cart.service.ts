import { Injectable } from '@angular/core';

import { IProduct } from 'src/app/products/interfaces/i-product';

type TSummery = { totalPrice: number, quantity: number};

@Injectable()
export class CartService {

  private _cartList: IProduct[] = [];
  private _cartPrice: number = 0;
  private _cartQuantity: number = 0;

  constructor() { }

  addProduct(product: IProduct): void {
      this._cartList.push(product);
      this.calculateTotals();
  }

  deleteProduct(code: number): void {
    const index = this.findProductIndex(code);
    if (index !== -1) {
      this._cartList = [
        ...this._cartList.slice(0, index),
        ...this._cartList.slice(index + 1)
      ];
      this.calculateTotals();
    }
  }

  manipulateQuantity(code: number, quantity: number) {
    const index = this.findProductIndex(code);
    if (index !== -1) {
      const product = this._cartList.slice(index, index + 1)[0];
      product.quantity += quantity;
      this._cartList = [
        ...this._cartList.slice(0, index),
        product,
        ...this._cartList.slice(index + 1)
      ];
      this.calculateTotals();
    }
  }

  clearCart() {
    this._cartList = [];
    this.calculateTotals();
  }

  calculateTotals() {
    const { totalPrice, quantity } = this._cartList
        .reduce((acc: TSummery, product: IProduct) => {
            acc.totalPrice += product.price;
            acc.quantity += product.quantity;
            return acc;
        },
        { totalPrice: 0, quantity: 0 });
    this._cartPrice = totalPrice;
    this._cartQuantity = quantity;
  }

  findProductIndex(code: number): number {
    return this._cartList.findIndex((product: IProduct) => product.code === code);
  }
}
