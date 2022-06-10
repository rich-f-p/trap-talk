import React from "react";
import Navbar from "../components/Navbar";
import avatar from "../images/traptalk-avatar.png"




const Profile = () => {




    return (
        <><Navbar />

            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">My Profile</h2>
                    <p></p>
                </div>
                <figure><img src={avatar} alt="Avatar" /></figure>
            </div></>

    );
};

export default Profile;