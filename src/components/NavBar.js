import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

const NavBar = () => {

    return (
        <nav>
            <li>
                <Link to="/project1">Project 1</Link>
            </li>
            <li>
                <Link to="/project2">Project 2</Link>
            </li>
            <li>
                <Link to="/project3">Project 3</Link>
            </li>
        </nav>
    )
};

export default NavBar;