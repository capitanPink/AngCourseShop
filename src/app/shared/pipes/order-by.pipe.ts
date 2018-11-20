import { Pipe, PipeTransform } from '@angular/core';

import { IProduct } from './../../products/interfaces/i-product';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(products: IProduct[], field: string, order: boolean = false): IProduct[] {
    let _products = [];
    switch(field){
      case 'name':
        _products = this.sortByName(products);
      break;
      case 'quantity':
        _products = this.sortByQuantity(products);
      break;
      case 'price':
        _products = this.sortByPrice(products);
      break;
      default:
        _products = products;
    }
    if (!order) {
      return _products;
    }
    return _products.reverse();
  }

  sortByName(products: IProduct[]): IProduct[] {
    return products.sort((a,b) => a.name.localeCompare(b.name));
  }

  sortByQuantity(products: IProduct[]): IProduct[] {
    return products.sort((a,b) => a.quantity - b.quantity);
  }

  sortByPrice(products: IProduct[]): IProduct[] {
    return products.sort((a,b) => a.price - b.price);
  }

}
