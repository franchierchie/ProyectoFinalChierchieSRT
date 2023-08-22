
export const ItemQuantitySelector = ({ subtract, amount, add }) => {
  return (
    <div className="field">
        <label className="label">Quantity:</label>

        <div className="control">
            <div className="field has-addons">
                <p className="control">
                    <button className="button" onClick={ subtract }>
                        -
                    </button>
                </p>
                <p className="control">
                    <input
                        className="input has-text-centered"
                        type="number"
                        value={ amount }
                        readOnly
                    />
                </p>
                <p className="control">
                    <button className="button" onClick={ add }>
                        +
                    </button>
                </p>
            </div>
        </div>
    </div>
  )
}
