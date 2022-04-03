import { ReactNode, useEffect, useState } from 'react';
import { User } from '../models/User';
import { ThoughtlessContext } from './ThoughtlessContext';

export function ThoughtlessContextProvider(props: { children: ReactNode }) {

    const [users, setUsers] = useState<User[]>([]);
    const [loggedUsers, setLoggedUser] = useState<boolean>(false);

    function addUser(user: User) {
        setUsers([...users, user])
    }

    function loginUser() {
        setLoggedUser(true)
    }

    return (

        <ThoughtlessContext.Provider value={{ users, loggedUsers, addUser, loginUser }}>
            {props.children}
        </ThoughtlessContext.Provider>

    );

}