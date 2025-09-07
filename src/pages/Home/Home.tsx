import './Home.css';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import HeroPosts from './components/HeroPosts/HeroPosts';

function Home() {

    return (
        <main className="blog-container container-fluid p-0">
            <Header />
            <HeroPosts />
            {/* <Posts showHeader={false} postsPerPage={9} showPagination={false} /> */}
            <Footer />
        </main>
    );
}

export default Home;
