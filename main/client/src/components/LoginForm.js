import React, { useState } from 'react';
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
    return(
        <div id="login-form" class="w-full flex justify-center mt-50">
            <div class="card w-96 bg-base-100 shadow-xl flex justify-center">
                <div class="card-body">
                    <h2 class="card-title">Login</h2>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Username</span>
                        </label>
                        <input
                            id="username-login"
                            type="text"
                            placeholder="Type here"
                            class="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input
                            id="password-login"
                            type="password"
                            placeholder="Type here"
                            class="input input-bordered w-full max-w-xs"
                        />
                    </div>
                    <div class="card-actions">
                        <a
                            href="#my-modal-2"
                            class="btn btn-accent w-full"
                            id="main-login-btn"
                        >Login</a>
                        <div class="divider w-full">OR</div>
                        <button id="create-btn" class="btn btn-secondary w-full">Create
                            Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;