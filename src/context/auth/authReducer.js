import { types } from '../types/types';

export const authReducer = ( state = {}, action ) => {
    switch ( action.type ) {
        case types.checking:
            return {
                ...state,
                status: 'checking',
            };

        case types.login:
            return {
                ...state,
                status: 'authenticated',
                uid: action.payload.uid,
                email: action.payload.email,
                displayName: action.payload.displayName,
                photoURL: action.payload.photoURL,
                errorMessage: null,
            };

        case types.logout:
            return {
                status: 'not-authenticated',
                uid: null,
                email: null,
                displayName: null,
                photoURL: null,
                errorMessage: action.payload?.errorMessage,
            };
    
        default:
            return state;
    }
}