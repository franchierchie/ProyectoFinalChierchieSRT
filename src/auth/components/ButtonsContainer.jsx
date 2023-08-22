
export const ButtonsContainer = ({ children }) => {
    return (
    <div className="field">
        <div className="control has-text-centered">
            <div className="buttons">
                { children }
            </div>
        </div>
    </div>
    )
}
