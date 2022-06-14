import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../images/traptalk-transparent.png';
import { getMe, addFriend, searchUser } from "../utils/API";
import Auth from '../utils/auth';

function FriendSearch() {
    const [userData,setUserData] = useState({});
    const userDataLength = Object.keys(userData).length;
    const [search,setSearch] = useState({});
    const [display,setDisplay] = useState({});
    let holdData = {};
    const holdlength = Object.keys(holdData).length;

    useEffect(() => {
        const realUserData = async () =>{
            try{
                const token = Auth.getToken();

                if (!token) {
                    Auth.logout();
                return false;
                }
                const response = await getMe(token);
                if(!response.ok){
                    throw new Error('Access Denied');
                }
                const user = await response.json();
                setUserData(user.username);
            }catch(err){
                console.log(err)
            }
           };
           realUserData();
    }, [userDataLength, holdlength]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSearch({ ...search, [name]: value});
    };

    const handleAdd = async (body, e) => {
        e.preventDefault();
        const me = userData;

        const token = Auth.getToken(); 
        if(!token){
            return false
        }
        try{
            const response = await addFriend(me,body,token);
            if(!response.ok){
                throw new Error('Error with sending: 1');
            }
        }catch(err){
            console.log(err);
        }
        try{
            const response = await addFriend(display.username,{username:me, request: true },token);
            if(!response.ok){
                throw new Error('Error with sending: 1');
            }
        }catch(err){
            console.log(err);
        }
    }

    const searchBtn = async (user,e) =>{
        e.preventDefault();

        const token = Auth.getToken(); 
        if(!token){
            return false
        }
        try{
            const response = await searchUser(user, token)
            if(!response.ok){
                alert('no user with that name')
                throw new Error('Error with adding');
            }
            const list = await response.json();
            holdData = {};
            holdData = await list;
            setDisplay(list);
        }
        catch(err){
            console.log(err);
        }
        setSearch('')
    }



    return (
        <div>
        <div className="navbar bg-base-100 mb-5">
            <div className="flex-1">
                <button className="btn btn-ghost"><Link to='/messages'><img alt='logo' className='h-16' src={logo}></img></Link></button>
            </div>
            
            <div className="flex-none gap-2">
               
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to="/profile">Profile</Link></li>
                        <button className="btn btn-ghost" onClick={Auth.logout}><li>Logout</li></button>
                    </ul>
                </div>
            </div>
        </div>
        <div>
            <div className= 'grid justify-items-center'>
             <div className="form-control w-full max-w-xs">
                    <input type="text" name='user' onChange={handleInputChange} value={search.user} placeholder="Search" className="input input-bordered lg:w-96  justify-center" />
                </div>
                <button className="btn btn-secondary align-item-center mt-5" onClick={(e) => searchBtn(search.user,e)}>Search for Friends</button>
            </div>
            </div>
            <div className="flex justify-center mt-5">
                {display.username != undefined ?
                    <div className="card w-96 bg-neutral text-neutral-content">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{display.username}</h2>
                            <div className="card-actions justify-end"></div>
                            <button className="btn btn-primary" onClick={(e) => handleAdd({ username: display.username, request: true }, e)} >add to friends</button>
                        </div>
                    </div> : <p>No Friends</p>
                    
                }

            </div>
        </div>
    )
};

export default FriendSearch;