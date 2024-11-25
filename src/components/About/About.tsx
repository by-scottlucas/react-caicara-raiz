import './About.css';
import aboutImage from '../../assets/about.png';
import Header from '../Header/Header';

export default function About({ showHeader }: any) {
    return (
        <>
            {showHeader === true ? (
                <Header />
            ): ''}

            <section className="about-container container-fluid mt-5">
                <div className="row content-row w-100 m-auto">
                    <div className="col-11 col-md-4 order-2">
                        <img src={aboutImage} alt="Vista da Baixada Santista" className="img-fluid about-image" />
                    </div>

                    <div className="col-11 col-md-6 order-1 text-md-start">
                        <h2 className="mb-3 fw-bold">Quem Somos</h2>

                        <p className="lead about-content">
                            Somos um blog dedicado a curiosidades e dicas imperdíveis sobre Praia Grande
                            e toda a região da Baixada Santista. Aqui, você encontrará:
                        </p>

                        <ul className="list-unstyled ms-md-3">
                            <li className="mb-2">
                                <i className="bi bi-house-door-fill text-success me-2"></i>
                                Sugestões de locais para se hospedar;
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                                Dicas dos melhores restaurantes da região;
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-calendar-event-fill text-warning me-2"></i>
                                Eventos e atrações locais;
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-stars text-info me-2"></i>
                                E muito mais!
                            </li>
                        </ul>

                        <p className="mt-4 text-secondary about-content bottom-text">
                            Explore com a gente e aproveite tudo o que a Baixada tem a oferecer!
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
