import React from "react";
import { Link } from 'react-router-dom';
import logo from '../images/traptalk-transparent.png';



function Navbar() {
    return (
        <div class="navbar bg-base-100">
            <div class="flex-1">
                <button className="btn btn-ghost" onClick={<Link to='/messages'></Link>}><img alt='logo' className='h-16' src={logo}></img></button>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal p-0">
                    <li><Link to="/search">Search Friends</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <button className="btn btn-ghost"><li>Logout</li></button>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;



