import { Action } from "@ngrx/store";

// Z tego pewnie można zrobić enuma, nwm czemu chłop tak nie zrobił w poradniku
export const ADD_COMIC = 'ADD_COMIC';
export const DELETE_COMIC = 'DELETE_COMIC';

export class AddComic implements Action {
    readonly type: string = ADD_COMIC;

    constructor(
        public payload: string
    ) {}
}

export class DeleteComic implements Action {
    readonly type: string = DELETE_COMIC;

    constructor(
        public payload: string
    ) {}
}

// Tutaj kolejne dziwne rozwiązanie ale, nwm, może tak sie robi
export type TestActions =  AddComic | DeleteComic;