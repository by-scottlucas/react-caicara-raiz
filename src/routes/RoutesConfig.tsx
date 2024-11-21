import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import PostDetail from '../components/PostDetail/PostDetail';

function RoutesConfig() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
    );
}

export default RoutesConfig;