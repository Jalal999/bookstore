import { Component, OnInit } from '@angular/core';
import { Product } from '../../products';
import { ProductService } from 'src/app/services/product-service/product.service';
import { Store, select } from '@ngrx/store';
import { retrievedProducts } from './state/product-list.actions';
import { ProductModel } from './state/product-list.model';
import { allProducts } from './state/product-list.selectors';
import { AppState } from 'src/app/state/app.state';
import { ProductListState } from './state/product-list.state';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent {
  public products: Product[] = [];

  products$ = this.store.pipe(select(allProducts));

  constructor(private productService: ProductService, private store: Store<ProductListState>) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(): void {
    this.productService.getProducts()
        .subscribe((data) => {
          this.store.dispatch(retrievedProducts({allProducts: data as ProductModel[]}))
        });
  }
}
