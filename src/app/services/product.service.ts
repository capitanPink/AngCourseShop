import { Injectable } from '@angular/core';

import { ProductModel } from './../shared/models/Product.model';
import { Category } from './../shared/enums/category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    return [
      new ProductModel('Ball', 20, 'Simple ball to play', Category.sport, true),
      new ProductModel('Ball', 30, 'Simple ball to play', Category.sport, false),
      new ProductModel('Ball', 40, 'Simple ball to play', Category.sport, true),
      new ProductModel('Ball', 50, 'Simple ball to play', Category.sport, true),
    ];
  }
}
