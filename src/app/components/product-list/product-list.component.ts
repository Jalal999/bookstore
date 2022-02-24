import { Component, OnInit } from '@angular/core';
import { Product } from '../../products';
import { ProductService } from 'src/app/services/product-service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent {
  public products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(): void {
    this.productService.getProducts()
        .subscribe(products => this.products = products);
  }
}
