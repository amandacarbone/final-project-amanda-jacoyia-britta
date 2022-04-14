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
};

export function updateBasics(id:number, first_name?: string, last_name?: string, email?: string, isvegetarian?: boolean, isvegan?: boolean, ispescatarian?: boolean) {
    return axios
    .put(`http://localhost:3005/users/update/${id}`, {
        first_name: first_name,
        last_name: last_name,
        email: email,
        isvegetarian: isvegetarian,
        isvegan: isvegan,
        ispescatarian: ispescatarian
      
    })
    .then((response) => response.data);
}