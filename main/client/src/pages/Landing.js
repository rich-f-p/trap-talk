import React, { useState, useEffect } from 'react';
import { 
    receiveMessage,
    sendMessage} from '../utils/API';
import Auth from '../utils/auth';

const Messages = () =>{
    const [userData,setUserData] = useState({});
    const [messageData,setMessageData] = useState({});
    const [textInput, setTextInput] = useState('');

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
        <div className='grid lg:grid-cols-3 mt-6 '>
            <div className='overflow-auto overflow-x-auto w-full max-h-80 mr-1 border-double border-4'>
                <table className='table w-full'>
                    <tbody className="hover" /* onClick={handleClick('passthinghere')} */>

                    {/* create a new one for each friend */}
                   {/*  {userData.friends.map((fri) =>{
                        return (
                            <tbody className="hover" onClick={handleClick('passthinghere')}><tr>
                            <th>{fri._id}</th>
                            <td>{fri.username}</td>
                            </tbody>
                        );
                    })} */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='lg:col-start-2 lg:col-span-2 border-double border-4'>
                <div className="overflow-auto h-80 border-dotted border-2">
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="input-group">
                    <input type="text" placeholder="Search…" className="input input-bordered w-full" />
                    <button className="btn btn-square">send</button>
                </div>
            </div>
        </div>
    </>
);
}

export default Messages;