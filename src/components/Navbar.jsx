import React from 'react';
import { Button, Nav, NavItem, NavLink } from 'shards-react';

export default function NavExample() {
    const toogleDarkMode = () => {
        const logo = document.getElementById('logo-play-station');
        const html = document.getElementsByTagName('html');
        logo.classList.toggle("dark-mode-logo");
        html[0].classList.toggle('dark-mode')
    }

    return (<div className='header-container'> 
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
            <Button  onClick={() => toogleDarkMode()}>
                Dark Mode
            </Button>
        </div>
    );
}
