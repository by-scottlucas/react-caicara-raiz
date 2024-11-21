import './Home.css';

import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Banner from '../../components/Banner/Banner';

function Home() {

    return (

        <section className="blog-container container-fluid p-0">
            <Header />
            <Banner />
            <Posts />

            {/* <footer className="blog-footer">
                <p>© 2024 My Professional Blog. All Rights Reserved.</p>
            </footer> */}
        </section>
    );
}

export default Home;
