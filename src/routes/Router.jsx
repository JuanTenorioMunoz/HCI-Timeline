import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UNIVAC from '../pages/UNIVAC/UNIVAC';
import Three from '../pages/Three/Three';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<UNIVAC/>}/>
                <Route path="/three" element={<Three/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;