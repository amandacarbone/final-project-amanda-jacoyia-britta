<<<<<<< HEAD
import { NavLink } from 'react-router-dom';

export function Header() {

    return (
        <div>



<h1>Thoughtless Meals </h1>

<div className='navBar'>
    <NavLink to='/'>Login In</NavLink>
    <NavLink to='/search'>Search</NavLink>
    <NavLink to='/home'>Home</NavLink>
    <NavLink to='/favorites'>Favorites</NavLink>
</div>
        </div>
    );

=======
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
>>>>>>> a28cd540aa402248fdbf18996473a3a538fdd13e
}