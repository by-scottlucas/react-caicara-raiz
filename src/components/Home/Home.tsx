import './Home.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

function Home() {
    const [posts, setPosts] = useState<any[]>([]);

    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost/wordpress/wp-json/wp/v2/posts');
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Erro ao carregar posts:', error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <main className="blog-container container-fluid p-0">
            <Header />

            {/* <div className="blog-content">
                <section className="posts">
                    <h2>Posts</h2>
                    {posts.length ? (
                        posts.map((post: any) => (
                            <article key={post.id} className="post">
                                <header>
                                    <h2 className="post-title">
                                        <Link to={`/post/${post.id}`} dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                                    </h2>
                                </header>
                                <div className="post-excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                                <footer className="post-footer">
                                    <Link to={`/post/${post.id}`} className="read-more">Continue reading</Link>
                                </footer>
                            </article>
                        ))
                    ) : (
                        <p>Loading posts...</p>
                    )}
                </section>
            </div> */}

            {/* <footer className="blog-footer">
                <p>© 2024 My Professional Blog. All Rights Reserved.</p>
            </footer> */}
        </main>
    );
}

export default Home;
