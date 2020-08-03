import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogOut } from '../actions/auth';

export const Header = ({ startLogOut }) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" activeClassName="isActive" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="isActive">Create expense</NavLink>
        <button onClick={startLogOut}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogOut: () => dispatch(startLogOut())
});

export default connect(undefined, mapDispatchToProps)(Header);