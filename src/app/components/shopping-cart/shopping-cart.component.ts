import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { CartService } from '../../services/cart-service/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.less']
})
export class ShoppingCartComponent {

  constructor(private cartService: CartService) { }

  public items = this.cartService.getItems();
  public totalCost = this.cartService.getTotalCost();

  public deleteItem(productId: number): void {
    this.cartService.deleteItem(productId);
  }
}
