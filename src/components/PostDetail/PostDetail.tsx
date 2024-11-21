/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import "./PostDetail.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState<any | null>(null);

    const fetchPost = async () => {
        try {
            const response = await fetch(
                `https://public-api.wordpress.com/rest/v1.1/sites/praiagrandedicas.wordpress.com/posts/${id}`
            );
            const data = await response.json();
            setPost(data);
            console.log(data);
        } catch (error) {
            console.error("Erro ao carregar o post:", error);
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
                        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                    </header>
                    
                    <article className="post-content">
                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </article>
                </>
            ) : (
                <p>Loading post...</p>
            )}
        </main>
    );
}

export default PostDetail;
