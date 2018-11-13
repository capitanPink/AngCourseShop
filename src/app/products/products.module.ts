import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from './services/product.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ProductService
  ]
})
export class ProductsModule { }
