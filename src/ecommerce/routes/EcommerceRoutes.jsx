import { Navigate, Route, Routes } from 'react-router-dom';
import { CartPage, ItemDetailContainer, ItemListContainer } from '../pages';
import { NavBar } from '../components';


export const EcommerceRoutes = () => {
    return (
    <>
        <NavBar />

        <Routes>
            <Route path="/" element={ <ItemListContainer /> } />
            <Route path="/category/:categoryId" element={ <ItemListContainer /> } />
            <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />
            <Route path="/cart" element={ <CartPage /> } />

            <Route path="/*" element={ <Navigate to="/" />} />
        </Routes>
    </>
    )
}
