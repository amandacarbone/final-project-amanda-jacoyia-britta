import axios from "axios";

export function getUsers() {
    return axios
    .get(`https://thoughtless-app-alpha.herokuapp.com/users`, {})
    .then((response) => response.data)
}

export function getUserByID(id: number) {
    return axios
    .get(`https://thoughtless-app-alpha.herokuapp.com/users/${id}`)
    .then((response) => response.data)
}

export function deleteUser(id: number) {
    return axios
    .delete(`https://thoughtless-app-alpha.herokuapp.com/users/${id}`)
    .then((response) => response.data)
};

export function updateBasics(id:number, first_name?: string, last_name?: string, email?: string, isvegetarian?: boolean, isvegan?: boolean, ispescatarian?: boolean) {
    return axios
    .put(`https://thoughtless-app-alpha.herokuapp.com/users/update/${id}`, {
        first_name: first_name,
        last_name: last_name,
        email: email,
        isvegetarian: isvegetarian,
        isvegan: isvegan,
        ispescatarian: ispescatarian
      
    })
    .then((response) => response.data);
}