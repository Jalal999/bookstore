import { createAction, props } from '@ngrx/store';
import { CartItemModel } from './cart.model';


export const addBook = createAction(
    '[Book List] Add Book',
    props<{ book: CartItemModel }>()
);

export const removeBook = createAction(
    '[Book] Remove Book',
    props<{ bookId: number }>()
);

export const updateCart = createAction(
    '[Book] UPDATE CART',
    props<{ bookId: number, count: number}>()
)

export const clearCart = createAction(
    '[Book] CLEAR CART'
)