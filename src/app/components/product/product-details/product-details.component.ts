import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/models/CartItem';
import { dialogData } from 'src/app/models/dialogData';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { AlertDialogComponent } from '../../dialogs/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  cartItem: CartItem = new CartItem();


  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService,
    private _shoppingCartService: ShoppingCartService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    let prodId: number = parseInt(this._route.snapshot.paramMap.get('id') ?? '0');

    if (prodId != null) {

      this._productService.GetProductList().subscribe(
        data => {

          let product: Product = data.filter(o => o.id == prodId)[0];

          /* if the user ordered this product before and its saved on the shopping cart then read it from the cart 
             else create new cartitem with amount= 1 */
          let ProductDetailsFromCart = this._shoppingCartService.GetShoppingCartItemByProdId(product?.id);
          this.cartItem = ProductDetailsFromCart ?? new CartItem(product);

        }
      );

    }

  }

  AddToShoppingCart(): void {

    this._shoppingCartService.AddToShoppingCartORUpdateIfExist(this.cartItem);
    this.dialog.open(AlertDialogComponent, { data: new dialogData('', 'Added To The Cart Successfully') });

  }
}
