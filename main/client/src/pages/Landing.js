import React, { useState, useEffect } from 'react';
import { 
    receiveMessage,
    sendMessage} from '../utils/API';
import Auth from '../utils/auth';

const Messages = () =>{
    const [userData,setUserData] = useState({});
    const [messageData,setMessageData] = useState({});

    const userDataLength = Object.keys(userData).length;
    const messageDataLength = Object.keys(messageData).length;

    useEffect(() => {
        const realUserData = async () =>{
            try{
                const token = Auth.pinNumber() ? Auth.getToken() : null;

                if (!token) {
                return false;
                }
                const response = await receiveMessage(token);
                if(!response.ok){
                    throw new Error('Access Denied');
                }
                const user = await response.json();
                setUserData(user);
            }catch(err){
                console.log(err)
            }
           };
           realUserData();
    }, [userDataLength, messageDataLength])

    const handleClick = async (messageId) => {
        const token = Auth.loggedIn() ? Auth.getToken(): null;
        if(!token){
            return false
        }
        try{
            const response = await receiveMessage(messageId, token);
            const send = await sendMessage(messageId);
            if(!response.ok){
                throw new Error('Error');
            }
            const message = await response.json();
            const messageToSend = await send.json();
            setMessageData(message);
            setMessageData(messageToSend);
        } catch(err){
            console.log(err);
        }
    };

return (
    <>
    <div class="card lg:card-side bg-base-100 shadow-xl">
      <figure></figure>
      <div class="card-body">
        <h2 class="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
    </>
);
}

export default Messages;