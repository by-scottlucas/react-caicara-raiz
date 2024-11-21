
import "./PostDetail.css";
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState<any>(null);

    const fetchPost = async () => {
        try {
            const response = await fetch(`http://localhost/wordpress/wp-json/wp/v2/posts/${id}`);
            const data = await response.json();
            setPost(data);
        } catch (error) {
            console.error('Erro ao carregar o post:', error);
        }
    };

    useEffect(() => {
        fetchPost();
    }, [id]);

    return (
        <main className="post-container">
            {post ? (
                <>
                    <header className="post-header">
                        <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    </header>
                    <article className="post-content">
                        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                    </article>
                </>
            ) : (
                <p>Loading post...</p>
            )}

            <footer className="post-footer">
                <Link to="/">Back to Home</Link>
            </footer>
        </main>
    );
}

export default PostDetail;
