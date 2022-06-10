import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../utils/API';
import Auth from '../utils/auth';

const LoginForm = () => {
    const [userFormData, setUserFormData] = useState({ username: '', password: '' });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await loginUser(userFormData);

            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const { token, user } = await response.json();
            console.log(user);
            Auth.login(token);
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setUserFormData({
            username: '',
            password: '',
        });
    };
    return (
        <div id="login-form" className="w-full flex justify-center mt-50">
            <div className="card w-96 bg-base-100 shadow-xl flex justify-center">
                <div className="card-body">
                    <h2 className="card-title">Login</h2>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Username</span>
                        </label>
                        <input
                            id="username-login"
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            id="password-login"
                            type="password"
                            placeholder="Type here"
                            className="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-neutral w-full"
                            id="main-login-btn" onClick={() => handleFormSubmit()}>
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
    );
}

export default LoginForm;