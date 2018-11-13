import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { ProductService } from './services/product.service';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    ProductListComponent,
    ProductComponent
  ],
  providers: [
    ProductService
  ]
})
export class ProductsModule { }
