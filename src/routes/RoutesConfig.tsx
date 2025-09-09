import { Route, Routes } from 'react-router-dom';

import Contact from '../pages/Contact/Contact';
import Home from '../pages/Home/Home';
import PostDetail from '../pages/PostDetail/PostDetail';

function RoutesConfig() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default RoutesConfig;