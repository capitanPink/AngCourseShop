import { Category } from './../../../../shared/enums/category.enum';
import { IProduct } from '../../interfaces/i-product';

export class ProductModel implements IProduct {

  constructor(public name: string,
              public price: number,
              public description: string,
              public category: Category,
              public isAvailable: boolean,
              public quantity: number = 1) {}

}
