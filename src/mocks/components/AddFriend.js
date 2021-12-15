import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function AddFriend() {
    const { push } = useHistory();
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: ','
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        axios.post('http://localhost:9000/api/friends', formData, {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                push('/friends')
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <h4>Friend Name: </h4>
                    <input  
                        type='text'
                        name='name'
                        id='friendNameId'
                        onChange={handleChange}
                    >
                    </input>
                </label>
                <label>
                    <h4>Friend Age: </h4>
                    <input  
                        type='text'
                        name='age'
                        id='friendAgeId'
                        onChange={handleChange}
                    >
                    </input>
                </label>
                <label>
                    <h4>Friend Email: </h4>
                    <input  
                        type='text'
                        name='email'
                        id='friendEmailId'
                        onChange={handleChange}
                    >
                    </input>
                </label>
                <div>
                <button>Add Friend!</button>
                </div>
            </form>
        </div>
    )
}
