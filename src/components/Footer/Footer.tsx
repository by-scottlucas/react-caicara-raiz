import { Link } from 'react-router-dom';
import './Footer.css';

import { Instagram, Mail } from 'lucide-react';

export default function Footer() {
    const aboutSection = [
        { label: "Quem somos", url: "#" },
        { label: "Anuncie", url: "#" },
        { label: "Contato", url: "#" },
    ];

    const categoriesSection = [
        { label: "Turismo", url: "#" },
        { label: "Culinária", url: "#" },
        { label: "Eventos", url: "#" },
    ];

    const socialMediaSection = [
        { icon: Instagram, label: "caicararaiz", url: "#" },
        { icon: Mail, label: "contato@caicararaiz.com", url: "#" },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__grid">
                    <div>
                        <h3 className="footer__section-title">Sobre</h3>
                        <ul className="footer__link-list">
                            {aboutSection.map((link) => (
                                <li key={link.label}>
                                    <Link to={link.url} className="footer__link">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer__section-title">Categorias</h3>
                        <ul className="footer__link-list">
                            {categoriesSection.map((category) => (
                                <li key={category.label}>
                                    <Link to={category.url} className="footer__link">
                                        {category.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer__section-title">Redes e Contatos</h3>
                        <ul className="footer__link-list">
                            {socialMediaSection.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <li key={item.label}>
                                        <Link to={item.url} className="footer__link">
                                            <Icon size={20} aria-hidden="true" className="footer__link-icon" />
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__bottom-text">
                        Caiçara Raíz - Copyright ® 2024 - {currentYear} - Todos os Direitos Reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
