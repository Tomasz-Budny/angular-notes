// Reducer jest niejako zastępieniem serwisu z subjectem. jest on definiowany przez funkcje, nie klasę jak ma to miejsce w większości angularowych rzeczy.

import * as TestActions from "./test.actions";

// możemy ustalić initial state 
const initialState = {
    comics: [
        "Bondoman II",
        "Amusing Spooderman"
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
            return {
                ...state,
                comics: [...state.comics.filter(x => x != action.payload)]
            }
        default:
            return state;
    }  
}