import { ReactNode, useEffect, useState } from 'react';
import { User } from '../models/User';
import { ThoughtlessContext } from './ThoughtlessContext';

interface Props { children: ReactNode }

export function ThoughtlessContextProvider({ children }: Props) {

    const [users, setUsers] = useState<User[]>(() => {
        const saved = localStorage.getItem('userStorage') || '[]';
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    })

    const [loggedUsers, setLoggedUser] = useState<boolean>(() => {
        const saved = localStorage.getItem('userLogin') || '';
        const initialValue = JSON.parse(saved);
        return initialValue || false;
    })

    useEffect(() => {

        localStorage.setItem('userStorage', JSON.stringify(users));
        localStorage.setItem('userLogin', JSON.stringify(loggedUsers));

    }, [users, loggedUsers])

    function addUser(user: User) {
        setUsers([...users, user]);
    }

    function loginUser() {
        setLoggedUser(true);
    }

    return (

        <ThoughtlessContext.Provider value={{ users, loggedUsers, loginUser, addUser }}>
            { children }
        </ThoughtlessContext.Provider>

    );

}