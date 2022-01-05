import { useState } from 'react';
import AlertComponent from './components/Alert';
import { Container, Row, Col } from 'shards-react';
import NavExample from './components/Navbar';
import ProyectCard from './components/Card';
import Hero from './components/Hero';
import './App.css';

import profileImg from '../assets/profile.jpg';

function App() {
    const myProjects = [1, 2, 3];
    return (
        <div className="my-contendor">
            <Container>
                <NavExample></NavExample>
                <div className="hero-container">
                    <div className="img-container">
                        <img className="img-profile" src={profileImg} alt="imagen-perfil" />
                    </div>
                    <Hero></Hero>
                </div>

                <div className="cards-container">
                    <Row>
                        {myProjects.map((element, index) => (
                            <Col sm="12" md="12" lg="4" key={index} className="list-container">
                                <ProyectCard></ProyectCard>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default App;
