import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../../products';
import { CartService } from '../../services/cart-service/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { AddCartDialogComponent } from './add-cart-dialog/add-cart-dialog.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {
  public product?: Product;
  
  constructor(private route: ActivatedRoute, private cartService: CartService, public addCartDialog: MatDialog) { }

  ngOnInit(): void {
    const productIdFromRoute = Number(this.route.snapshot.paramMap.get('productId'));
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  public addToCart(product: Product, value: number): void {
    this.cartService.addToCart(product, value);
    this.addCartDialog.open(AddCartDialogComponent);
  }

  onSubmit() {
    
  }
}
