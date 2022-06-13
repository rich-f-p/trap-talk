import React, { useState, useEffect } from 'react';
import { getMe } from '../utils/API';
import Auth from '../utils/auth';

const PinForm = () => {
    const [userFormData, setUserFormData] = useState({});
    const [pinData,setPinData] = useState({});
    const pinDataLength = Object.keys(pinData).length;

    useEffect(() =>{
      const grabPinData = async () =>{
          try{
              const token = Auth.getToken();
              if(!token){
                  Auth.logout();
                  return false;
              }
              const response = await getMe(token);
              if(!response.ok){
                  throw new Error('Access Denied');
              }
              const pin = await response.json();
              setPinData({pin:`${pin.pin}`})
              console.log(pin.pin)
          }catch(err){
              console.log(err);
          }
      };
      grabPinData();
  },[pinDataLength])

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
            if(userFormData.pin === pinData.pin){
              window.location.assign('/messages');
            }else{
              console.log('wrong pin')
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
        <h2 class="card-title">From: jerome_luvs_farley</h2>
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
    <input type="submit" onClick={(e) => handleFormSubmit(e)} value="Go" class="btn btn-sm ml-5" />
  </div>
</div>
        </>
    ); 
}

export default PinForm;