import "../header.css"

export const Header = ({ headerColor, header2Color }) => {
    return (
        <>
            <div className="Header ">
                <nav className={`navbar navbar-expand-lg  ${headerColor}`} data-bs-theme="dark">
                    <div className="container ">
                        <a className="navbar-brand" href="#">
                            <img src="./logo-ecyda.gif" alt="Bootstrap" width="70" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item navbar-light ">
                                    <a className="nav-link" href="#">Acerca de</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Comic interactivo</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Tienda</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Quienes somos</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="d-flex justify-content-end">
                    <img className="img2 p-2 " width="60" src="./image.png" alt="" />
                </div>
                <div className={`text-white text-center ${header2Color}`}>Lo normal fue lo primero en morir</div>
            </div>
        </>
    )
}
