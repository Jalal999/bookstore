import { createReducer, on } from '@ngrx/store';
import { addBook, retrievedBookList, removeBook } from './cart.actions';
import { CartItemModel } from './cart.model';

export let initialState: CartItemModel[] = [];

const _collectionReducer = createReducer(
    initialState,
    on(addBook, (state, { book }) => {
        let productInCart = false;
        for (let i = 0; i < state.length; i++) {
            if (state[i].productId === book.productId) {
                console.log(state[i].productName + " " + state[i].productCnt);
                state[i].productCnt = state[i].productCnt + book.productCnt;
                productInCart = true;
                return {...state};
                break;
            }
        }

        if (!productInCart) {
              if (book.productCnt === 0) {
                book.productCnt = 1;
              }
              productInCart = true;
            return [...state, book];
        }
        else {
            return [...state, book];
        }
    }),
    on(removeBook, (state, { bookId }) => {
        // let newState: CartItemModel[] = [...state]
        // state.forEach((element, index) => {
        //     if(element.productId === bookId) {
        //         console.log(index)
        //         deleteIndex = index
        //         // const newState = state.splice(index, 1);
        //         // return newState;
        //     }
        // }); 
        const newState = [...state].filter(item => item.productId !== bookId);
        return newState;
    })
    //   on(retrievedBookList, (state, { books }) => books)
);

// export function reducer(state = [initialState], action: Action) {
//     const tutorialAction = action as BookActions.Actions; 
//     switch(tutorialAction.type) {
//         case BookActions.REMOVE_BOOK:
//             state.splice(tutorialAction.payload, 1);
//             return state;
//         default:
//             return state;
//     }
// }

export function collectionReducer(state: any, actions: any) {
    return _collectionReducer(state, actions)
}

