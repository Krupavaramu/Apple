import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductList, Items } from '../model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() product: ProductList;
  @Input() products: ProductList[];
  @Output() isAddActive = new EventEmitter();
  selectedArray:Items[];
  constructor() { }

  ngOnInit(): void {
  }

  selectProduct(item) {
    item.checked = !item.checked;
    this.selectedArray = [];
    this.products.forEach(data => {
      let selectedItem = data.items.filter(item => item.checked);
      selectedItem && this.selectedArray.push(...selectedItem);
    })
    let isActive = !!this.selectedArray.length;
    this.isAddActive.emit({isActive:isActive,selectedArray:this.selectedArray});
  }

}
