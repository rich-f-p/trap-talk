import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../images/traptalk-transparent.png';
import { getMe } from "../utils/API";
import Auth from '../utils/auth';

function FriendSearch() {
    const [userData,setUserData] = useState({});
    const userDataLength = Object.keys(userData).length;


    return (
        <div class="navbar bg-base-100">
            <div class="flex-1">
                <button className="btn btn-ghost" onClick={<Link to='/messages'></Link>}><img alt='logo' className='h-16' src={logo}></img></button>
            </div>
            <div>
                <button className="btn btn-ghost">Search for Friends</button>
            </div>
            <div class="flex-none gap-2">
                <div class="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-96" />
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal p-0">
                        <li><Link to="/profile">Profile</Link></li>
                        <button className="btn btn-ghost" onClick={Auth.logout}><li>Logout</li></button>
                    </ul>
                </div>
            </div>
            <div>
                <tbody>
                    { userData.username!=undefined && userData.username.map((data,index) => {
                        return (
                            <tr>
                                <th>hi</th></tr>
                        );
                    })}
                </tbody>
            </div>
        </div>
    )
};

export default FriendSearch;