import { createSelector } from "@ngrx/store";
import { CartItemState } from "./product.state";
import { CartItemModel } from "./product.model";

export const productRootSelector = (state:CartItemState) => state.cartItems;

export const allItems = createSelector(
    productRootSelector,
    (product:CartItemModel[]) => {
        return [... new Set(product.map((data) => data))]
    }
)