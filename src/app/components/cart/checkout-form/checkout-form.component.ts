import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent {

  fullName: string = '';
  address: string = '';
  creditCardNumber: string = '';
  
  Displaynotes: string = '';

  constructor(private _router: Router, private _shoppingCartService: ShoppingCartService) { }

  CheckOut() {

    let _totalPrice: number = this._shoppingCartService.GetShoppingCartDetails()?.TotalPrice;
    this._shoppingCartService.ClearTheCart();
    this._router.navigate(['SuccessfullCheckOut', { name: this.fullName, totalPrice: _totalPrice }]);

  }

  Validate(controlname: string, myform: NgForm) {

    let message: string = '';
    if (myform.controls[controlname].invalid) {
      switch (controlname) {
        case 'fullName':
          this.Displaynotes = 'the name should be min 3 characters';
          break;

        case 'address':
          this.Displaynotes = 'the Address should be min 6 characters';

          break;

        case 'creditCardNumber':
          this.Displaynotes = 'the Credit Card Number should be 16-digit number';

          break;
      }
    }
    else {
      this.Displaynotes = '';
    }

  }
}
