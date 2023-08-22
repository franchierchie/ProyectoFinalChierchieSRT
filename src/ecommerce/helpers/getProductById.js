import { useContext } from 'react';
import { EcommerceContext } from '../../context/ecommerce';

export const getProductById = ( id ) => {
    const { products } = useContext( EcommerceContext );

    return products?.find( prod => prod.id == id );
}
