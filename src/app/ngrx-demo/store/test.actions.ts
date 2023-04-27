import { Action } from "@ngrx/store";
import { Comic, UpdatedComic } from "../comic.model";

// Z tego pewnie można zrobić enuma, nwm czemu chłop tak nie zrobił w poradniku
export const ADD_COMIC = 'ADD_COMIC';
export const DELETE_COMIC = 'DELETE_COMIC';
export const UPDATE_COMIC = 'UPDATE_COMIC'; 

export class AddComic implements Action {
    readonly type: string = ADD_COMIC;

    constructor(
        public payload: Comic
    ) {}
}

export class DeleteComic implements Action {
    readonly type: string = DELETE_COMIC;

    constructor(
        public payload: number
    ) {}
}

export class UpdateComic implements Action {
    readonly type: string = UPDATE_COMIC;

    constructor(
        public payload: UpdatedComic
    ) {}
}

// Tutaj kolejne dziwne rozwiązanie ale, nwm, może tak sie robi
export type TestActions =  UpdateComic | AddComic | DeleteComic;