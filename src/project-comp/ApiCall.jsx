import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
const ApiCall = () => {
    const [userName, setUserName] = useState("");
    const [data, setData] = useState({});
    const [userDisplay, setUserDisplay] = useState("user-display");

    useEffect(()=>{
        setUserDisplay("user-hide");
    },[])

    const getUserDetails = () => {
        fetch(`https://api.github.com/users/${userName}`).then((result)=>{
            return result.json()
        }).then(value => {  
            setData(value);
        }).catch(e=>setData(e.message))
    }

    const onEnterKey = (e) => {
        if(e.keyCode === 13){
            getUserDetails();
            setUserDisplay("user-display");
        }
    }

    const date = new Date(data.created_at); 

    return (
        <div id='body' className='apicall body-dark'>
            <header>
                <Link className="icon-border header-title" to="/">MP</Link>
            </header>
            <h2 className='api-call-title'>Github profile checker</h2>
            <div className="github-userName-input">
                <input type="text" 
                    className='input' 
                    value={userName} 
                    onChange={(e)=>{
                        setUserName(e.currentTarget.value);
                    }} 
                    onKeyDown ={onEnterKey}
                    autoComplete="off" />
                <button type='button' className='btn' onClick={getUserDetails} >Get the user info</button>
            </div>
            {data.message === 'Not Found' ? <h2 className='h2-margin2'>User not Found</h2> : <div className={userDisplay}>
                <div className="user-avatar-container">
                    <img className='user-avatar' src={data.avatar_url} alt="user avatar" />
                </div>
                
                <div className="user-details">
                    <div className="user-name">
                        <h3>{data.name}</h3>
                    </div>
                    <div className="user-email">
                        <h4 className="inline">Email:</h4><span>{data.email}</span>
                    </div>
                    <div className="user-followers">
                        <h4 className="inline">Followers:</h4> <span>{data.followers}</span>
                    </div>
                    <div className="user-following">
                        <h4 className="inline">Following:</h4> <span>{data.following}</span>
                    </div>
                    <div className="user-location">
                        <h4 className="inline">Location:</h4> <span>{data.location}</span>
                    </div>
                    <div className="user-created">
                        <div className="user-create-date">
                            <h4 className="inline">Date:</h4><span> {date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() }</span>
                        </div>
                        <div className="user-created-time">
                            <h4 className="inline">Time:</h4><span>{date.getHours()+ ":" + date.getMinutes() + ":" + date.getSeconds()}</span>
                        </div>
                    </div>
                </div>
            </div>  
            }
        </div>
    );
}

export default ApiCall;
