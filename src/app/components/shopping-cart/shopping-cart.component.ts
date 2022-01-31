import { Component } from '@angular/core';
import { CartService } from '../../services/cart-service/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.less']
})
export class ShoppingCartComponent {

  public items = this.cartService.getItems();
  public totalCost = this.cartService.getTotalCost();

  constructor(private cartService: CartService) { }

  public deleteItem(productId: number): void {
    this.cartService.deleteItem(productId);
    this.totalCost = this.cartService.getTotalCost(); 
  }

  public updateCart(productId: number, productCount: number): void {
    this.cartService.updateCart(productId, productCount);
    this.totalCost = this.cartService.getTotalCost(); 
  }

  public isCartNotEmpty(): boolean {
    return this.items.length > 0 ? true : false
  }
}
