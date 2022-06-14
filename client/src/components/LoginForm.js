import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../utils/API';
import Auth from '../utils/auth';
import logo from '../images/traptalk-transparent.png'

const LoginForm = () => {
    const [userFormData, setUserFormData] = useState({ username: '', password: '' });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }

        try {
            const response = await loginUser(userFormData);

            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const { token, user } = await response.json();
            Auth.login(token);
        } catch (err) {
            console.error(err);
            
        }

        setUserFormData({
            username: '',
            password: '',
        });
    };

    return(

        <><div id="login-form" className="w-full flex justify-center mt-50">
            <div className="card w-96 bg-base-100 shadow-xl flex justify-center">
                <div className="card-body">
                    <h2 className="card-title justify-center">Login</h2>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Username</span>
                        </label>
                        <input
                            id="username-login"
                            type="text"
                            placeholder="Type here"
                            name='username'
                            onChange={handleInputChange}
                            value={userFormData.username}
                            required
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            id="password-login"
                            type="password"
                            placeholder="Type here"
                            name='password'
                            onChange={handleInputChange}
                            value={userFormData.password}
                            required
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-neutral w-full"
                            id="main-login-btn" onClick={(e) => handleFormSubmit(e)}>
                            Login</button>
                        <div className="divider w-full">OR</div>
                        <Link to='/createAccount' className="btn btn-secondary w-full">
                            <button id="create-btn">Create
                                Account</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
        <div className='flex justify-center'>
            <img src={logo} className='w-72 h-72 ' alt='logo'></img>
        </div></>

    );
}


export default LoginForm;