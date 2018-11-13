import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartService } from './services/cart.service';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  declarations:[
    CartListComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    CartService
  ],
  exports: [
    CartListComponent,
    CartItemComponent
  ]
})
export class CartModule { }
