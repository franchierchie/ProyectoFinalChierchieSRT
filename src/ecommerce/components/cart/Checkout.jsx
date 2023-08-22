import { Brief } from './Brief';

export const Checkout = ({ totalPrice }) => {
    return (
    <div className="column is-one-quarter">
        <div className="box">
            <h2 className="subtitle">Cart Summary</h2>

            <div className="field">
                <p className="subtitle is-6">Total: ${ totalPrice.toLocaleString(undefined, {maximumFractionDigits:2}) }</p>
            </div>

            <Brief />
        </div>
    </div>
    )
}
