import axios, { AxiosResponse } from 'axios';
import { User } from '../models/User';

export function signUp() {
    var signupFormData = new FormData();

    signupFormData.append("first_name", "");
    signupFormData.append("last_name", "");
    signupFormData.append("email", "");
    signupFormData.append("password", "");

    return axios({
        method: "post",
        url: "http://localhost:3005/signup",
        data: signupFormData,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
    .then(function (response) {
        // handle success
        console.log(response);
        return response.data;
    })
    .catch(function (response) {
        // handle error
        console.log(response);
    })
}

export function login() {
    var loginFormData = new FormData();

    loginFormData.append("email", "");
    loginFormData.append("password", "");

    return axios({
        method: "post",
        url: "http://localhost:3005/login",
        data: loginFormData,
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
    .then(function (response) {
        // handle success
        console.log(response);
        return response.data;
    })
    .catch(function (response) {
        // handle error
        console.log(response);
    });
}