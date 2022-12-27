import { CartItem } from "./CartItem";

export class CartDetails {

    CartItems: CartItem[];
    TotalPrice: number;

    constructor() {

        this.TotalPrice = 0;
        this.CartItems = [];
    }


}