import {ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER, SEE_ALL_FAV } from "./action-types"


const initialState = {
    myFavorites: [],
    allCharacters: [],
    errors: {},
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
            return {
                ...state,
                myFavorites: [...state.myFavorites],
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