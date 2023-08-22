import { NavLink } from 'react-router-dom';

export const CatButtons = ({ categories, onClick }) => {

    return (
        <>
        {
            categories.map(cat => (
                <NavLink
                    key={ cat }
                    className="button is-info is-outlined"
                    onClick={ onClick }
                    to={ ( cat === 'all') ? '/' : `/category/${ cat }`}
                >{ cat.toUpperCase() }</NavLink>
            ))
        }
        </>
    )
}
