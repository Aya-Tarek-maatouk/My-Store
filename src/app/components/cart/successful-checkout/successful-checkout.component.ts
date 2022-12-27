import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-successful-checkout',
  templateUrl: './successful-checkout.component.html',
  styleUrls: ['./successful-checkout.component.css']
})
export class SuccessfulCheckoutComponent {

  _userName: string = '';
  _totalPrice: number = 0;

  constructor(private _route: ActivatedRoute) {

    this._userName = this._route.snapshot.paramMap.get("name") ?? '';
    this._totalPrice = parseFloat(this._route.snapshot.paramMap.get("totalPrice") ?? '0');

  }

}
