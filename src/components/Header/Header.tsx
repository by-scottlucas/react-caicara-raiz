import './Header.css';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import logotipo from '../../assets/logotipo.png';

interface NavLink {
    label: string;
    url: string;
}

export default function Header() {
    const navLinks: NavLink[] = [
        { label: "Home", url: "/" },
        { label: "Cultura", url: "/" },
        { label: "Culinária", url: "/" },
        { label: "Eventos", url: "/" },
        { label: "Quem Somos", url: "/" },
        { label: "Contato", url: "/" },
    ];

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const showMenuIcon = () => menuIsOpen ? <X size={26} /> : <Menu size={26} />;

    return (
        <header className="header">
            <div className="header__container">
                <Link className="header__brand" to="/">
                    <img
                        src={logotipo}
                        alt="Caiçara Raíz"
                        className="header__brand-image"
                    />
                </Link>

                <button
                    type="button"
                    className="header__menu-toggle"
                    onClick={() => setMenuIsOpen(!menuIsOpen)}
                >
                    {showMenuIcon()}
                </button>

                <ul className={`header__nav ${menuIsOpen ? "flex" : "hidden"} lg:flex`}>
                    {navLinks.map((item: NavLink) => (
                        <li key={item.label} className="header__nav-item">
                            <Link to={item.url} className="header__nav-link">
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}