import { createAction, props } from '@ngrx/store';
import { ProductModel } from './product-list.model';


export const retrievedProducts = createAction(
    '[Product List] Products',
    props<{allProducts: ProductModel[]}>()
)