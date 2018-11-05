import { IProduct } from "../interfaces/i-product";
import { Category } from "../enums/category.enum";

export class ProductModel implements IProduct {

  constructor(public name: string,
              public price: number,
              public description: string,
              public category: Category,
              public isAvailable: boolean) {}
}