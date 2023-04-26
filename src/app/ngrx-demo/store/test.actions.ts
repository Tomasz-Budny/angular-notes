import { Action } from "@ngrx/store";

// Z tego pewnie można zrobić enuma, nwm czemu chłop tak nie zrobił w poradniku
export const ADD_COMIC = 'ADD_COMIC';

export class AddComic implements Action {
    readonly type: string = ADD_COMIC;

    constructor(
        public payload: string
    ) {}
}