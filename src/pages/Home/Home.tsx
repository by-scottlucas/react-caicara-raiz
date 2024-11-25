import './Home.css';

import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';

function Home() {

    return (
        <main className="blog-container container-fluid p-0">
            <Header />
            <Banner />
            <About showHeader={false} />
            <Posts showHeader={false} postsPerPage={3} showPagination={false} />
            <Contact showHeader={false} />
            <Footer />
        </main>
    );
}

export default Home;
