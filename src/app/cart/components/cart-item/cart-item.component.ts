import { Component, Input } from '@angular/core';

import { IProduct } from 'src/app/products/interfaces/i-product';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

  @Input() cartItem: IProduct;

  constructor(private _cartService: CartService) { }

  deleteFromCart(cartItem: IProduct) {
    return this._cartService.deleteFromCart(cartItem);
  }

}
