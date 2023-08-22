import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { NavLink } from 'react-router-dom';

export const CartWidget = ({ cartAmount }) => {

  return (
    <div className="navbar-item">
        <div className="buttons">
            <NavLink to="/cart" className="button is-success is-fullwidth-mobile">
                <Badge badgeContent={ cartAmount } color="secondary">
                    <ShoppingCartOutlinedIcon color="white" />
                </Badge>
            </NavLink>
        </div>
    </div>
  )
}
