
export const AddItemButton = ({ handleCartClick, isLoading }) => {
    return (
    <div className="field">
        <div className="control">
            <button
                className="button is-info is-outlined"
                onClick={ handleCartClick }
                disabled={ isLoading }
            >
                Add to Cart
            </button>
        </div>
    </div>
    )
}
