import { createSelector } from "@ngrx/store";
import { map } from "rxjs";
import { CartItemModel } from "./cart.model";
import { CartState } from "./cart.state";

export const itemRootSelector = (state: CartState) => state;

export const allItems = createSelector(
    itemRootSelector,
    (state: CartState) => state.items
)


// return this.http.get<FoodListModelServerResponse >(this.url + 'foodlist/' + storeId)
// .pipe(map(response => response.stores));
//   }