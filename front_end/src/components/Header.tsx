import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThoughtlessContext } from '../contexts/ThoughtlessContext';
import { SearchPage } from './SearchPage';

export function Header() {
    const { users , loggedUsers } = useContext(ThoughtlessContext);

    const navigate = useNavigate();

    function handleGoToProfile(e:any) {
        e.preventDefault();
        const currentUser = users.find((user) => loggedUsers === true);
        navigate('/profile/' + currentUser?.id);
        console.log(currentUser);
    }
    return (
        <nav>
            <Link to='/search'> Home </Link>
            <a href="#" onClick={handleGoToProfile}> My Profile </a>
            {/* <Link to='/favorite'> Saved Recipes </Link> */}
            
        </nav>
    );
}