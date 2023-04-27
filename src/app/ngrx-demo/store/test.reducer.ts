// Reducer jest niejako zastępieniem serwisu z subjectem. jest on definiowany przez funkcje, nie klasę jak ma to miejsce w większości angularowych rzeczy.

import { Comic } from "../comic.model";
import * as TestActions from "./test.actions";

// możemy ustalić initial state 
const initialState = {
    comics: [
        new Comic("Bondoman II", 4.5),
        new Comic("Amusing Spooderman", 3.2)
    ]
};

export function TestReducer(
    state = initialState,
    action: TestActions.TestActions
) {
    switch (action.type) {
        case TestActions.ADD_COMIC:
            return {
                ...state, // jeśli mamy inne pola musimy pamiętać aby je również skopiować. Idealnie nadaję się do tego ta składnia (spread operator)
                comics: [...state.comics, action.payload]
            };
        case TestActions.DELETE_COMIC:
            const n = <number>action.payload;
            const newArray = [...state.comics];
            newArray.splice(n, 1);

            return {
                ...state,
                comics: newArray
            };
        case TestActions.UPDATE_COMIC:
            // musiałem dodać tą linijke bo inaczej rozpaczało. u gościa działało bez tego
            const comic = state.comics[
                (<TestActions.UpdateComic>action).payload.index]
            const updatedComic = {
                ...comic,
                ...(<TestActions.UpdateComic>action).payload.comic
            }

            const updatedComics = [...state.comics];
            updatedComics[(<TestActions.UpdateComic>action).payload.index] = updatedComic;

            return {
                ...state,
                comics: updatedComics
            };
        default:
            return state;
    }  
}