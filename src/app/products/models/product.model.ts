import { IProduct } from 'src/app/products/interfaces/i-product';

export class Product implements IProduct{
  
  constructor(public id: number,
              public name: string,
              public description: string,
              public price: number,
              public quantity: number) { }
  
}