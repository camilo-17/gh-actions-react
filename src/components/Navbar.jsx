import React from 'react';
import { Nav, NavItem, NavLink } from 'shards-react';

export default function NavExample() {
    return (
        <Nav>
            <NavItem>
                <NavLink active href="#">
                    Home
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Projects</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">About me</NavLink>
            </NavItem>
        </Nav>
    );
}
