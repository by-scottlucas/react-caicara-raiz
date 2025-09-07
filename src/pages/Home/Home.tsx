import './Home.css';

import { useEffect, useState } from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { Post } from '../../models/Post';
import { fetchPosts } from '../../services/wordpressService';
import { getPostCategory, getPostImage } from '../../utils/postUtils';
import HeroPost from './components/HeroPost/HeroPost';

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) return <p>Carregando posts...</p>;
  if (posts.length === 0) return <p>Nenhum post encontrado.</p>;

  const [primaryPost, ...otherPosts] = posts;
  const secondaryPosts = otherPosts.slice(0, 2);

  return (
    <main className="home-page">
      <Header />

      <div className="hero-posts">
        <HeroPost
          image={getPostImage(primaryPost)}
          category={getPostCategory(primaryPost)}
          title={primaryPost.title}
          description={primaryPost.excerpt}
          url={`/posts/${primaryPost.ID}`}
          variant="primary"
        />

        <div className="hero-posts__secondary-posts">
          {secondaryPosts.map((post) => (
            <HeroPost
              key={post.ID}
              image={getPostImage(post)}
              category={getPostCategory(post)}
              title={post.title}
              url={`/posts/${post.ID}`}
            />
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}