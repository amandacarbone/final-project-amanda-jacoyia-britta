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

}