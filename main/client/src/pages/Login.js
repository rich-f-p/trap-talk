// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';

// import Auth from '../utils/auth';

// const Login = (props) => {
    // const [formState, setFormState] = useState({ username: '', password: '' });
    // const [login, { error, data }] = useMutation(LOGIN_USER);

    // // update state based on form input changes
    // const handleChange = (event) => {
    //     const { name, value } = event.target;

    //     setFormState({
    //         ...formState,
    //         [name]: value,
    //     });
    // };

    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();
    //     console.log(formState);
    //     try {
    //         const { data } = await login({
    //             variables: { ...formState },
    //         });

    //         Auth.login(data.login.token);
    //     } catch (e) {
    //         console.error(e);
    //     }

    //     // clear form values
    //     setFormState({
    //         username: '',
    //         password: '',
    //     });
    // };

//     return (
//         <div id="login-form" class="w-full flex justify-center mt-50">
//             <div class="card w-96 bg-base-100 shadow-xl flex justify-center">
//                 <div class="card-body">
//                     <h2 class="card-title">Login</h2>
//                     <div class="form-control w-full max-w-xs">
//                         <label class="label">
//                             <span class="label-text">Username</span>
//                         </label>
//                         <input
//                             id="username-login"
//                             type="text"
//                             placeholder="Type here"
//                             class="input input-bordered w-full max-w-xs"
//                         />
//                     </div>
//                     <div class="form-control w-full max-w-xs">
//                         <label class="label">
//                             <span class="label-text">Password</span>
//                         </label>
//                         <input
//                             id="password-login"
//                             type="password"
//                             placeholder="Type here"
//                             class="input input-bordered w-full max-w-xs"
//                         />
//                     </div>
//                     <div class="card-actions">
//                         <a
//                             href="#my-modal-2"
//                             class="btn btn-accent w-full"
//                             id="main-login-btn"
//                         >Login</a>
//                         <div class="divider w-full">OR</div>
//                         <button id="create-btn" class="btn btn-secondary w-full">Create
//                             Account</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login
