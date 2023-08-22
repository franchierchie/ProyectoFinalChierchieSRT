import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../../context/auth';
import { EcommerceContext } from '../../../context/ecommerce';

import { CartWidget } from './';
import { LogoutOutlined } from '@mui/icons-material';
import 'bulma/css/bulma.min.css';
import '../../../index.css';

export const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const { startLogoutAuth } = useContext( AuthContext );
    const { cart, startLogout } = useContext( EcommerceContext );

    const handleClick = () => {
        setIsOpen(prev => !prev);
    }

    const onLogout = () => {
        startLogoutAuth();
        startLogout();
        setIsOpen( false );
    }

    return (
    <header>
        <nav className="navbar is-link p-2" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <NavLink className="navbar-item has-text-weight-bold is-size-4" to="/">
                    TechOasis
                </NavLink>

                <div
                    role="button"
                    className={`navbar-burger ${ isOpen ? 'is-active' : '' }`}
                    aria-label="menu"
                    aria-expanded="false"
                    data-target="navbarBasicExample"
                    onClick={ handleClick }
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
            </div>

            <div id="navbarBasicExample" className={`navbar-menu ${ isOpen ? 'is-active' : '' }`} >
                <div className="navbar-start">
                    <NavLink className="navbar-item" to="/">
                        Home
                    </NavLink>
                </div>

                <div className="navbar-end">
                    <CartWidget cartAmount={ cart.length } />

                    <div className="navbar-item pt-0">
                        <div className="buttons">
                            <button
                                className="button is-danger is-fullwidth-mobile mb-2-mobile mr-0-mobile"
                                onClick={ onLogout }
                            >
                                <LogoutOutlined />
                                <p className="pl-1">Log out</p>
                            </button>
                        </div>
                    </div>
                </div>
                
            </div>
        </nav>
    </header>
    )
}
