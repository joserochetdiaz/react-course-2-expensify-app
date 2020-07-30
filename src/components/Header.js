import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogOut } from '../actions/auth';

export const Header = ({ startLogOut }) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="isActive" exact={true}>Home</NavLink>
        <NavLink to="/create" activeClassName="isActive">Create expense</NavLink>
        <NavLink to="/help">Help</NavLink>
        <button onClick={startLogOut}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogOut: () => dispatch(startLogOut())
});

export default connect(undefined, mapDispatchToProps)(Header);