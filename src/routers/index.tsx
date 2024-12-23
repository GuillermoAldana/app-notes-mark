import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/welcome'));
const Notes = lazy(() => import('../pages/notes'));

const RoutesConfiguration = () => {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/notes" element={<Notes />} />
            </Routes>
        </Suspense>
    );
}

export default RoutesConfiguration;