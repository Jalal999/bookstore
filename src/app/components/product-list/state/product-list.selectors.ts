import { createSelector } from "@ngrx/store";
import { ProductListState } from "./product-list.state";
import { ProductModel } from "./product-list.model";

export const productRootSelector = (state:ProductListState) => state.product;

export const allProducts = createSelector(
    productRootSelector,
    (product:ProductModel[]) => {
        return [... new Set(product.map((data) => data))]
    }
)