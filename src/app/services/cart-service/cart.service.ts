import { Injectable } from '@angular/core';
import { empty } from 'rxjs';
import { Product } from '../../products';

interface CartItemType {
  productId: number,
  productName: string,
  productPrice: number, 
  productDesc: string,
  productImg?: string,
  productCnt: number
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems?: CartItemType[] = [];

  constructor() { }

  public addToCart(product: Product, value: number): void {
    let productInCart = false;

    for (let i=0; i < this.cartItems!.length; i++) {
      if (this.cartItems![i].productId === product.id) {
        console.log(this.cartItems![i].productId + " " + product.id)
        this.cartItems![i].productCnt += value;
        productInCart = true;
        break;
      }
    }

    if (!productInCart) {
      this.cartItems?.push({
        productId: product.id,
        productName: product.name,
        productPrice: product.price,
        productDesc: product.description!,
        productImg: product.imgPath,
        productCnt: value
      });
    }
    console.log(this.cartItems);
  }

  public getItems(): CartItemType[] {
    return this.cartItems!;
  }

  protected clearCart(): CartItemType[] {
    this.cartItems = [];
    return this.cartItems;
  }

  public deleteItem(productId: number): void {
    this.cartItems!.forEach((element, index) => {
      if(element.productId === productId) {
        this.cartItems!.splice(index, productId);
      }
    }); 
    console.log(this.cartItems)
  }

}
