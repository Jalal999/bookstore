import { Component } from '@angular/core';
import { CartService } from '../../services/cart-service/cart.service';
import { Store, select } from '@ngrx/store';
import { CartState } from './state/cart.state';
import { allItems } from './state/cart.selectors';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.less']
})
export class ShoppingCartComponent {

  items$ = this.store.pipe(select(allItems));
  public totalCost = this.cartService.getTotalCost();

  constructor(private cartService: CartService, private store: Store<CartState>) { }

  public deleteItem(productId: number): void {
    this.cartService.deleteItem(productId);
    this.totalCost = this.cartService.getTotalCost(); 
  }

  public updateCart(productId: number, productCount: number): void {
    this.cartService.updateCart(productId, productCount);
    this.totalCost = this.cartService.getTotalCost(); 
  }

  public isCartNotEmpty(): boolean {
    return this.totalCost === 0 ? false : true;
  }
}
