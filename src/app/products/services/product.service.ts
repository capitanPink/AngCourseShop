import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { Product } from './../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts() {
    return of([
      new Product(1, 'Ball', 'Playing soccer will be great with this one.', 45.3, 2),
      new Product(2, 'Product2', 'Some description...', 90, 5),
      new Product(3, 'Product3', 'Some description...', 77.38, 12),
      new Product(4, 'Product4', 'Some description...', 101.1, 1),
      new Product(5, 'Grip', 'Gym stuff.', 51.33, 2),
    ]);
  }
}
