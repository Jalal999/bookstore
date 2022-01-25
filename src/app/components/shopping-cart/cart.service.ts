import { Injectable } from '@angular/core';
import { Product } from '../../products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems?: Product[] = [];

  constructor() { }

  public addToCart(product: Product): void {
    this.cartItems!.push(product);
  }

  public getItems(): Product[] {
    return this.cartItems!;
  }

  protected clearCart(): Product[] {
    this.cartItems = [];
    return this.cartItems;
  }
}
