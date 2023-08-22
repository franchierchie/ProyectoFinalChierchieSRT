import { typesEcommerce } from '../types/types';

export const ecommerceReducer = ( state = {}, action ) => {
    switch ( action.type ) {
        case typesEcommerce.loading:
            return {
                ...state,
                isLoading: true,
            };

        case typesEcommerce.setProducts:
            return {
                ...state,
                isLoading: false,
                activeCategory:'all',
                products: action.payload,
            };

        case typesEcommerce.setCart:
            return {
                ...state,
                isLoading: false,
                cart: action.payload,
            };

        case typesEcommerce.setActiveCategories:
            return {
                ...state,
                isLoading: false,
                activeCategory: action.payload,
            };

        case typesEcommerce.addToCart:
            return {
                ...state,
                isLoading: false,
                cart: [ ...state.cart, action.payload ],
            };

        case typesEcommerce.updateAmount:
            return {
                ...state,
                isLoading: false,
                cart: state.cart.map( prod => {

                    if ( prod.id === action.payload.id ) {
                        return action.payload;
                    }
    
                    return prod;
                })
            };

        case typesEcommerce.deleteProductCartById:
            return {
                ...state,
                isLoading: false,
                cart: state.cart.filter( prod => prod.id !== action.payload ),
            };

        case typesEcommerce.checkout:
            return {
                ...state,
                isLoading: false,
                cart: [],
            };

        case typesEcommerce.clearProductsLogOut:
            return {
                ...state,
                isLoading: false,
                products: [],
                activeCategory: null,
                cart: [],
            };
    
        default:
            return state;
    }
}