import axios from 'axios';

export function signUp(
    first_name: string,
    last_name: string,
    email: string,
    password: string
) {
    return axios
    .post(`http://localhost:3005/signup`, {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password
    })
    .then((response) => response.data)
}

export function login(
    email: string,
    password: string
) {
    return axios
    .post(`http://localhost:3005/login`, {
        email: email,
        password: password
    })
    .then((response) => response.data)
}