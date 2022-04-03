import axios from "axios";

export function getUsers() {
    return axios
    .get(`http://localhost:3005/users`, {})
    .then((response) => response.data)
}

export function getUserByID(id: number) {
    return axios
    .get(`http://localhost:3005/users/${id}`)
    .then((response) => response.data)
}

export function deleteUser(id: number) {
    return axios
    .delete(`http://localhost:3005/users/${id}`)
    .then((response) => response.data)
}