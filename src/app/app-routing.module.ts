import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    // {
    //     path: '',
    //     redirectTo: '',
    //     pathMatch: 'full'
    // },
    { path: '', loadChildren: () => import('./components/product-list/product-list.module').then(m => m.ProductListModule) },
    { path: 'cart', loadChildren: () => import('./components/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule) },
    { path: 'checkout', loadChildren: () => import('./components/checkout/checkout.module').then(m => m.CheckoutModule) },
    { path: 'products/:productId', loadChildren: () => import('./components/product-details/product-details.module').then(m => m.ProductDetailsModule) },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }