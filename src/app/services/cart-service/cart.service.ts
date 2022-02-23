import { Injectable } from '@angular/core';
import { Product } from '../../products';

export type CartItemType = {
  productId: number,
  productName: string,
  productPrice: number, 
  productDesc: string,
  productImg?: string,
  productImgAlt?: string,
  productCnt: number
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems?: CartItemType[] = [];
  private totalCost: number = 0;

  constructor() { }

  public addToCart(product: Product, value: number): void {
    let productInCart = false;

    for (let i=0; i < this.cartItems!.length; i++) {
      if (this.cartItems![i].productId === product.id) {
        this.cartItems![i].productCnt += value;
        productInCart = true;
        break;
      }
    }

    if (!productInCart) {
      if (value === 0) {
        value = 1;
      }
      this.cartItems?.push({
        productId: product.id,
        productName: product.name,
        productPrice: product.price,
        productDesc: product.description!,
        productImg: product.imgPath,
        productImgAlt: product.imgAlt,
        productCnt: value
      });
    }
  }

  public getItems(): CartItemType[] {
    return this.cartItems!;
  }

  public clearCart(): CartItemType[] {
    this.cartItems = [];
    return this.cartItems;
  }

  public deleteItem(productId: number): void {
    this.cartItems!.forEach((element, index) => {
      if(element.productId === productId) {
        this.cartItems!.splice(index, 1);
      }
    }); 
  }

  public getTotalCost(): number {
    this.totalCost = 0;
    this.cartItems!.forEach((element) => {
      this.totalCost += element.productCnt*element.productPrice;
    })
    return this.totalCost;
  }

  public updateCart(id: number, count: number): void {
    this.cartItems!.forEach((element) => {
      if (element.productId === id) {
        element.productCnt = count;
      }
    })
  }
}
