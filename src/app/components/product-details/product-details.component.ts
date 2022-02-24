import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../../products';
import { CartService } from '../../services/cart-service/cart.service';
import { MatDialog } from '@angular/material/dialog';
import { AddCartDialogComponent } from './add-cart-dialog/add-cart-dialog.component';
import { FormControl } from '@angular/forms';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {
  public product?: Product;
  public amount = new FormControl('1');

  constructor(private route: ActivatedRoute, private cartService: CartService, public addCartDialog: MatDialog, private productService: ProductService) { }

  ngOnInit(): void {
    const productIdFromRoute = Number(this.route.snapshot.paramMap.get('productId'));
    this.productService.getProduct(productIdFromRoute)
      .subscribe(product => this.product = product);
  }

  public addToCart(): void {
    this.cartService.addToCart(this.product!, this.amount.value);
    this.addCartDialog.open(AddCartDialogComponent);
  }
}