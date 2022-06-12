import React, { useState, useEffect } from 'react';
import { 
    getMe,
    receiveMessage,
    sendMessage,
    thisMessage,
    userSendMessage
    } from '../utils/API';
import Auth from '../utils/auth';

const Messages = () =>{
    const [userData,setUserData] = useState({});
    const [messageData,setMessageData] = useState({});
    const [textInput, setTextInput] = useState({text:'', user:''});
    const [id,setId] = useState('');
    let content = {} // holds conversation data
    let reciever = '';// holds a name 
    let sender = userData.username


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
           // addition settimeout needed
    }, [userDataLength, messageDataLength])

    const handleClick = async (user,messageId, e) => {
        //const token = Auth.loggedIn() ? Auth.getToken(): null;
        e.preventDefault();
        setId(messageId);
        const token = Auth.getToken(); // for testing purposes
        if(!token){
            return false
        }
        try{
            const response = await thisMessage(user,messageId,token);

            if(!response.ok){
                throw new Error('Error');
            }
            const message = await response.json();
            content={};
            content = await message[0].friends[0];
            setMessageData(content);
            //setMessageData(messageToSend);
        } catch(err){
            console.log(err);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setTextInput({ ...textInput, [name]: value , user:`${sender}`});
        console.log(textInput);
    };

    const sendHandle = async (e) =>{
        e.preventDefault();
        console.log('click')
        reciever = await messageData.username
        const token = Auth.getToken(); 
        if(!token){
            return false
        }
        try{
            const response = await userSendMessage(sender,reciever,token,textInput)
            if(!response.ok){
                throw new Error('Error with sending: 1');
            }
        }catch(err){
            console.log(err);
        }
        try{
            const secondResponse = await userSendMessage(reciever,sender,token,textInput)
            if(!secondResponse.ok){
                throw new Error('Error with sending: 2')
            }
        }catch(err){
            console.log(err);
        }
        handleClick(sender,id,e);
        setTextInput({text:'', user:`${sender}`})
    }

return (
    <>
        <div className='grid lg:grid-cols-3 mt-6 '>
            <div className='overflow-auto overflow-x-auto w-full max-h-80 mr-1 border-double border-4'>
                <table className='table w-full'>
                    <tbody className="hover">

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
                <div id='scroll' className="overflow-auto h-80 border-dotted border-2">
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
                    <input type="text" placeholder="Search…" 
                    className="input input-bordered w-full" 
                    name='text'
                    onChange={handleInputChange}
                    value={textInput.text}/>
                    <button className="btn btn-square" onClick={(e) => sendHandle(e)}>send</button>
                </div>
            </div>
        </div>
    </>
);
}

export default Messages;