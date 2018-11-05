import { Component, OnInit } from '@angular/core';

import { ProductService } from './../../services/product.service';
import { ProductModel } from 'src/app/shared/models/Product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Array<ProductModel>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
