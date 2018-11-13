import { ICartSummery } from './../interfaces/i-cart-summery';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { IProduct } from 'src/app/products/interfaces/i-product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, OnDestroy {

  cart: IProduct[] = [];
  cartSummery: ICartSummery = { sum: 0, quantity: 0 };
  
  private _subscriptions: Subscription[];

  constructor(private _cartService: CartService) { }

  ngOnInit() {
    const cartSubscription = this._cartService.getCart()
            .subscribe((products: IProduct[]) => (this.cart = products));
    const summerySubscription = this._cartService.getSummery()
    .subscribe((summery: ICartSummery) => this.cartSummery = summery);
    this._subscriptions.concat([cartSubscription, summerySubscription])
  }

  ngOnDestroy() {
    this._subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

}
