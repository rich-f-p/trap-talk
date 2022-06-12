import React, { useState, useEffect } from 'react';
import { 
    getMe,
    receiveMessage,
    sendMessage,
    thisMessage
    } from '../utils/API';
import Auth from '../utils/auth';

const Messages = () =>{
    const [userData,setUserData] = useState({});
    const [messageData,setMessageData] = useState({});
    const [textInput, setTextInput] = useState('');
    let content = {}

    const userDataLength = Object.keys(userData).length;
    const messageDataLength = Object.keys(messageData).length;
    //const contentLength = Object.keys(content).length;


    useEffect(() => {
        const realUserData = async () =>{
            try{
                //const token = Auth.pinNumber() ? Auth.getToken() : null;
                const token = Auth.getToken(); //code for testing

                if (!token) {
                return false;
                }
                const response = await getMe(token);
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
           console.log(userData);
    }, [userDataLength])

    const handleClick = async (user,messageId, e) => {
        //const token = Auth.loggedIn() ? Auth.getToken(): null;
        e.preventDefault();

        const token = Auth.getToken(); // for testing purposes

        if(!token){
            return false
        }
        try{
            //const response = await receiveMessage(messageId, token);
            //const send = await sendMessage(messageId);
            const response = await thisMessage(user,messageId,token);

            if(!response.ok){
                throw new Error('Error');
            }
            const message = await response.json();
            //const messageToSend = await send.json();
            //console.log(message[0])
            content={};
            content = await message[0].friends[0];
            setMessageData(content);
            //setMessageData(messageToSend);
        } catch(err){
            console.log(err);
        }
        // console.log(user)
        console.log(messageId);
         console.log(content);
         console.log(messageData.convo[0].text)
    };

return (
    <>
        <div className='grid lg:grid-cols-3 mt-6 '>
            <div className='overflow-auto overflow-x-auto w-full max-h-80 mr-1 border-double border-4'>
                <table className='table w-full'>
                    <tbody className="hover" /* onClick={handleClick('passthinghere')} */>

                    {/* create a new one for each friend */}
                     { userData.friends!=undefined && userData.friends.map((fri, index) =>{
                        return ( 
                            <tr key={fri._id} className='hover' onClick={(e) => handleClick(userData.username,fri._id, e)}>
                                <th>{index}</th>
                                <td>{fri.username}</td>
                            </tr>
                        ); 
                    })} 
                        <tr>
                            <th></th>
                            <td>No more friends</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='lg:col-start-2 lg:col-span-2 border-double border-4'>
                <div className="overflow-auto h-80 border-dotted border-2">
                    <div className="card-body">
                        { messageData.convo!=undefined ? messageData.convo.map((data, index) =>{
                            return(
                                <div key={data._id}>
                                    <h3 className="card-title">{data.user}</h3>
                                    <p>{data.text}</p>
                                    <p className='text-right'>{data.date}</p>
                                </div>
                                )  
                            }) : <p> Start Messaging</p>}
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