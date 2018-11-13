import { Category } from './../../../shared/enums/category.enum';
import { Colors } from 'src/shared/enums/colors.enum';
import { Size } from 'src/shared/enums/Size.enum';

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  category: Category;
  quantity?: number;
  isAvailable?: boolean;
  color?: Colors;
  size?: Size;

}