/* eslint-disable @typescript-eslint/no-explicit-any */
import "./Posts.css";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Posts() {

    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const response = await fetch('https://public-api.wordpress.com/rest/v1.1/sites/lucasluke307.wordpress.com/posts');
            const data = await response.json();
            setPosts(data.posts);
        } catch (error) {
            console.error('Erro ao carregar posts:', error);
        }
    };

    useEffect(() => { fetchPosts(); }, []);

    return (
        <div className="blog-content">
            <section className="posts row px-xl-5 w-100">
                <h2>Últimos Posts</h2>

                {posts.length ? (
                    posts.map((post: any) => (
                        <article key={post.id} className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                            <div className="card h-100">
                                <div>
                                    <h2 className="card-title">
                                        <Link
                                            to={`/${post.id}`}
                                            dangerouslySetInnerHTML={{ __html: post.title }}
                                        />
                                    </h2>
                                </div>

                                <div
                                    className="post-excerpt"
                                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                                />

                                <div className="post-footer">
                                    <Link to={`${post.id}`} className="read-more">
                                        Continue reading
                                    </Link>
                                </div>
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