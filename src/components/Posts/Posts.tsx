/* eslint-disable @typescript-eslint/no-explicit-any */
import "./Posts.css";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Posts() {

    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await fetch('https://public-api.wordpress.com/rest/v1.1/sites/praiagrandedicas.wordpress.com/posts');
            const data = await response.json();
            setPosts(data.posts);
        } catch (error) {
            console.error('Erro ao carregar posts:', error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const formatDate = (date: string) => {
        return new Intl.DateTimeFormat('pt-BR', {
            month: 'long',
            day: '2-digit',
            year: 'numeric',
        }).format(new Date(date));
    };

    return (
        <div className="blog-content container-fluid mt-5">
            <section className="posts row px-xl-5">
                <h2 className="posts-title text-center text-lg-start mb-lg-4">
                    Publicações Recentes
                </h2>

                {posts.length ? (
                    posts.map((post: any) => (
                        <article key={post.ID} className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                            <div className="card card-post h-100 px-3 px-lg-0">
                                <div className="mb-3">
                                    <h2 className="card-title">
                                        <Link
                                            className="card-title"
                                            to={`/post/${post.ID}`}
                                            dangerouslySetInnerHTML={{ __html: post.title }} />
                                    </h2>

                                    <span className="card-date">{ formatDate(post.date) }</span>
                                </div>

                                <div
                                    className="card-text"
                                    dangerouslySetInnerHTML={{ __html: post.excerpt }} />

                                <Link
                                    to={`/post/${post.ID}`}
                                    className="col-12 btn button-style view-button mt-2 read-more"
                                >
                                    Continue lendo
                                </Link>
                            </div>
                        </article>
                    ))
                ) : (
                    <p>Loading posts...</p>
                )}
            </section>
        </div>
    )
}
