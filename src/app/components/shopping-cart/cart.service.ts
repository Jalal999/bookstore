import { Injectable } from '@angular/core';
import { Product } from '../../products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems?: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    this.cartItems!.push(product);
  }

  getItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }
}
