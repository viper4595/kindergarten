import firebase from 'firebase';
import {
    SELECT_KINDERGARTEN,
    ADD_TO_FAVOURITE,
    FAVOURITE_FETCH_SUCCESS,
    KINDERGARTEN_FETCH_SUCCESS,
} from './types';


export const kindergartenFetch = () => {
    return (dispatch) => {
        console.log('in 1');
        firebase.database().ref('/kindergarten/')
            .on('value', snapshot => {
                console.log('in 2');
                dispatch({ type: KINDERGARTEN_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const selectKindergarten = (id) => {
    return (dispatch) => {
        dispatch({ type: SELECT_KINDERGARTEN, payload: id });
    };
};

export const addToFavourite = (fav) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/favourites`)
            .push(fav)
            .then(() => {
                dispatch({ type: ADD_TO_FAVOURITE });
            });
    };
};

export const favouriteFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/favourites`)
            .on('value', snapshot => {
                dispatch({ type: FAVOURITE_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const favouriteDelete = ({ uid }) => {
    console.log({ uid });
    const { currentUser } = firebase.auth();
    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/favourites/${uid}`).remove();
    };
};
