import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/state/app.state';
import { CartService } from '../../services/cart-service/cart.service';
import { Store, select } from '@ngrx/store';
import { retrievedBookList } from './state/cart.actions';
import { CartState } from './state/cart.state';
import { Observable } from 'rxjs';
import { allItems } from './state/cart.selectors';
// import { allProducts } from './state/cart.selectors';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.less']
})
export class ShoppingCartComponent implements OnInit {

  // public items = this.cartService.getItems();
  items$ = this.store.pipe(select(allItems));
  public totalCost = this.cartService.getTotalCost();

  constructor(private cartService: CartService, private store: Store<CartState>) { }

  ngOnInit() {
    // this.items$ = this.store.pipe(select(allItems));
    console.log(this.items$.pipe.length);
  }

  public deleteItem(productId: number): void {
    this.cartService.deleteItem(productId);
    this.totalCost = this.cartService.getTotalCost(); 
  }

  public updateCart(productId: number, productCount: number): void {
    this.cartService.updateCart(productId, productCount);
    this.totalCost = this.cartService.getTotalCost(); 
  }

  public isCartNotEmpty(): boolean {
    return this.items$.pipe.length > 0 ? true : false
  }

  // private getProducts(): void {
  //   this.cartService.getItems()
  //       .subscribe((data) => {
  //         this.store.dispatch(retrievedBookList({books: data as string[]}))
  //       });
  // }
}
