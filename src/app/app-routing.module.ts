import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './components/cart/shopping-cart/shopping-cart.component';
import { SuccessfulCheckoutComponent } from './components/cart/successful-checkout/successful-checkout.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';

const routes: Routes = [
  {path:"",component:ProductListComponent},
  {path:"ShoppingCart",component:ShoppingCartComponent},
  {path:"Details",component:ProductDetailsComponent},
  {path:"SuccessfullCheckOut",component:SuccessfulCheckoutComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
