import { Skeleton } from '@mui/material'

export const LoadingProductCard = () => {
    return (
        <div className="card p-4">
        <div className="card-image">
            <Skeleton variant="rectangular" width="100%" height={240} />
        </div>

        <div className="card-content">
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        </div>

        <div className="buttons">
            <button
                className="button is-fullwidth is-mobile is-info is-loading"
                style={{ width: 300}}
            ></button>
        </div>
    </div>
    )
}
