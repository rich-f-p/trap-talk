import React, { useState } from 'react';
import { showMessages } from '../utils/API';
import Auth from '../utils/auth';

const PinForm = () => {
    const [userFormData, setUserFormData] = useState({ pin: '' });
    // const [validated] = useState(false);
    // const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
        console.log(userFormData)
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }

        try {
            const response = await showMessages(userFormData);

            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const { token, user } = await response.json();
            console.log(user);
            Auth.pin(token);
        } catch (err) {
            console.error(err);
        }

        setUserFormData({
            pin: ''
        });
    };
    return (
        <>
         <div class="card lg:card-side bg-base-100 shadow-xl m-5 w-">
      <figure></figure>
        <h2 class="card-title">From: xXx_KeViN_sHaRk_xXx</h2>
        <p>Message: Hey, what you up to?</p>
        <div class="card-body">
          <label for="my-modal-3" class="btn btn-ghost btn-xs modal-button max-w-fit">Sent yesterday</label>
        <div class="card-actions justify-end">
       
          <button class="btn btn-primary">open</button>
        </div>
      </div>
    </div>
    
    <div class="card lg:card-side bg-base-100 shadow-xl m-5">
      <figure></figure>
        <h2 class="card-title">From: Sophtron</h2>
        <p>Message: Hey, what you up to?</p>
        <div class="card-body">
          <label for="my-modal-3" class="btn btn-ghost btn-xs modal-button max-w-fit">Sent yesterday</label>
        <div class="card-actions justify-end">
       
          <button class="btn btn-primary">open</button>
        </div>
      </div>
    </div>

    <div class="card lg:card-side bg-base-100 shadow-xl m-5">
      <figure></figure>
        <h2 class="card-title">From: </h2>
        <p>Message: Hey, what you up to?</p>
        <div class="card-body">
          <label for="my-modal-3" class="btn btn-ghost btn-xs modal-button max-w-fit">Sent yesterday</label>
        <div class="card-actions justify-end">
       
          <button class="btn btn-primary">open</button>
        </div>
      </div>
    </div>

<input type="checkbox" id="my-modal-3" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box relative">
    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-lg font-bold"></h3>
    <p class="py-4"></p>
    <input 
    id="password-login"
    type="password"
    placeholder="Pin"
    name='pin'
    onChange={handleInputChange}
    value={userFormData.pin}
    required
    class="input input-bordered w-full max-w-xs" />                       
    <input type="submit" onClick={handleFormSubmit} value="Go" class="btn btn-sm" />
  </div>
</div>
        </>
    ); 
}

export default PinForm;