import { createAction, props } from '@ngrx/store';
import { CartItemModel } from './product.model';

export const addProduct = createAction(
    '[Product] Add Product',
    props<{item: CartItemModel}>()
)