import { Category } from './../../../../shared/enums/category.enum';
import { IProduct } from '../../interfaces/i-product';
import { Colors } from 'src/shared/enums/colors.enum';
import { Size } from 'src/shared/enums/Size.enum';

export class ProductModel implements IProduct {

  constructor(public id: number,
              public name: string,
              public price: number,
              public description: string,
              public category: Category,
              public isAvailable: boolean,
              public quantity: number = 1,
              public color?: Colors,
              public size?: Size) {}

}
