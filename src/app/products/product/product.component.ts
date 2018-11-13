import { Component, Input, OnInit } from '@angular/core';

import { IProduct } from './../interfaces/i-product';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: IProduct;
  isPossibleToBuy: boolean;

  constructor(private _cartService: CartService) { }

  ngOnInit() {
    this.isPossibleToBuy = this.product.isAvailable;
  }

  addToCart(product: IProduct) {
    return this._cartService.addProduct(product);
  }

}