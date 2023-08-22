import { useContext } from 'react';
import { EcommerceContext } from '../../context/ecommerce';
import { CartItem, Checkout } from '../components';

export const CartPage = () => {

    const { cart } = useContext( EcommerceContext );

    const totalPriceTotal = cart.map( prod => prod.price * prod.amount );
    const totalPrice = totalPriceTotal.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0
    );

    return (
    <section className="section">
        <div className="container">
            <h1 className="title">Shopping Cart</h1>

            <div className="columns">
                <div className="column is-three-quarters">
                    <div className="box">
                        <h2 className="subtitle">Cart Items</h2>

                        {cart.map( prod => (
                            <CartItem
                                key={ prod.id }
                                id={ prod.id }
                                name={ prod.name }
                                src={ prod.img }
                                price={ prod.price }
                                amount={ prod.amount }
                            />
                        ))}
                    </div>
                </div>

                <Checkout totalPrice={ totalPrice } />
            </div>
        </div>
    </section>
    )
}
