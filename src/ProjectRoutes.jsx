import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';

const ProjectRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<LandingPage />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default ProjectRoutes;