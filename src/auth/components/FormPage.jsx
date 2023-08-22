
export const FormPage = ({ children, name }) => {
    return (
    <section className="hero is-fullheight has-background-link">
        <div className="hero-body">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-half">
                        <div className="box p-6">
                            <h1 className="title has-text-centered">{ name }</h1>

                            { children }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
