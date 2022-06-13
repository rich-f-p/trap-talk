import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import avatar from "../images/traptalk-avatar.png"
import Auth from "../utils/auth";
import { getMe } from "../utils/API";





const Profile = () => {

    const [userData, setUserData] = useState({});
    const userDataLength = Object.keys(userData).length;

    useEffect(() => {
        const realUserData = async () => {
            try {
                const token = Auth.getToken(); //code for testing

                if (!token) {
                    Auth.logout();
                    return false;
                }
                const response = await getMe(token);
                if (!response.ok) {
                    throw new Error('Access Denied');
                }
                const user = await response.json();
                setUserData(user);
            } catch (err) {
                console.log(err)
            }
        };
        realUserData();
        console.log(userData);
    }, [userDataLength])


    return (
        <><Navbar />
            <div className="justify-center -space-y-14">
                <div class="hero min-h-screen" >
                    <div class="hero-overlay bg-opacity-60"></div>
                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-md">
                            <h1 class="mb-5 text-5xl font-bold">Hello, {userData.username}!</h1>
                            <p class="mb-5">Welcome to your profile!</p>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex justify-left pl-20 pr-20">
                        <div className="card w-80 h-80 bg-base-100 shadow-xl">
                            <div className="card-body ">
                                <h2 className="card-title justify-center">My Profile</h2>
                                <p></p>
                            </div>
                            <figure><img src={avatar} alt="Avatar" /></figure>
                        </div>
                    </div>




                    <div class="overflow-x-auto lg:pl-96 ">
                        <table class="table w-96">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Friends</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            {/* <!-- row 1 --> */}
                            <tbody className="hover">

                                {/* creates a new one for each friend */}
                                {userData.friends != undefined && userData.friends.map((fri, index) => {
                                    return (
                                        <tr key={fri._id} className='hover'>
                                            <th>{index + 1}</th>
                                            <td></td>
                                            <td>{fri.username}</td>
                                            <td></td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Profile;