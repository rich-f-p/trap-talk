// import React, { useState, useEffect } from 'react';

// import { getMe } from '../utils/API'; //easterEgg } from '../utils/API';

// import Auth from '../utils/auth';
// //import { removemessageId } from '../utils/localStorage';

// const DecoyMessage = () => {
//   const [userData, setUserData] = useState({});

//   // use this to determine if `useEffect()` hook needs to run again
//   const userDataLength = Object.keys(userData).length;

//   useEffect(() => {
//     const fakeUserData = async () => {
//       try {
//         const token = Auth.logIn() ? Auth.getToken() : null;

//         if (!token) {
//           return false;
//         }

//         const response = await getMe(token);

//         if (!response.ok) {
//           throw new Error('something went wrong!');
//         }

//         const user = await response.json();
//         setUserData(user);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fakeUserData();
//   }, [userDataLength]);


//   const realMessage = async (messageId) => {
//     //pin auth here
//     const token = Auth.loggedIn() ? Auth.getToken() : null;

//     if (!token) {
//       return false;
//     }


//     // try {
//     //   // const response = await easterEgg(messageId, token);

//     //   if (!response.ok) {
//     //     throw new Error('something went wrong!');
//     //   }

//     //   const updatedUser = await response.json();
//     //   setUserData(updatedUser);

//     //   realMessage(messageId);
//     // } catch (err) {
//     //   console.error(err);
//     // }
//     //   try {
//     //     const response = await easterEgg(messageId, token);

//     //     if (!response.ok) {
//     //       throw new Error('something went wrong!');
//     //     }

//     //     const updatedUser = await response.json();
//     //     setUserData(updatedUser);
//     //     // upon success, remove message's id from localStorage
//     //     realMessage(messageId);
//     //   } catch (err) {
//     //     console.error(err);
//     //   }
//   };

//   // if (!userDataLength) {
//   //   return <h2>LOADING...</h2>;
//   // }

//   return (
// <>
//     <div class="card lg:card-side bg-base-100 shadow-xl m-5 w-">
//       <figure></figure>
//         <h2 class="card-title">From: xXx_KeViN_sHaRk_xXx</h2>
//         <p>Message: Hey, what you up to?</p>
//         <div class="card-body">
//           <label for="my-modal-3" class="btn btn-ghost btn-xs modal-button max-w-fit">Sent yesterday</label>
//         <div class="card-actions justify-end">
       
//           <button class="btn btn-primary">open</button>
//         </div>
//       </div>
//     </div>
    
//     <div class="card lg:card-side bg-base-100 shadow-xl m-5">
//       <figure></figure>
//         <h2 class="card-title">From: Sophtron</h2>
//         <p>Message: Hey, what you up to?</p>
//         <div class="card-body">
//           <label for="my-modal-3" class="btn btn-ghost btn-xs modal-button max-w-fit">Sent yesterday</label>
//         <div class="card-actions justify-end">
       
//           <button class="btn btn-primary">open</button>
//         </div>
//       </div>
//     </div>

//     <div class="card lg:card-side bg-base-100 shadow-xl m-5">
//       <figure></figure>
//         <h2 class="card-title">From: </h2>
//         <p>Message: Hey, what you up to?</p>
//         <div class="card-body">
//           <label for="my-modal-3" class="btn btn-ghost btn-xs modal-button max-w-fit">Sent yesterday</label>
//         <div class="card-actions justify-end">
       
//           <button class="btn btn-primary">open</button>
//         </div>
//       </div>
//     </div>

// <input type="checkbox" id="my-modal-3" class="modal-toggle" />
// <div class="modal modal-bottom sm:modal-middle">
//   <div class="modal-box relative">
//     <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
//     <h3 class="text-lg font-bold"></h3>
//     <p class="py-4"></p>
//     <input type="text" placeholder="Pin" class="input input-bordered w-full max-w-xs" />
//     <input type="submit" value="Go" class="btn btn-sm" />
//   </div>
// </div>
// </>
//   );
// };

// export default DecoyMessage;
