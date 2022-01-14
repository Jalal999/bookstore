import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TruncatePipe } from './truncate.pipe';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'product/:productId', component: ProductDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListComponent,
    TruncatePipe,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatBadgeModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
