import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../../products';
import { CartService } from '../shopping-cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;
  

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    const currentRouteParam = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(currentRouteParam.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    console.log('your product ' + product.id + ' is added');
  }
}
