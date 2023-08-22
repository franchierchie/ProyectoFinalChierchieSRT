import { useContext } from 'react';
import { EcommerceContext } from '../../../context/ecommerce';

import DeleteIcon from '@mui/icons-material/Delete';
import '../../../index.css';

export const CartItem = ({ id, name, src, price, amount }) => {

    const { startDeletingProduct } = useContext( EcommerceContext );

    const onDeleteBtnClick = () => {
        startDeletingProduct( id );
    }

    return (
    <div className="box mb-3">
        <div className="columns">
            <div className="column is-3">
                <img
                    src={ src }
                    alt={ name }
                    className="image is-128x128"
                />
            </div>

            <div className="column info-container">
                <p className="title is-5 text-overflow">
                    { name }
                </p>
                <p className="subtitle is-6">${ price.toLocaleString(undefined, {maximumFractionDigits:2}) }</p>
                <p>Quantity: { amount }</p>

                <button
                    className="button is-danger mt-4"
                    onClick={ onDeleteBtnClick }
                >
                    <DeleteIcon color="white" />
                </button>
            </div>
        </div>
    </div>
    )
}
