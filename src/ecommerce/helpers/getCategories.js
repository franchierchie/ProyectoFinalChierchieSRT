
export const getCategories = ( products ) => {

    const allCategories = products.map( product => product.category );
    const categories = ['all', ...new Set( allCategories )];

    return categories;
}
