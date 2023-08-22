import { useContext } from 'react';
import { EcommerceContext } from '../../../context/ecommerce';

export const Brief = () => {

  const { startCheckout } = useContext( EcommerceContext );

  const handleCheckoutClick = () => {
    startCheckout();
  }

  return (
    <div className="field">
        <button
            className="button is-primary is-fullwidth"
            onClick={ handleCheckoutClick }
        >
            Checkout
        </button>
    </div>
  )
}
