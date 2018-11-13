import { Category } from './../../../shared/enums/category.enum';

export interface IProduct {
  name: string;
  price: number;
  description: string;
  category: Category;
  isAvailable: boolean;
}