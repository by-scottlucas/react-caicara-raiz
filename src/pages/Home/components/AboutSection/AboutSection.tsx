import './AboutSection.css';

import { CreditCard, Home, MapPin, Sparkles } from 'lucide-react';

import aboutImage from '/src/assets/about.png';

export default function AboutSection() {
    const contentSection = [
        {
            title: "Quem Somos",
            firstParagraph:
                "Somos um blog dedicado a curiosidades e dicas imperdíveis sobre Praia Grande e toda a região da Baixada Santista. Aqui, você encontrará:",
            list: [
                {
                    icon: Home,
                    iconColor: "text-purple-700",
                    label: "Sugestões de locais para se hospedar;"
                },
                {
                    icon: MapPin,
                    iconColor: "text-red-700",
                    label: "Dicas dos melhores restaurantes da região;"
                },
                {
                    icon: CreditCard,
                    iconColor: "text-yellow-700",
                    label: "Eventos e atrações locais;"
                },
                {
                    icon: Sparkles,
                    iconColor: "text-blue-700",
                    label: "E muito mais!"
                },
            ],
            lastParagraph:
                "Explore com a gente e aproveite tudo o que a Baixada tem a oferecer!",
        },
    ];

    const section = contentSection[0];

    const iconClass = (item: any) => (
        `about-content__list-icon ${item.iconColor}`
    )

    return (
        <section className="about">
            <img
                src={aboutImage}
                alt="Vista da Baixada Santista"
                className="about__image"
            />

            <div className="about-content">
                <h2 className="about-content__title">{section.title}</h2>
                <p className="about-content__paragraph">{section.firstParagraph}</p>

                <ul className="about-content__list">
                    {section.list.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <li key={index} className="about-content__list-item">
                                <IconComponent className={iconClass(item)} />
                                {item.label}
                            </li>
                        );
                    })}
                </ul>

                <p className="about-content__paragraph">{section.lastParagraph}</p>
            </div>
        </section>
    );
}