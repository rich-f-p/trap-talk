import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { createUser } from '../utils/API';
import Auth from '../utils/auth';
import logo from '../images/traptalk-transparent.png'

const CreateUserForm = () => {
  const [userFormData, setUserFormData] = useState({ username: '', password: '', pin: '' });

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
      pin: ''
    });
  };

  return (
    <><div id="login-form" className="w-full flex justify-center mt-50">
      <div className="card w-96 bg-base-100 shadow-xl flex justify-center">
        <div className="card-body">
          <h2 className="card-title">Create Account</h2>
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
              name='password'
              onChange={handleInputChange}
              value={userFormData.password}
              required
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Re-enter Password</span>
            </label>
            <input
              id="password-login"
              type="password"
              name='password2'
              onChange={handleInputChange}
              value={userFormData.password2}
              required
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">4-Digit Pin</span>
            </label>
            <input
              id="password-login"
              type="password"
              name='pin'
              onChange={handleInputChange}
              value={userFormData.pin}
              required
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="card-actions">
            <button className="btn btn-accent w-full"
              id="main-create-btn" onClick={handleFormSubmit}>
              Create Account</button>
            <div className="divider w-full">OR</div>
            <Link to='/' className="btn btn-secondary w-full">
              <button id="login-btn">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>

      <div className='flex justify-center'>
        <img src={logo} className='w-72 h-72 ' alt='logo'></img>
      </div></>
  );
};

export default CreateUserForm;
