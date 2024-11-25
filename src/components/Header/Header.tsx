import './Header.css';

import logotipo from '../../assets/logotipo.png';
import { Link } from 'react-router-dom';

export default function Header() {

    const navLinks = [
        { label: "Home", url: "/" },
        { label: "Sobre nós", url: "/about" },
        { label: "Publicações", url: "/posts" },
        { label: "Contato", url: "/contact" },
    ]

    return (
        <nav className="navbar navbar-expand-lg p-lg-3">
            <div className="container-fluid d-flex align-items-center">
                <Link className="navbar-brand col-5 col-sm-3 col-md-2 col-lg-1" to="/">
                    <img src={logotipo} alt="Caiçara Raíz" className="img-fluid logotipo" />
                </Link>

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
                        {navLinks.map((item: any) => (
                            <li className="nav-item">
                                <Link className="nav-link" to={item.url}>{item.label}</Link>
                            </li>)
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}