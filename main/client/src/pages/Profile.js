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
                    <figure><img className='w-/4 ' src={avatar} alt="Avatar" /></figure>
                </div>
            </div>

            <div class="overflow-x-auto">
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
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        {/* <!-- row 2 --> */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        {/* <!-- row 3 --> */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>

    );
};

export default Profile;