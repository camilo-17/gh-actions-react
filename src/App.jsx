import { useState } from 'react';
import AlertComponent from './components/Alert';
import { Container, Row, Col } from 'shards-react';
import NavExample from './components/Navbar';
import ProyectCard from './components/Card';
import Hero from './components/Hero';
import './App.css';

function App() {
    const myProjects = [1, 2, 3];
    return (
        <div className="my-contendor">
            <Container>
                <NavExample></NavExample>
                <div className="hero-container">
                    <div className="img-container">
                        <img className="img-profile" src="./assets/profile.jpg" alt="imagen-perfil" />
                    </div>
                    <Hero></Hero>
                </div>

                <div className="cards-container">
                    <Row>
                        {myProjects.map((element, index) => (
                            <Col sm="12" md="6" lg="4" key={index}>
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
