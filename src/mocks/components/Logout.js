import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Logout() {
    const { push } = useHistory();
    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.post('http::/localhost:9000/api/logout', {}, {
            header: {
                authorization: token
            }
        }, [])
            .then(res => {
                localStorage.removeItem('token')
                push('/');
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (<div></div>)
};
