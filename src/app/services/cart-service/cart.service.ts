import { Injectable } from '@angular/core';
import { Product } from '../../products';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { allItems } from 'src/app/components/shopping-cart/state/cart.selectors';
import { addBook, removeBook, updateCart, clearCart } from 'src/app/components/shopping-cart/state/cart.actions';
import { CartState } from 'src/app/components/shopping-cart/state/cart.state';

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
  items$ = this.store.pipe(select(allItems));

  constructor(private store: Store<CartState>) { }

  public addToCart(product: Product, value: number): void {
    if (value === 0 || value === null) {
      value = 1;
    }
    
    let book = {
        productId: product.id,
        productName: product.name,
        productPrice: product.price,
        productDesc: product.description!,
        productImg: product.imgPath,
        productImgAlt: product.imgAlt,
        productCnt: value
    }
    this.store.dispatch(addBook({ book }));
  }

  public getItems(): Observable<CartItemType[]> {
    return this.items$;
  }

  public clearCart() {
    // this.items$ = of([]);
    // return this.items$;
    this.store.dispatch(clearCart());
  }

  public deleteItem(bookId: number): void {
    this.store.dispatch(removeBook({ bookId }));
  }

  public getTotalCost(): number {
    this.totalCost = 0;
    
    this.items$.subscribe((data) => {
      data.forEach((element) => {
        this.totalCost += element.productCnt*element.productPrice;
      })
    })

    return this.totalCost;
  }

  public updateCart(bookId: number, count: number): void {
    this.store.dispatch(updateCart({ bookId, count }));
  }
}