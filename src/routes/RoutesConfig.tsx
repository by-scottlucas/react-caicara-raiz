import { Route, Routes } from 'react-router-dom';

import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';
import PostDetail from '../pages/PostDetail/PostDetail';
import MessageSent from '../pages/Contact/components/MessageSent/MessageSent';

function RoutesConfig() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/success" element={<MessageSent />} />
        </Routes>
    );
}

export default RoutesConfig;