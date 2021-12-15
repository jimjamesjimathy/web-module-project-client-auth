import React, { useState, useEffect } from 'react';
import axiosWithAuth from './utilities/axiosWithAuth';


export default function FriendsList() {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        axiosWithAuth().get('/friends', {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <div>
            <h1>Friends!</h1>
            <div className='calledFriend'>
                {friends.map(friend => {
                    return(
                        <div className='friendCard' key={friend.id}>
                            <h4>Name: {friend.name}</h4>
                            <h4>Age: {friend.age}</h4>
                            <h4>Email: {friend.email}</h4>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
console.log