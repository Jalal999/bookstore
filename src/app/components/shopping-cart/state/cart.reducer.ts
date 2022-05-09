import { ActionReducer, createReducer, INIT, on, UPDATE } from '@ngrx/store';
import { addBook, clearCart, removeBook, updateCart } from './cart.actions';
import { CartItemModel } from './cart.model';
import { itemRootSelector } from './cart.selectors';
import { CartState } from './cart.state';

export let initialState: CartItemModel[] = [];

const _cartReducer = createReducer(
    initialState,
    on(addBook, (state, { book }) => {
        let newState: CartItemModel[] = [];
        let currentState: CartItemModel[]=state.map((item) => { return item });
        let productInCart = false;

        if (state.length < 1) {
            return [...state, book]
        } else {
            currentState.map((item) => {
                let updatedItem;
                if(item.productId === book.productId) {
                    updatedItem = {...item, productCnt: Number(book.productCnt)+Number(item.productCnt)};
                    newState.push(updatedItem)
                    productInCart = true;
                } else {
                    newState.push(item);
                }
            })

            if (productInCart) {
                currentState = [...newState]
                return [...newState]
            } else {
                currentState = [...newState, book]
                return [...newState, book]
            }
        }
    }),
    on(removeBook, (state, { bookId }) => {
        const newState = [...state].filter(item => item.productId !== bookId);
        return newState;
    }),
    on(updateCart, (state,  { bookId, count }) => {
        let newState: CartItemModel[] = [];
        state.map((item) => {
            let updatedItem;
            if (item.productId === bookId) {
                updatedItem = {...item, productCnt: count} 
                newState.push(updatedItem)
            } else {
                newState.push(item)
            } 
        })
        return [...newState]
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