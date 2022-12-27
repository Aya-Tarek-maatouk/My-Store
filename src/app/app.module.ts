import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { ProductItemComponent } from './components/product/product-item/product-item.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ShoppingCartComponent } from './components/cart/shopping-cart/shopping-cart.component';
import { CheckoutFormComponent } from './components/cart/checkout-form/checkout-form.component';
import { OrderDetailsComponent } from './components/cart/order-details/order-details.component';
import { OrderItemComponent } from './components/cart/order-item/order-item.component';
import { SuccessfulCheckoutComponent } from './components/cart/successful-checkout/successful-checkout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { AlertDialogComponent } from './components/dialogs/alert-dialog/alert-dialog.component';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductDetailsComponent,
    ProductItemComponent,
    ProductListComponent,
    ShoppingCartComponent,
    CheckoutFormComponent,
    OrderDetailsComponent,
    OrderItemComponent,
    SuccessfulCheckoutComponent,
    AlertDialogComponent,
    ConfirmDialogComponent,
  ],
  entryComponents: [
    AlertDialogComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatRippleModule,
    MatToolbarModule,
    MatInputModule,
    MatBadgeModule,
    MatIconModule,
    MatDialogModule

  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
