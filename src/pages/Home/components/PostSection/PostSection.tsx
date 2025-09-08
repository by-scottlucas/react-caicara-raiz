import './PostSection.css';

import { forwardRef, useEffect, useRef, useState } from 'react';

import CardPost from '../../../../components/CardPost/CardPost';
import { Post } from '../../../../models/Post';
import { useCarousel } from '../../hooks/useCarousel';

interface PostSectionProps {
    title: string;
    posts: Post[];
    width: number;
}

export const PostSection = forwardRef<HTMLDivElement, PostSectionProps>(({ title, posts, width }) => {
    const { scrollToIndex } = useCarousel();
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const children = Array.from(container.children) as HTMLElement[];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = children.indexOf(entry.target as HTMLElement);
                        setActiveIndex(index);
                    }
                });
            },
            {
                root: container,
                threshold: 0.5,
            }
        );

        children.forEach(child => observer.observe(child));

        return () => {
            children.forEach(child => observer.unobserve(child));
        };
    }, [posts]);

    if (posts.length === 0) return null;

    const getButtonClass = (index: number) =>
        `post-section__indicator ${activeIndex === index ? 'post-section__indicator--active' : ''}`;

    return (
        <div className="post-section">
            <h2 className="post-section__title">{title}</h2>

            <div ref={containerRef} className="post-section__posts">
                {posts.map(post => (
                    <CardPost key={post.ID} post={post} />
                ))}
            </div>

            {(posts.length > 1 && (posts.length > 3 || width < 768)) && (
                <div className="post-section__indicators">
                    {posts.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onMouseDown={e => e.preventDefault()}
                            onClick={() => scrollToIndex(containerRef, index)}
                            className={getButtonClass(index)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
});