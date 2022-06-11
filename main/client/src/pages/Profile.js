import React from "react";
import Navbar from "../components/Navbar";
import avatar from "../images/traptalk-avatar.png"




const Profile = () => {




    return (
        <><Navbar />

            <div className="card flex place-items-center w-96 h-96 bg-base-100 shadow-xl">
                <div className="card-body flex place-content-center">
                    <h2 className="card-title">My Profile</h2>
                    <p></p>
                </div>
                <figure><img src={avatar} alt="Avatar" /></figure>
            </div>

            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src='' alt="Friends" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">My Friends</h2>
                    <p></p>
                    <div class="card-actions">
                        
                    </div>
                </div>
            </div>
        </>

    );
};

export default Profile;