import {Component, Input} from '@angular/core';
import {Product} from "../product-list/product/product";

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input()
  selectedProduct: Product;
}
