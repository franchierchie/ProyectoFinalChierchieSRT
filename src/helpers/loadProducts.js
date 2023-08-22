import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';

export const loadProducts = async( uid ) => {

    const collectionRef = collection( FirebaseDB, 'products' );
    const docs = await getDocs( collectionRef );

    const cartRef = collection( FirebaseDB, `cart/${ uid }/products` );
    const cartDocs = await getDocs( cartRef );

    const products = [];
    docs.forEach( doc => {
        products.push({ id: doc.id, ...doc.data() });
    });

    const cart = [];
    cartDocs.forEach( doc => {
        cart.push({ id: doc.id, ...doc.data() });
    });

    return {
        products,
        cart,
    };
}
