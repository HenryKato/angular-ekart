import {Component, ViewChild} from '@angular/core';
import {Product} from "./product-list/product/product";
import {ProductListComponent} from "./product-list/product-list.component";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  name = 'HK';
  addToCart: number = 0;
  searchText: string = '';
  @ViewChild('productListComponent')productListComp: ProductListComponent;
  product = {
    name: 'iPhone 13',
    price: 999,
    color: 'Red',
    discount: 8.5,
    stock: 5
  }

  getDiscountedPrice(): number {
    return this.product.price - (this.product.price * this.product.discount / 100)
  }

  typedName(event: any) {
    this.name = event.target.value;
  }

  increment(event: any) {
    console.log(event);
    this.addToCart += 1;
  }
  decrement(event: any) {
    console.log(event);
    this.addToCart -= 1;
  }

  onSearchTextEntered(value: string) {
    this.searchText = value;
  }

}
