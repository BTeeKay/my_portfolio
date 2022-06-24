import React from 'react';
import './MainContainer.css'
import Header from '../components/Header';
import VideoBox from '../components/VideoBox';
import NavBar from '../components/NavBar';

const MainContainer = () => {

    return (
        <div className="Mainpage">
            <NavBar />
            <Header />
            <VideoBox />
        </div>
    )
}

export default MainContainer