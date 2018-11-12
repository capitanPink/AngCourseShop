import { Component, Input } from '@angular/core';

import { IProduct } from './../../shared/interfaces/i-product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

  @Input() product: IProduct;
  
  constructor() {}

}
