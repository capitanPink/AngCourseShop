import { Component, OnInit } from '@angular/core';

import { CartService } from './../../services/cart.service';
import { ProductModel } from 'src/app/shared/models/Product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: Array<ProductModel> = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.products = this.cartService.getCart();
  }

}
