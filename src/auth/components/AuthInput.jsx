
export const AuthInput = ({ children, title, type, placeholder, name, value, change }) => {
    return (
        <div className="field mb-5">
            <label className="label">{ title }</label>

            <div className="control">
                <input
                    className="input is-size-5"
                    type={ type }
                    placeholder={ placeholder }
                    name={ name }
                    value={ value }
                    onChange={ change }
                />
                { children }
            </div>
        </div>
    )
}
