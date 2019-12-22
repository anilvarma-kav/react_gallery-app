/**
 * Author: Anil Varma Keerthipati
 * Project: React-Gallery-App
 */
import React from 'react';
import {NavLink} from 'react-router-dom';
const Nav  = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/fog'>Fog</NavLink></li>
                <li><NavLink to='/fire'>Fire</NavLink></li>
                <li><NavLink to='/rain'>Rain</NavLink></li>
            </ul>
        </nav>
    )
};
export default Nav;