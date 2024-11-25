import './Home.css';

import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import About from '../../components/About/About';

function Home() {

    return (
        <main className="blog-container container-fluid p-0">
            <Header />
            <Banner />
            <About showHeader={false} />
            <Posts showHeader={false} postsPerPage={3} showPagination={false} />
            <Footer />
        </main>
    );
}

export default Home;
