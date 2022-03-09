import { ProductListState } from "../components/product-list/state/product-list.state";

import { productReducer } from "../components/product-list/state/product-list.reducer";
import { CartState } from "../components/shopping-cart/state/cart.state";
import { cartReducer } from "../components/shopping-cart/state/cart.reducer";

export interface AppState {
    ProductListState: ProductListState,
    CartState: CartState
}

export const AppReducer = {
    product: productReducer,
    items: cartReducer
}