import { ActionReducer, createReducer, INIT, on, UPDATE } from '@ngrx/store';
import { addBook, clearCart, removeBook, updateCart } from './cart.actions';
import { CartItemModel } from './cart.model';
import { itemRootSelector } from './cart.selectors';
import { CartState } from './cart.state';

const initialState: CartItemModel[] = [];

const _cartReducer = createReducer(
    initialState,
    on(addBook, (state, { book }) => {
        const isBook = !!Object.entries(state).filter((item) => item[1].productId === book.productId).length
        return isBook ? [...state] : [...state, book]
    }),
    on(removeBook, (state, { bookId }) => {
        return [...state].filter(item => item.productId !== bookId);
    }),
    on(updateCart, (state,  { bookId, count }) => {
        return [
            ...state.map((item) => 
                item.productId === bookId
                ? {...item, productCnt: count }
                : { ...item }
            ),
        ]
    }),
    on(clearCart, _ => [])
);

export function cartReducer(state: any, actions: any) {
    return _cartReducer(state, actions)
}

export const metaReducerLocalStorage = (reducer: ActionReducer<any>): ActionReducer<any> => {
    return (state, action) => {
        if (action.type === INIT || action.type == UPDATE) {
            const storageValue = localStorage.getItem("state");
            if (storageValue) {
                try {
                    return JSON.parse(storageValue);
                } catch {
                    localStorage.removeItem("state");
                }
            }
        }
        const nextState = reducer(state, action);
        localStorage.setItem("state", JSON.stringify(nextState));
        return nextState;
    }
}