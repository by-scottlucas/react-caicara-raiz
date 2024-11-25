import "./Posts.css";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from "../Pagination/Pagination";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";

export default function Posts({ showHeader, showPagination, postsPerPage }: any) {
    const [posts, setPosts] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(1);

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

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const totalPages = Math.ceil(posts.length / postsPerPage);

    return (
        <>
            {showHeader && <Header />}

            {currentPosts.length ? (
                <div className="blog-content container-fluid mt-5">
                    <section className="posts row px-xl-5">
                        <h2 className="posts-title text-center text-lg-start mb-lg-2">
                            Publicações Recentes
                        </h2>

                        {currentPosts.map((post: any) => (
                            <article key={post.ID} className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
                                <div className="card card-post h-100 px-2 px-lg-0">
                                    <div className="mb-3">
                                        <img
                                            src={Object.values(post.attachments)[0]?.URL}
                                            alt={post.title}
                                            className="img-fluid mb-3"
                                        />

                                        <h2 className="card-title">
                                            <Link
                                                className="card-title"
                                                to={`/posts/${post.ID}`}
                                                dangerouslySetInnerHTML={{ __html: post.title }} />
                                        </h2>

                                        <span className="card-date">{formatDate(post.date)}</span>
                                    </div>

                                    <div
                                        className="card-text"
                                        dangerouslySetInnerHTML={{ __html: post.excerpt }} />

                                    <Link
                                        to={`/posts/${post.ID}`}
                                        className="col-12 btn button-style view-button mt-2 read-more">
                                        Continue lendo
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </section>

                    {showPagination && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            setCurrentPage={setCurrentPage}
                        />
                    )}
                </div>
            ) : (
                <div className="loading-box">
                    <Loading />
                </div>
            )}

            {showHeader && <Footer />}
        </>
    );
}
