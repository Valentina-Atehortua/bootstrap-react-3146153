export const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg py-0 d-flex">
                <div className="container-fluid p-3 mb-2 bg-success text-white ">
                    <a className="navbar-brand" href="#"><img className="img1" width="60" src="./logo-ecyda.gif" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-grow-0" id="navbarNav p-3 mb-2 bg-success text-white ">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
