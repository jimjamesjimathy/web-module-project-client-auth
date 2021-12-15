
import axios from 'axios';
import React from 'react'

export default function axiosWithAuth() {
    const token = localStorage.getItem('token');
    return axios.create({
        header: {
            authorization: token
        },
        baseURL: 'http://localhost:9000/api'
    })
}
