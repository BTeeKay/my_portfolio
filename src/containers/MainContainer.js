import React from 'react';
import './MainContainer.css'
import VideoBox from '../components/VideoBox';
import HomeBox from '../components/HomeBox';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const MainContainer = () => {

    return (
        <Router>
            <NavBar />
            <Header />
            <Routes>
                <Route path="/" element={<HomeBox />} />
                <Route path="/my_portfolio" element={<HomeBox />} />
                <Route path="/project1" element={<VideoBox vid="https://www.youtube.com/embed/ikI-wtaUakM"/>} />
                <Route path="/project2" element={<VideoBox vid="https://www.youtube.com/embed/fI677jYfKz0"/>} />
                <Route path="/project3" element={<VideoBox vid="https://www.youtube.com/embed/ikI-wtaUakM"/>} />
                <Route path="/project4" element={<VideoBox vid="https://www.youtube.com/embed/fI677jYfKz0"/>} />
                <Route path="/project5" element={<VideoBox vid="https://www.youtube.com/embed/ikI-wtaUakM"/>} />
            </Routes>
        </Router>
    )
}

export default MainContainer