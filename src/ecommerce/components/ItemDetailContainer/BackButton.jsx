import { NavLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const BackButton = () => {
    return (
    <NavLink to="/">
        <button className="button px-3 my-6 is-dark is-outlined">
            <ArrowBackIcon color="white" />
            <span className="pl-2">Back</span>
        </button>
    </NavLink>
    )
}
