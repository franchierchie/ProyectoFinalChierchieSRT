import { useContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseAuth } from '../firebase/config';

import { AuthContext } from '../context/auth';
import { EcommerceContext } from '../context/ecommerce';

export const useCheckAuth = () => {

    const { status, login, startLogoutAuth } = useContext( AuthContext );
    const { startLoadingProducts, startLogout } = useContext( EcommerceContext );

    useEffect(() => {
        onAuthStateChanged( FirebaseAuth, async( user ) => {
            if ( !user ) {
                startLogout();
                startLogoutAuth();
            }

            const { uid, email, displayName, photoURL } = user;
            login({ uid, email, displayName, photoURL });
            startLoadingProducts( uid );
        });
    }, []);

    return status;
}
