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
                <NavLink href="#projects">Projects</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#courses">Courses</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#about">About me</NavLink>
            </NavItem>
        </Nav>
    );
}
