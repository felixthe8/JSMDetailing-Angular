import { Component, OnInit } from '@angular/core';
import { Products } from '../../../assets/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  productList = [];

  ngOnInit(): void {
    this.productList = Products.services;
  }

}
