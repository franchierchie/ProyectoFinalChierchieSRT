import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { EcommerceContext } from '../../context/ecommerce';

import { AddItemButton, ItemQuantitySelector, BackButton, Description, ItemDetail } from '../components';
import { getProductById } from '../helpers/getProductById';

export const ItemDetailContainer = () => {

    const [amount, setAmount] = useState(1);
    const { isLoading, cart, startUpdatingCartProduct, startAddingToCart } = useContext( EcommerceContext );

    const { itemId } = useParams();
    const product = getProductById( itemId );

    const add = () => {
        setAmount( prev => prev + 1 );
    }

    const subtract = () => {
        if ( amount > 1 ) {
            setAmount( prev => prev - 1 );
        }
    }

    const handleCartClick = () => {
        if ( cart.some( prod => prod.name === product.name ) ) {
            const productToCart = cart.filter( prod => prod.name === product.name );
            startUpdatingCartProduct( productToCart[0], amount );
            return;
        }
        startAddingToCart( product, amount );
    }
    
    return (
        <div className="product-detail container">

            <BackButton />
            
            <ItemDetail>
                <Description product={ product }>
                    <ItemQuantitySelector
                        subtract={ subtract }
                        amount={ amount }
                        add={ add }
                    />

                    <AddItemButton
                        handleCartClick={ handleCartClick }
                        isLoading={ isLoading }
                    />
                </Description>
            </ItemDetail>
        </div>
    )
}
