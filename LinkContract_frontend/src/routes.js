import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import TestRedux from './components/TestRedux';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="/login" element={<Login />} />
                <Route path="/test" element={<TestRedux />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;