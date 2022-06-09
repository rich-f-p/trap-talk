import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { createUser } from '../utils/API';
import Auth from '../utils/auth';

const CreateUserForm = () => {
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
      const response = await createUser(userFormData);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      username: '',
      password: '',
    });
  };

  return (
        <div id="signup-form" className="w-full justify-center hidden mt-50">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Sign-Up</h2>
                    <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Type here"
                        onChange={handleInputChange}
                        value={userFormData.username}
                        required
                        className="input input-bordered w-full max-w-xs"
                    />
                    </div>
                    <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Type here"
                        onChange={handleInputChange}
                        value={userFormData.password}
                        required
                        className="input input-bordered w-full max-w-xs"/>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary" id="main-create-btn" onClick={() => handleFormSubmit()}
                        disabled={!(userFormData.username && userFormData.password)}
                        type='submit' 
                        variant='success'
                        >Create Account</button>
                        <div className="divider w-full">OR</div>
                        <button id="login-btn" className="btn btn-secondary w-full" as={Link} to='/login'>Login</button>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default CreateUserForm;
