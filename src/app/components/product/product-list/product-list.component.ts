import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  ProductList: Product[] = [];

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {

    this._productService.GetProductList().subscribe(
      data => {
        this.ProductList = data;
      }
    );

  }


}
