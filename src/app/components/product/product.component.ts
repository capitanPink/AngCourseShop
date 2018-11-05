import { Category } from './../../shared/enums/category.enum';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() name: string;
  @Input() description: string;
  @Input() price: number;
  @Input() category: Category;
  @Input() isAvailable: boolean;

  constructor() { }

  ngOnInit() {
  }

}
