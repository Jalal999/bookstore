import { ActionReducer, createReducer, INIT, on, UPDATE } from '@ngrx/store';
import { addBook, clearCart, removeBook, updateCart } from './cart.actions';
import { CartItemModel } from './cart.model';

export let initialState: CartItemModel[] = [];

const _cartReducer = createReducer(
    initialState,
    on(addBook, (state, { book }) => {
        let productInCart = false;
        let newState: CartItemModel[] = [];

        if (state.length > 0){
            for (let i = 0; i < state.length; i++) {
                if (state[i].productId !== book.productId) {
                    newState.push(state[i]);
                } else {
                    productInCart = true;
                    newState.push({
                        productId: state[i].productId,
                        productName: state[i].productName,
                        productPrice: state[i].productPrice, 
                        productDesc: state[i].productDesc,
                        productImg: state[i].productImg,
                        productImgAlt: state[i].productImgAlt,
                        productCnt: Number(state[i].productCnt)+Number(book.productCnt)
                    })
                }
            }
            if (!productInCart) {
                return [...newState, book];  
            } else {
                return newState;
            }
        } else {
            return [...state, book];
        }
        

    }),
    on(removeBook, (state, { bookId }) => {
        const newState = [...state].filter(item => item.productId !== bookId);
        return newState;
    }),
    on(updateCart, (state, { bookId, count }) => {
        let newState: CartItemModel[] = [];
        for (let i = 0; i < state.length; i++) {
            if(state[i].productId !== bookId) {
                newState.push(state[i])
            } else {
                newState.push({
                    productId: state[i].productId,
                    productName: state[i].productName,
                    productPrice: state[i].productPrice, 
                    productDesc: state[i].productDesc,
                    productImg: state[i].productImg,
                    productImgAlt: state[i].productImgAlt,
                    productCnt: count
                })
            }
        }
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