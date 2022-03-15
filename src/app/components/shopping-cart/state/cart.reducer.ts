import { createReducer, on } from '@ngrx/store';
import { addBook, clearCart, removeBook, updateCart } from './cart.actions';
import { CartItemModel } from './cart.model';

export let initialState: CartItemModel[] = [];

const _cartReducer = createReducer(
    initialState,
    on(addBook, (state, { book }) => {
        let productInCart = false;
        for (let i = 0; i < state.length; i++) {
            if (state[i].productId === book.productId) {
                let newState: CartItemModel[] = [];
                for (let k = 0; k < state.length; k++){
                    if (i !== k) {
                        newState.push(state[k])
                    } else {
                        newState.push({
                            productId: state[k].productId,
                            productName: state[k].productName,
                            productPrice: state[k].productPrice, 
                            productDesc: state[k].productDesc,
                            productImg: state[k].productImg,
                            productImgAlt: state[k].productImgAlt,
                            productCnt: Number(state[k].productCnt)+Number(book.productCnt)
                        })
                    }
                }
                productInCart = true;

                return [...newState];
                break;
            }
        }

        if (!productInCart) {
              if (book.productCnt === 0 || book.productCnt === null) {
                let newState: CartItemModel[] = [];
                for (let i = 0; i < state.length; i++){
                    newState.push(state[i])
                }
                newState.push({
                    productId: book.productId,
                    productName: book.productName,
                    productPrice: book.productPrice, 
                    productDesc: book.productDesc,
                    productImg: book.productImg,
                    productImgAlt: book.productImgAlt,
                    productCnt: 1
                }) 
                productInCart = true;
                return [...newState];
              } else {
                    productInCart = true;
                  return [...state, book]
              }
        }
        else {
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
    on(clearCart, ( state ) => {
        return [];
    })
);

export function cartReducer(state: any, actions: any) {
    return _cartReducer(state, actions)
}