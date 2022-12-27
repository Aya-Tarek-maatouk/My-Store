import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/CartItem';
import { dialogData } from 'src/app/models/dialogData';
import { Product } from 'src/app/models/Product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { AlertDialogComponent } from '../../dialogs/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product = new Product();
  cartItem: CartItem = new CartItem();


  constructor(private _router: Router, private _shoppingCartService: ShoppingCartService, private dialog: MatDialog) { }

  ngOnInit(): void {

    let item: CartItem = this._shoppingCartService.GetShoppingCartItemByProdId(this.product.id);
    this.cartItem = (item != undefined && item != null) ? item : new CartItem(this.product);

  }

  GotoProductDetails(): void {
    this._router.navigate(["Details", { id: this.cartItem.product.id }])
  }

  AddToShoppingCart(): void {

    this._shoppingCartService.AddToShoppingCartORUpdateIfExist(this.cartItem);
    this.dialog.open(AlertDialogComponent, { data: new dialogData('', 'Added To The Cart Successfully') });
  }

}
