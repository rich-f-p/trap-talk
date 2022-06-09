import React, { useState, useEffect } from 'react';
import { Card } from "daisyui";

import { getMe} from '../utils/API'; //easterEgg } from '../utils/API';

import Auth from '../utils/auth';
//import { removemessageId } from '../utils/localStorage';

const DecoyMessage = () => {
  const [userData, setUserData] = useState({});

  // use this to determine if `useEffect()` hook needs to run again
  const userDataLength = Object.keys(userData).length;

  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }

        const response = await getMe(token);

        if (!response.ok) {
          throw new Error('something went wrong!');
        }

        const user = await response.json();
        setUserData(user);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, [userDataLength]);


  const realMessage = async (messageId) => {
      //pin auth here
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }


    // try {
    //   // const response = await easterEgg(messageId, token);

    //   if (!response.ok) {
    //     throw new Error('something went wrong!');
    //   }

    //   const updatedUser = await response.json();
    //   setUserData(updatedUser);

    //   realMessage(messageId);
    // } catch (err) {
    //   console.error(err);
    // }
  //   try {
  //     const response = await easterEgg(messageId, token);

  //     if (!response.ok) {
  //       throw new Error('something went wrong!');
  //     }

  //     const updatedUser = await response.json();
  //     setUserData(updatedUser);
  //     // upon success, remove message's id from localStorage
  //     realMessage(messageId);
  //   } catch (err) {
  //     console.error(err);
  //   }
  };

  if (!userDataLength) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>

      <Card> 
        <h2>
          {userData.savedMessages.length
            ? `Viewing ${userData.savedMessages.length} saved ${userData.savedMessages.length === 1 ? 'message' : 'messages'}:`
            : 'You have no saved messages!'}
        </h2>
        
            {userData.savedMessages.map((message) => {
            return (
        <div class="card w-96 bg-primary text-primary-content">
  <div class="card-body" key={message.messageId}>
    <h2 class="card-title">{message.title}</h2>
    <p>{message.description}</p>
    <p className='small'>From: {message.authors}</p>
    <div class="card-actions justify-end">
      <button class="btn"onClick={() => realMessage(message.messageId)}>Send</button>
    </div>
  </div>
</div>
            );
          })}
        </Card>
    </>
  );
};

export default DecoyMessage;
