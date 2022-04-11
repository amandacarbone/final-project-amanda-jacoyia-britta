export interface User {
    id: number,
    first_name?: string,
    last_name?: string,
    email: string,
    password: string
    isvegan: boolean,
    isvegetarian: boolean,
    ispescatarian: boolean,
    join_date: string
};