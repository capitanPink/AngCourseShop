import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent extends ProductComponent {

  constructor() {
    super();
  }

}
