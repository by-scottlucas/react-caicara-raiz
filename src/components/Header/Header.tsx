import './Header.css';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import logotipo from '../../assets/logotipo.png';

interface NavLink {
    label: string;
    url: string;
}

export default function Header() {
    const navLinks: NavLink[] = [
        { label: "Home", url: "/" },
        { label: "Publicações", url: "/#recent-posts" },
        { label: "Turismo", url: "/#tourism-section" },
        { label: "Culinária", url: "/#culinary-section" },
        { label: "Quem Somos", url: "/#about-section" },
        { label: "Contato", url: "/contact" },
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
                        loading='lazy'
                    />
                </Link>

                <button
                    type="button"
                    className="header__menu-toggle"
                    onClick={() => setMenuIsOpen(!menuIsOpen)}
                    aria-expanded={menuIsOpen}
                    aria-controls="primary-navigation"
                    aria-label='Menu Button'
                >
                    {showMenuIcon()}
                </button>

                <ul className={`header__nav ${menuIsOpen ? "flex" : "hidden"} lg:flex`}>
                    {navLinks.map((item: NavLink) => (
                        <li key={item.label} className="header__nav-item">
                            {item.url.startsWith("/#") ? (
                                <HashLink smooth to={item.url} className="header__nav-link" onClick={() => setMenuIsOpen(false)}>
                                    {item.label}
                                </HashLink>
                            ) : (
                                <Link to={item.url} className="header__nav-link" onClick={() => setMenuIsOpen(false)}>
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}
