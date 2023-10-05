import React, { useState } from 'react';
import { Button, Nav, NavItem, NavLink } from 'shards-react';

export default function NavExample() {
    const [labelButton, setLabelButton] = useState('Light Mode');

    const toogleDarkMode = () => {
        const logo = document.getElementById('logo-play-station');
        const html = document.getElementsByTagName('html');
        logo.classList.toggle('dark-mode-logo');
        html[0].classList.toggle('dark-mode');
        if (labelButton === 'Light Mode') {
            setLabelButton('Dark Mode');
        } else {
            setLabelButton('Light Mode');
        }
    };
    return (
        <div className="header-container">
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
            <Button id="dark-mode-button" onClick={() => toogleDarkMode()}>
                {labelButton}
            </Button>
        </div>
    );
}
