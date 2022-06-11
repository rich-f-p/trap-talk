import React from "react";
import Navbar from "../components/Navbar";
import avatar from "../images/traptalk-avatar.png"
import friends from "../images/traptalk-friends.png"




const Profile = () => {




    return (
        <><Navbar />
            <div className="grid grid-cols-3">
                <div className="card w-80 h-80 bg-base-100 shadow-xl col-start-2 col-span-2">
                    <div className="card-body ">
                        <h2 className="card-title">My Profile</h2>
                        <p></p>
                    </div>
                    <figure><img className='w-3/4 'src={avatar} alt="Avatar" /></figure>
                </div>

                {/* <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={friends} alt="Friends" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">My Friends</h2>
                    <p></p>
                    <div class="card-actions">
                    </div>
                </div>
            </div> */}
                <div class="card w-96 bg-neutral text-neutral-content">
                    <div class="card-body items-center text-center">

                        <img src={friends} alt="Friends" class="rounded-xl" />

                        <div class="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Profile;