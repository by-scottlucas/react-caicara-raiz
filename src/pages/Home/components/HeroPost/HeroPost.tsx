import './HeroPost.css';

import { Link } from 'react-router-dom';

interface HeroPostProps {
    image: string;
    category: string;
    title: string;
    description?: string;
    url: string;
    variant?: "primary" | "secondary";
}

export default function HeroPost({
    image,
    category,
    title,
    description,
    url,
    variant = "secondary",
}: HeroPostProps) {
    const modifier = variant === "primary"
        ? "hero-post--primary"
        : "hero-post--secondary";

    return (
        <Link to={url} className={`hero-post ${modifier}`}>
            <img src={image} alt={title} className="hero-post__image" loading='lazy' />
            <div className="hero-post__overlay"></div>
            <div className="hero-post__content">
                <div className="hero-post__category">{category}</div>
                <h2 className="hero-post__title">{title}</h2>
                {description && (
                    <p
                        className="hero-post__description"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                )}
            </div>
        </Link>
    );
}