import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="isActive" exact={true}>Home</NavLink>
        <NavLink to="/create" activeClassName="isActive">Create expense</NavLink>
        <NavLink to="/help">Help</NavLink>
    </header>
);

export default Header;