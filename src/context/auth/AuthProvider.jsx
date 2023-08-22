import { useReducer } from 'react';

import { logoutFirebase } from '../../firebase/providers';
import { loginWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle } from '../../firebase/providers';
import { AuthContext, authReducer } from './';

import { types } from '../types/types';

const initialState = {
    status: 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
};

export const AuthProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer( authReducer, initialState ); // init

    const login = ( user ) => {
        dispatch({ type: types.login, payload: user });
    }

    const checkingAuthentication = () => {
        dispatch({ type: types.checking });
    }

    const startGoogleSignIn = async() => {
        dispatch({ type: types.checking });

        const result = await signInWithGoogle();
        if ( !result.ok ) return dispatch({ type: types.logout, payload: { errorMessage } });

        dispatch({ type: types.login, payload: result });
    }

    const startCreatingUserWithEmailPassword = async({ email, password, displayName }) => {
        dispatch({ type: types.checking });

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });

        if ( !ok ) return dispatch({ type: types.logout, payload: { errorMessage } });
        
        dispatch({ type: types.login, payload: { uid, displayName, email, photoURL } });
    }

    const startLoginWithEmailPassword = async({ email, password }) => {
        dispatch({ type: types.checking });

        const result = await loginWithEmailPassword({ email, password });
        if ( !result.ok ) return dispatch({ type: types.logout, payload: { errorMessage: 'Invalid Email or Password' } });

        dispatch({ type: types.login, payload: result });
    }

    const startLogoutAuth = async() => {
        await logoutFirebase();
        dispatch({ type: types.logout, payload: {} });
    }
    
    return (
    <AuthContext.Provider value={{
        ...authState,

        // Methods
        login,
        checkingAuthentication,
        startGoogleSignIn,
        startCreatingUserWithEmailPassword,
        startLoginWithEmailPassword,
        startLogoutAuth,
    }}>
        { children }
    </AuthContext.Provider>
    )
}
