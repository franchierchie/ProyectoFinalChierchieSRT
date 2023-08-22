import { useContext, useReducer } from 'react';

import { collection, deleteDoc, doc, setDoc, updateDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';

import { AuthContext } from '../auth';
import { EcommerceContext, ecommerceReducer } from './';

import { typesEcommerce } from '../types/types';
import { loadProducts } from '../../helpers';

const initialState = {
    isLoading: false,
    products: [],
    activeCategory: null,
    cart: [],
};

export const EcommerceProvider = ({ children }) => {

    const [ ecommerceState, dispatch ] = useReducer( ecommerceReducer, initialState ); // init
    const { uid } = useContext( AuthContext );

    const setActiveCategories = ( category ) => {
        dispatch({ type: typesEcommerce.setActiveCategories, payload: category });
    }

    const startLoadingProducts = async( id ) => {
        dispatch({ type: typesEcommerce.loading });
        
        const { products, cart } = await loadProducts( id );

        dispatch({ type: typesEcommerce.setProducts, payload: products });
        dispatch({ type: typesEcommerce.setCart, payload: cart });
    }

    const startAddingToCart = async( product = {}, amount = 1 ) => {
        dispatch({ type: typesEcommerce.loading });
        
        const productToCart = { ...product, amount };
        delete productToCart.id;
        
        const newDoc = doc( collection( FirebaseDB, `cart/${ uid }/products` ) );
        await setDoc( newDoc, productToCart );

        productToCart.id = newDoc.id;

        dispatch({ type: typesEcommerce.addToCart, payload: productToCart });
    }

    const startUpdatingCartProduct = async( product, amount = 1 ) => {
        const productToCart = { ...product, amount };

        const docRef = doc( FirebaseDB, `cart/${ uid }/products/${ product.id }` );
        await updateDoc( docRef, productToCart );

        dispatch({ type: typesEcommerce.updateAmount, payload: productToCart });
    }

    const startDeletingProduct = async( id ) => {
        dispatch({ type: typesEcommerce.loading });

        const docRef = doc( FirebaseDB, `cart/${ uid }/products/${ id }` );
        await deleteDoc( docRef );

        dispatch({ type: typesEcommerce.deleteProductCartById, payload: id });
    }

    const startCheckout = async() => {
        dispatch({ type: typesEcommerce.loading });

        ecommerceState.cart.forEach( async( prod ) => {
            const docRef = doc( FirebaseDB, `cart/${ uid }/products/${ prod.id }` );
            await deleteDoc( docRef );
        });

        dispatch({ type: typesEcommerce.checkout });
    }

    const startLogout = async() => {
        dispatch({ type: typesEcommerce.clearProductsLogOut });
    }
    
    return (
    <EcommerceContext.Provider value={{
        ...ecommerceState,

        // Methods
        setActiveCategories,
        startLoadingProducts,
        startAddingToCart,
        startUpdatingCartProduct,
        startDeletingProduct,
        startCheckout,
        startLogout,
    }}>
        { children }
    </EcommerceContext.Provider>
    )
}
