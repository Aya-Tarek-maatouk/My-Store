import { Component, OnInit } from '@angular/core';
import { CartDetails } from 'src/app/models/CartDetails';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  ShoppingCartDetails: CartDetails = new CartDetails();

  constructor(private _shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {

    this.ShoppingCartDetails = this._shoppingCartService.GetShoppingCartDetails();

  }

  RemoveFromCart(productId: number) {

    this.ShoppingCartDetails = this._shoppingCartService.RemoveItemFromShoppingCartByItemId(productId);

  }

}
