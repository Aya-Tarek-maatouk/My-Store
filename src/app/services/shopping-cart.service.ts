import { Injectable } from '@angular/core';
import { CartDetails } from '../models/CartDetails';
import { CartItem } from '../models/CartItem';
import { UpdateBadgeCounterService } from './update-badge-counter.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  ShoppingCartItems: CartDetails = new CartDetails();

  constructor(private _badgeService: UpdateBadgeCounterService) { }

  AddToShoppingCartORUpdateIfExist(product: CartItem): void {

    const i: number = this.ShoppingCartItems.CartItems.findIndex(_element => _element.product.id === product.product.id);
    (i > -1) ? this.ShoppingCartItems.CartItems[i] = product : this.ShoppingCartItems.CartItems.push(product);
    this.CalculateTotalPrice();
    this._badgeService.SendBadgeCounter(this.ShoppingCartItems.CartItems.length);

  }

  RemoveItemFromShoppingCartByItemId(prodId: number): CartDetails {

    this.ShoppingCartItems.CartItems = this.ShoppingCartItems.CartItems.filter(o => o.product.id != prodId);
    this.CalculateTotalPrice();
    this._badgeService.SendBadgeCounter(this.ShoppingCartItems.CartItems.length);
    return this.ShoppingCartItems;

  }

  ClearTheCart(): void {

    this.ShoppingCartItems = new CartDetails();
    this._badgeService.SendBadgeCounter(this.ShoppingCartItems.CartItems.length);

  }

  GetShoppingCartDetails(): CartDetails {

    return this.ShoppingCartItems;

  }

  GetShoppingCartItemByProdId(ProdId: number): CartItem {

    return this.ShoppingCartItems.CartItems.filter(o => o.product.id == ProdId)[0];

  }

  GetCountOfCartItems(): number {

    return this.ShoppingCartItems.CartItems.length;

  }

  private CalculateTotalPrice(): void {

    this.ShoppingCartItems.TotalPrice = 0;

    this.ShoppingCartItems.CartItems.forEach(element => {
      this.ShoppingCartItems.TotalPrice += element.product.price * element.ProductAmount;
    });

  }



}
