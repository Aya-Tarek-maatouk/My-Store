import { Product } from "./Product";

export class CartItem {

    product: Product;
    ProductAmount: number;

    constructor(_product?: Product, _ProductAmount?: number) {

        this.product = _product ?? new Product();
        this.ProductAmount = _ProductAmount ?? 1;

    }

}