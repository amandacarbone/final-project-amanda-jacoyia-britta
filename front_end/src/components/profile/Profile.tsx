import { useEffect, useState } from "react";
import { User } from "../../models/User";
import { getUserByID, getUsers } from "../../services/Users";
import { Header } from "../constants/Header";

interface Props{
    user: User;
}

export function Profile(){

  

    return(
        <div>
           
            <Header></Header>
        </div>
    )
}