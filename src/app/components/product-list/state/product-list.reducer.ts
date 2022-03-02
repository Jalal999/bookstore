import { createReducer, on } from '@ngrx/store';
import { retrievedProducts } from './product-list.actions';
import { ProductModel } from './product-list.model';

export const initialState: ProductModel[] = [];

const _productReducer = createReducer(
    initialState,
    on(retrievedProducts, (state, { allProducts }) => {
        return [...allProducts]
    })
)

export function productReducer(state:any, actions:any) {
    return _productReducer(state, actions)
}