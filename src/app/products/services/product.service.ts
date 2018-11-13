import { Size } from './../../../shared/enums/Size.enum';
import { Colors } from 'src/shared/enums/colors.enum';
import { Injectable } from '@angular/core';
import { ProductModel } from '../product/models/product.model';
import { Category } from 'src/shared/enums/category.enum';

@Injectable()
export class ProductService {

  constructor() { }

  getProducts() {
    return [
      new ProductModel(1, 'Washing mashine', 20, 'good product', Category.electronics, true, 2, Colors.red, Size.extraLarge),
      new ProductModel(2, 'Pencil', 30, 'good product', Category.office, true),
      new ProductModel(3, 'Apple', 40, 'good product', Category.food, false, 3),
      new ProductModel(4, 'Chair', 10, 'good product', Category.office, false, 1, Colors.black, Size.large),
      new ProductModel(5, 'Ball', 50, 'good product', Category.sport, true)
    ];
  }
}
