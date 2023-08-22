import React from 'react';
import { NavLink } from 'react-router-dom';

export const ProductCard = ({ product, name, imageSrc, price, id }) => {

  return (
    <div className="card p-4">
        <div className="card-image">
          <figure className="image">
              <img src={ imageSrc } alt={ name } />
          </figure>
        </div>

        <div className="card-content">
          <p className="title is-5">{ name }</p>
          <p className="subtitle is-6">${ price.toLocaleString(undefined, {maximumFractionDigits:2}) }</p>
        </div>

        <div className="buttons">
          <NavLink className="button is-fullwidth is-mobile is-info" to={`/item/${ id }`}>View Product</NavLink>
        </div>
    </div>
  )
}
