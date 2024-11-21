import './Home.css';

import Header from '../Header/Header';
import Posts from '../Posts/Posts';

function Home() {

    return (
        <main className="blog-container container-fluid p-0">
            <Header />
            <Posts />

            {/* <footer className="blog-footer">
                <p>© 2024 My Professional Blog. All Rights Reserved.</p>
            </footer> */}
        </main>
    );
}

export default Home;
