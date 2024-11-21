import './Header.css';

import logotipo from '../../assets/logotipo.png';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg p-lg-3">
            <div className="container-fluid d-flex align-items-center">
                <a className="navbar-brand col-5 col-sm-3 col-md-2 col-lg-1" href="/">
                    <img src={logotipo} alt="PG Dicas" className="img-fluid logotipo" />
                </a>

                <button
                    type="button"
                    className="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse w-100 d-lg-flex justify-content-lg-end" id="navbarNav">
                    <ul className="navbar-nav d-lg-flex gap-lg-4 text-end">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sobre nós</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Dicas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}