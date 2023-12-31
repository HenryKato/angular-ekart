import {Component, Input} from '@angular/core';
import {Product} from "../product-list/product/product";
import {ProductListComponent} from "../product-list/product-list.component";

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input()
  product: Product;
  @Input()
  productListComponent: ProductListComponent;

  ngOnInit(){
    this.product = this.productListComponent.selectedProduct;
  }
}
