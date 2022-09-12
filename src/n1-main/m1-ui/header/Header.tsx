import React from 'react';
import {NavLink} from 'react-router-dom';

export const Header = () => {
    return (
        <div>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/createuser">Create user</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/recoverpassword">Recover password</NavLink>
            <NavLink to="/newpassword">New password</NavLink>
            <NavLink to="/test">Test</NavLink>
        </div>
    );
};