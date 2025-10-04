import './Home.css';

import { useEffect, useRef, useState } from 'react';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { Post } from '../../models/Post';
import { fetchPosts } from '../../services/wordpressService';
import { getPostCategory, getPostImage } from '../../utils/postUtils';
import AboutSection from './components/AboutSection/AboutSection';
import HeroPost from './components/HeroPost/HeroPost';
import { PostSection } from './components/PostSection/PostSection';
import { useWindowWidth } from './hooks/useWindowWidth';
import Seo from '../../components/Seo/Seo';

export default function Home() {
  const width = useWindowWidth();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const recentPostsRef = useRef<HTMLDivElement>(null);
  const tourismPostsRef = useRef<HTMLDivElement>(null);
  const culinaryPostsRef = useRef<HTMLDivElement>(null);

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

  if (loading) return null;
  if (posts.length === 0) return <p>Nenhum post encontrado.</p>;

  const [primaryPost, ...otherPosts] = posts;
  const secondaryPosts = otherPosts.slice(0, 2);

  const tourismPosts = posts.filter(post => getPostCategory(post) === 'Turismo');
  const culinaryPosts = posts.filter(post => getPostCategory(post) === 'Culinária');

  const sections = [
    { title: 'Publicações Recentes', posts, ref: recentPostsRef, id: 'recent-posts' },
    { title: 'Dicas de Passeio', posts: tourismPosts, ref: tourismPostsRef, id: 'tourism-section' },
    { title: 'Dicas de Culinária', posts: culinaryPosts, ref: culinaryPostsRef, id: 'culinary-section' },
  ];

  return (
    <main className="home-page">
      <Seo
        title={"Home | Caiçara Raíz"}
        description={"Caiçara Raíz: Dicas de turismo, culinária e cultura caiçara. Explore nossas publicações e conteúdos exclusivos."}
        url={`${window.location.origin}`}
        type="website"
      />

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
          {secondaryPosts.map(post => (
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

      {sections.map(({ id, title, posts, ref }) => (
        <PostSection
          key={title}
          ref={ref}
          title={title}
          posts={posts}
          width={width}
          id={id}
        />
      ))}

      <AboutSection />

      <Footer />
    </main>
  );
}
