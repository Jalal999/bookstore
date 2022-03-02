import { createReducer, on } from '@ngrx/store';
import { addProduct } from './product.actions';
import { CartItemState } from './product.state';

export const initialState: CartItemState[] = [];

const _itemReducer = createReducer(
    initialState,
    on(addProduct, (state, action) => {
      let item = {...action.item};

      return {
          ...state,
          cartItems: [...state, item]
      }

    })
  );

export function productReducer(state:any, actions:any) {
    return _itemReducer(state, actions)
}