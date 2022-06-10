import React from "react";
import Navbar from "../components/Navbar";
import avatar from "../images/avatarface.jpeg"

const Profile = () => {




    return (
        <><Navbar />

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">My Profile</h2>
                    <p></p>
                </div>
                <figure><img src={avatar} alt="Avatar" /></figure>
            </div></>

    );
};

export default Profile;