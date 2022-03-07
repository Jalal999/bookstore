import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { collectionReducer } from './state/cart.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatIconModule, 
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    StoreModule.forFeature('items', collectionReducer),

  ]
})
export class ShoppingCartModule { }
