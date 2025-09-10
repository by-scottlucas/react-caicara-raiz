import './PostDetail.css';

import { Calendar, Tag, User } from 'lucide-react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';
import Seo from '../../components/Seo/Seo';
import { Post } from '../../models/Post';
import { getPostDetail } from '../../services/wordpressService';
import { extractPostContent, formatPostDate, getPostCategory, getPostImage } from '../../utils/postUtils';
import ShareButton from './components/ShareButton/ShareButton';

export default function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchPost = useCallback(async () => {
        try {
            const data = await getPostDetail(id!);
            setPost(data);
        } catch (error) {
            console.error("Erro ao carregar o post:", error);
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        fetchPost();
    }, [fetchPost]);

    const imageUrl = useMemo(() => (post ? getPostImage(post) : null), [post]);

    if (loading) {
        return (
            <main className="post-detail">
                <Header />
                <div className="post-detail__loading">
                    <Loading />
                </div>
            </main>
        );
    }

    if (!post) {
        return (
            <main className="post-detail">
                <Header />
                <p className="post-detail__error">Post não encontrado.</p>
            </main>
        );
    }

    const { description, sections } = extractPostContent(post.content);


    return (
        <main className="post-detail">
            <Seo
                title={post.title}
                description={post.excerpt}
                image={imageUrl!}
                url={`${window.location.origin}/posts/${id}`}
                type="article"
            />

            <Header />

            <article className="post-detail__content">
                <header className="post-detail__header">
                    <span className="post-detail__badge" aria-label="Categoria">
                        <Tag size={14} aria-hidden="true" />
                        {getPostCategory(post)}
                    </span>

                    <h1 className="post-detail__title">{post.title}</h1>

                    <div className="flex gap-3" aria-label="Informações do post">
                        <span className="post-detail__author">
                            <User size={18} aria-hidden="true" />
                            <span>{post.author?.name ?? "Autor desconhecido"}</span>
                        </span>
                        <span className="text-sm text-gray-500" aria-hidden="true">
                            |
                        </span>
                        <time className="post-detail__date flex items-center gap-1.5" dateTime={post.date}>
                            <Calendar size={18} aria-hidden="true" />
                            {formatPostDate(post.date)}
                        </time>
                    </div>
                </header>

                {description && <h2 className="post-detail__subtitle mb-6">{description}</h2>}

                {imageUrl && (
                    <figure className="post-detail__banner">
                        <img
                            src={imageUrl}
                            className="post-detail__image"
                            alt={`Imagem do post: ${post.title}`}
                            loading="lazy"
                            width={100}
                            height={100}
                        />
                    </figure>
                )}

                <section className="post-detail__body">
                    {sections.map((section, index) => (
                        <div key={index} className="post-detail__section">
                            <h3 className="post-detail__section-title">{section.title}</h3>
                            <div className="post-detail__section-content">{section.content}</div>
                            {section.image && (
                                <figure className="post-detail__section-image mt-4">
                                    {section.image}
                                </figure>
                            )}
                        </div>
                    ))}
                </section>
            </article>

            <Footer />
            <ShareButton post={post} postId={id as string} />
        </main>
    );
}
