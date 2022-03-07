import { createAction, props } from '@ngrx/store';
import { CartItemModel } from './cart.model';
import { Action } from '@ngrx/store'


export const REMOVE_BOOK = "[Book] Remove Book";

export const addBook = createAction(
    '[Book List] Add Book',
    props<{ book: CartItemModel }>()
  );

export const retrievedBookList = createAction(
    '[Book List/API] Retrieve Books Success',
    props<{ books: ReadonlyArray<string> }>()
);

export const removeBook = createAction(
    '[Book] Remove Book',
    props<{ bookId: number }>()
);

// export class RemoveBook implements Action {
//     readonly type = REMOVE_BOOK

//     //here passing payload as a number, as we will use index(integer) to delete/remove
//     constructor(public payload: number) {}
// }

// export type Actions = RemoveBook;
