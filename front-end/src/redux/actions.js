import {ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER, SAVE_USER_SESSION, SEE_ALL_FAV} from "./action-types";
import axios from "axios";

export const addFavorites = (character) => {
    return async function (dispatch) {
        try {
            const responseFromBackend = await axios.post (
                " http://localhost:3001/rickandmorty/favs",
                character
            );
            console.log("response from backend ", responseFromBackend)
            return dispatch (
                { type: ADD_FAVORITES, payload: responseFromBackend.data }
            )
        } catch(error) {
            return dispatch( { typE: "ERROR", payload:error })
        };
    };
};

// =========== version anterior ============
//         axios
//             .post(" http://localhost:3001/rickandmorty/favs", character)
//             .then( response => {
//                 return dispatch (
//                     { type: ADD_FAVORITES, payload: response.data }
//                 );
//             });
//     }


export const deleteFavorites = (id) => {
    return async function (dispatch) {

        try {
            const responseFromBackend = await axios.delete(
                `http://localhost:3001/rickandmorty/favs/${id}`
            );
            return dispatch(
                { type: DELETE_FAVORITES, payload: responseFromBackend.data }
            )
        } catch (error) {
            return dispatch( { type: "ERROR", payload: error } )
        };
    };
};

// =========== version anterior ============
//         axios
//             .delete(` http://localhost:3001/rickandmorty/favs/${id}`)
//             .then( response => {
//                 return dispatch (
//                     { type: DELETE_FAVORITES, payload: response.data }
//                 );
//             });
//     }


export const filterCards = (gender) => {
    return { type: FILTER, payload: gender }
};

export const orderCards = (id) => {
    return { type: ORDER, payload: id }
};

export const seeAllFav = () => {
    return { type: SEE_ALL_FAV,}
};

export const saveUserSession = (userSession) => {
    return { type: SAVE_USER_SESSION, payload: userSession}
};

