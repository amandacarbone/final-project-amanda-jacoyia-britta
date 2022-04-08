import axios, { AxiosResponse } from 'axios';
import { User } from '../models/User';

export function signUp(first_name: string, last_name: string, email: string, password: string) {
    return axios
    .post('http://localhost:3005/signup', {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password
    })
    .then((res: AxiosResponse<User>): User => {
        return res.data
    });
}

export function login(email: string, password: string) {
    return axios
    .post('http://localhost:3005/login', {
        email: email,
        password: password
    })
    .then((res: AxiosResponse<User>): User => {
        return res.data
    });
}