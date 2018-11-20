import { Component, OnInit } from '@angular/core';

import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  filter: string = '';
  products: Product[] = [];
  today: Date = new Date();
  
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.getProducts()
      .subscribe((products: Product[]) => this.products = products);
  }

  getProducts() {
    return this._productService.getProducts();
  }

  onSortChange(value: string): void {
    this.filter = value;
  }

}
