import { createSelector } from "@ngrx/store";
import { CartItemModel } from "./cart.model";
import { CartState } from "./cart.state";

export const itemRootSelector = (state:CartState) => state.items;

export const allItems = createSelector(
    itemRootSelector,
    (product:CartItemModel[]) => {
        return [... new Set(product.map((data) => data))]
    }
)