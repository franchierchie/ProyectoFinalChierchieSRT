import { useContext } from 'react';
import { EcommerceContext } from '../../context/ecommerce';
import { getCategories } from '../helpers/getCategories';
import { CatButtons, ItemList, LoadingCatButtons, LoadingProductCard } from '../components';

const categories = ['a', 'b', 'c'];

export const ItemListContainer = () => {

    const { isLoading, products, activeCategory, setActiveCategories } = useContext( EcommerceContext );

    const categories = getCategories( products );

    const handleCatClick = ( event ) => {
        const cat = event.target.innerHTML.toLowerCase();
        setActiveCategories( cat );
    }
    
    return (
    <div className="container">
        <h1 className="title pt-5">Products</h1>
        
        <div className="buttons is-centered is-flex-mobile">
            {
            ( isLoading )
                ? ( <LoadingCatButtons /> )
                : ( <CatButtons categories={ categories } onClick={ handleCatClick } /> )
            }
        </div>

        <div className="columns is-multiline">
            {
            ( isLoading )
                ? ( <LoadingProductCard /> )
                : ( <ItemList
                        products={ products }
                        activeCategory={ activeCategory }
                    /> )
            }
        </div>

        
    </div>
    )
}
