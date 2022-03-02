import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { TruncatePipe } from '../../truncate.pipe';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './state/product-list.reducer';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';


@NgModule({
  declarations: [
    ProductListComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ProductListRoutingModule,
    StoreModule.forFeature('product', productReducer),
  ]
})
export class ProductListModule { }
