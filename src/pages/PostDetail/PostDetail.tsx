import './PostDetail.css';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';
import { Post } from '../../models/Post';

function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState<Post | null>(null);

    const fetchPost = async () => {
        try {
            const response = await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/praiagrandedicas.wordpress.com/posts/${id}`);
            const data = await response.json();
            setPost(data);
        } catch (error) {
            console.error("Erro ao carregar o post:", error);
        }
    };

    useEffect(() => {
        fetchPost();
    }, [id]);

    const formatDate = (date: string) => {
        return new Intl.DateTimeFormat('pt-BR', {
            month: 'long',
            day: '2-digit',
            year: 'numeric',
        }).format(new Date(date));
    };

    const sharePost = (platform: string) => {
        const currentURL = encodeURIComponent(`${window.location.origin}/post/${id}`);
        const title = encodeURIComponent(post?.title || "Confira este conteúdo!");
        let shareURL = '';

        switch (platform) {
            case 'facebook':
                shareURL = `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`;
                break;
            case 'twitter':
                shareURL = `https://twitter.com/intent/tweet?url=${currentURL}&text=${title}`;
                break;
            case 'linkedin':
                shareURL = `https://www.linkedin.com/shareArticle?mini=true&url=${currentURL}&title=${title}`;
                break;
            case 'whatsapp':
                shareURL = `https://api.whatsapp.com/send?text=${title}%20${currentURL}`;
                break;
            default:
                break;
        }

        if (shareURL) {
            window.open(shareURL, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <main className="post-container container-fluid">
            <Header />

            {post ? (
                <div className="row d-flex">
                    <section className="d-flex mt-5">
                        <div className="col-12 col-md-7 col-lg-8 m-auto ms-md-5">
                            <header className="post-header mb-2">
                                <h1 className="post-title">{post.title}</h1>
                                <div className="row">
                                    <span className="post-date card-date">
                                        Publicado em: {formatDate(post.date)}
                                    </span>
                                </div>
                            </header>

                            <article className="post-content">
                                <div className="d-flex gap-4 m-auto">
                                    {post.attachments && Object.values(post.attachments)[0]?.URL ? (
                                        <img
                                            alt={post.title}
                                            className="img-fluid mb-3"
                                            src={Object.values(post.attachments)[0].URL}
                                        />
                                    ) : (
                                        <p>Sem imagem disponível</p>
                                    )}

                                    <aside className="col-md-7 col-lg-5 d-none d-md-block">
                                        <div className="card-share rounded-1 py-4 px-3">
                                            <h2 className="mb-3 fs-4">Gostou? Compartilhe</h2>
                                            <div className="row mb-2">
                                                <button
                                                    className="btn col-6 btn-facebook"
                                                    onClick={() => sharePost('facebook')}
                                                >
                                                    <i className="bi bi-facebook"></i>
                                                    Facebook
                                                </button>
                                                <button
                                                    className="btn col-6 btn-twitter"
                                                    onClick={() => sharePost('twitter')}
                                                >
                                                    <i className="bi bi-twitter"></i>
                                                    Twitter
                                                </button>
                                            </div>
                                            <div className="row d-flex">
                                                <button
                                                    className="btn col-6 btn-linkedin"
                                                    onClick={() => sharePost('linkedin')}
                                                >
                                                    <i className="bi bi-linkedin"></i>
                                                    LinkedIn
                                                </button>
                                                <button
                                                    className="btn col-6 btn-whatsapp"
                                                    onClick={() => sharePost('whatsapp')}
                                                >
                                                    <i className="bi bi-whatsapp"></i>
                                                    WhatsApp
                                                </button>
                                            </div>
                                        </div>
                                    </aside>
                                </div>

                                <div className="post-body">
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: post.content.replace(/<figure[^>]*>.*?<\/figure>/, ''),
                                        }}
                                    ></span>
                                </div>
                            </article>
                        </div>
                    </section>
                </div>
            ) : (
                <div className="loading-box">
                    <Loading />
                </div>
            )}
        </main>
    );
}

export default PostDetail;
