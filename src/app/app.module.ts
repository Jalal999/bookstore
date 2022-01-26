import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TruncatePipe } from './truncate.pipe';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AddCartDialogComponent } from './components/product-details/add-cart-dialog/add-cart-dialog.component';

const appRoutes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'product/:productId', component: ProductDetailsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListComponent,
    TruncatePipe,
    ProductDetailsComponent,
    AddCartDialogComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatBadgeModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    NgxStarRatingModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
