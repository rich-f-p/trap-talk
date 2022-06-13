import React from "react";
import { Link } from 'react-router-dom';
import logo from '../images/traptalk-transparent.png';
import Auth from '../utils/auth';



function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <button className="btn btn-ghost" onClick={<Link to='/messages'></Link>}><img alt='logo' className='h-16' src={logo}></img></button>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/search" as={Link}>Search Friends</Link></li>
                    <li><Link to="/profile" as={Link}>Profile</Link></li>
                    <li><Link to="/messages" as={Link}>Your Message</Link></li>
                    <button className="btn btn-ghost" onClick={Auth.logout} ><li>Logout</li></button>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;



