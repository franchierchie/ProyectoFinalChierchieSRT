import { ProductCard } from '../products';

let renderProducts;

export const ItemList = ({ products = [], activeCategory = 'all' }) => {

    if ( activeCategory !== 'all' ) {
        renderProducts = products.filter( prod => prod.category === activeCategory );
    }

    return (
    <>
    {
        ( activeCategory === 'all' )
            ? products.map( prod => (
                <div key={ prod.id } className="column is-4">
                    <ProductCard
                        product={ prod }
                        name={ prod.name }
                        imageSrc={ prod.img }
                        price={ prod.price }
                        id={ prod.id }
                    />
                </div>
            ))
            : renderProducts.map( prod => (
                <div key={ prod.id } className="column is-4">
                    <ProductCard
                        product={ prod }
                        name={ prod.name }
                        imageSrc={ prod.img }
                        price={ prod.price }
                        id={ prod.id }
                    />
                </div>
            ))
    }
    </>
    )
}
