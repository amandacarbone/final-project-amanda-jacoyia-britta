import { User } from "../models/User";
import { createContext } from "react";

export interface ThoughtlessContextModel {
    users: User[];
    loggedUsers: boolean;
    addUser: (user: User) => void;
    loginUser: () => void;
};

const defaultValue: ThoughtlessContextModel = {
    users: [],
    loggedUsers: false,
    addUser: () => {},
    loginUser: () => {}
};

export const ThoughtlessContext = createContext<ThoughtlessContextModel>(defaultValue);