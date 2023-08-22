
export const Description = ({ children, product }) => {
    return (
    <>
        <div className="column is-12-mobile is-6-tablet is-4-desktop">
            <img src={ product?.img } alt={ product?.name } />
        </div>

        <div className="column is-12-mobile is-6-tablet is-8-desktop">
            <h1 className="title is-3">{ product?.name }</h1>
            <p className="subtitle is-5 pt-5">${ product?.price.toLocaleString(undefined, {maximumFractionDigits:2}) }</p>

            { children }
        </div>
    </>
    )
}
