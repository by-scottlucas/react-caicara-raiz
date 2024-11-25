import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import PostDetail from '../components/PostDetail/PostDetail';
import Posts from '../components/Posts/Posts';
import About from '../components/About/About';

function RoutesConfig() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About showHeader={true} />} />
            <Route path="/posts" element={<Posts showHeader={true} showPagination={true} />} />
            <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
    );
}

export default RoutesConfig;