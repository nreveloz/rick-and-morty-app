import {ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER, SAVE_USER_SESSION, SEE_ALL_FAV} from "./action-types"


const initialState = {
    myFavorites: [],
    allCharacters: [],
    errors: {},
    userSession : {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITES:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload,
                errors: {},
            }

        case DELETE_FAVORITES:
            return {
                ...state,
                myFavorites: action.payload,
                errors: {},
            }

        case FILTER:
            const allCharsFiltered = state.allCharacters.filter( char => char.gender === action.payload);
            return {
                ...state,
                myFavorites: allCharsFiltered
            }

        case ORDER:
                return {
                    ...state,
                    myFavorites:
                        action.payload === 'Ascendente' ? state.allCharacters.sort((a, b) => a.id - b.id)
                            : state.allCharacters.sort((a, b) => b.id - a.id),

                    allCharacters: [...state.myFavorites]
                }

        case SEE_ALL_FAV:
            console.log("state : ", state)
            return {
                ...state,
                myFavorites: [...state.myFavorites],
            }

        case SAVE_USER_SESSION:
            console.log("saving user session : ", state)
            return {
                ...state,
                userSession: action.payload,
            }

        case "ERROR":
            return {
                ...state,
                errors: action.payload,
            }

        default:
            return { ...state }
    }
}

export default reducer;