import { Action } from "@ngrx/store";

export const ADD_COMIC = 'ADD_COMIC';

export class AddComic implements Action {
    readonly type: string = ADD_COMIC;
    payload: string;
}