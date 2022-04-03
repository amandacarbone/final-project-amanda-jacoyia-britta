import { User } from '../models/User';
import { createContext } from 'react';

export interface ThoughtlessContext {
    users: User[];
    loggedUsers: boolean;
    addUser: (user: User) => void;
    loginUser: () => void;
}

const defaultValue: ThoughtlessContext = {
    users: [],
    loggedUsers: false,
    addUser: () => {},
    loginUser: () => {}
};

export const ThoughtlessContext = createContext<ThoughtlessContext>(defaultValue);