import { Component, OnInit } from '@angular/core';
import { products } from '../../constants';
import { ProductList, Items } from '../model';

// export interface ProductList {
//   product: string,
//   expand: boolean,
//   items: Items[]
// }

// export interface Items {
//   name: string,
//   checked: boolean
// }

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: ProductList[];
  isActive:boolean = false;
  productNames: any[];
  selectedArray:Items[];
  constructor() { }

  ngOnInit(): void {
    this.products = JSON.parse(JSON.stringify(products));
  }

  addToCart() {
    this.productNames = this.selectedArray.map(item => item.name);
  }

  clearCart() {
    this.products = JSON.parse(JSON.stringify(products));
    this.productNames = [];
  }

  isAddActive(event) {
     this.isActive = event.isActive;
     this.selectedArray = event.selectedArray;
     if(!this.isActive) this.productNames = [];
  }
}
