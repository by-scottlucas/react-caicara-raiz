import { Route, Routes } from 'react-router-dom';

import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import PostDetail from '../components/PostDetail/PostDetail';
import Posts from '../components/Posts/Posts';
import Home from '../pages/Home/Home';
import EmailSent from '../components/EmailSent/EmailSent';

function RoutesConfig() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About showHeader={true} />} />
            <Route path="/posts" element={<Posts showHeader={true} postsPerPage={10} showPagination={true} />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/contact" element={<Contact showHeader={true} />} />
            <Route path="/mail" element={<EmailSent />} />
        </Routes>
    );
}

export default RoutesConfig;