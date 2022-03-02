import { ProductListState } from "../components/product-list/state/product-list.state";

import { productReducer } from "../components/product-list/state/product-list.reducer";

export interface AppState {
    ProductListState: ProductListState
    // cartItem: CartItemModel[];
}

export const AppReducer = {
    product: productReducer
}