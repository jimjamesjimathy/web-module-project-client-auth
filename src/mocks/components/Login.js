import React, { useState } from 'react'
import axios from 'axios';

export default function Login() {
    const [credentials, setCredentials] = useState({
        username: 'Bloom',
        password: 'Tech'
    })

    console.log(credentials)

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', credentials)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err)
            })
    } 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <h4>Username:</h4>                            
                    <input 
                        input='text'
                        id='username'
                        name='username'
                        handleChange={handleChange}
                    >
                    </input>
                </label>
                <label>
                    <h4>Password:</h4>                
                    <input 
                        input='text'
                        id='password'
                        name='password'
                        handleChange={handleChange}
                    >
                    </input>
                </label>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}
