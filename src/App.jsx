import { Container, Row, Col } from 'shards-react';
import NavExample from './components/Navbar';
import ProyectCard from './components/Card';
import Hero from './components/Hero';
import './App.css';

import profileImg from '../assets/profile.jpg';
import ppImg from '../assets/pp.jpg';
import Courses from './components/Courses';

import BdMlImg from '../assets/courses/bigdata_ml.png';
import mvImg from '../assets/courses/maquinas_virtuales.png';
import angularImg from '../assets/courses/angular.png';
import pythonImg from '../assets/courses/python.png';
import firebaseImg from '../assets/courses/firebase.png';
import dockerImg from '../assets/courses/docker.png';
import jsImg from '../assets/courses/js.png';

import rickPorject from '../assets/projects/rick.gif';
import slevePorject from '../assets/projects/svlete.gif';

function App() {
    const myProjects = [
        {
            title: 'Rick and morty App',
            img: rickPorject,
            desc: 'This frontend use Rick and morty API for list characters.',
            longDesc: 'Use React and github pages',
            link: 'https://camilo-17.github.io/rick-and-morty-app',
        },
        {
            title: 'Sveltestagram',
            img: slevePorject,
            desc: 'This is a clon for instagram.',
            longDesc: 'Use Svelte and news API for load resources',
            link: 'https://amazing-ptolemy-9ed655.netlify.app',
        },
        {
            title: 'Block post App',
            img: 'https://place-hold.it/300x200',
            desc: 'This is a block post frontend.',
            longDesc: 'Use Symfony framework',
            link: '',
        },
    ];

    const myCourses = [
        {
            title: 'Big data & Machine Learning',
            img: BdMlImg,
        },
        {
            title: 'Virtual Machine',
            img: mvImg,
        },
        {
            title: 'Angular',
            img: angularImg,
        },
        {
            title: 'docker',
            img: dockerImg,
        },
        {
            title: 'Python',
            img: pythonImg,
        },
        {
            title: 'firebase',
            img: firebaseImg,
        },
        {
            title: 'Profesional de JS',
            img: jsImg,
        },
    ];
    return (
        <div className="my-contendor">
            <Container>
                <NavExample></NavExample>
                <div className="hero-container">
                    <div className="img-container">
                        <img className="img-profile" src={ppImg} alt="imagen-perfil" />
                    </div>
                    <Hero></Hero>
                </div>

                <section id="projects" className="cards-container">
                    <h4>These are my projects</h4>
                    <Row>
                        {myProjects.map((element, index) => (
                            <Col sm="12" md="12" lg="4" key={index} className="list-container">
                                <ProyectCard data={element}></ProyectCard>
                            </Col>
                        ))}
                    </Row>
                </section>
                <section id="courses">
                    <h4>Aproved courses</h4>
                    <Row>
                        <div className="coursers-container">
                            {myCourses.map((element, index) => (
                                // <Col sm="12" md="12" lg="4" key={index} className="list-container">
                                <Courses key={index} data={element}></Courses>
                                // </Col>
                            ))}
                        </div>
                    </Row>
                </section>
                <h4>About me</h4>
                <section id="about">
                    <p>
                        Jr. Full-stack Software Developer Engineer with abilities in Javascript, Node JS, PHP,
                        Angular and React, also knowledge in databases like SQL and mongoDB. Knowledge in
                        cloud tecnologies like GCP. Likes to experiment with hardware tecnologies like arduino
                        and ESP32 in addition with basic knowledge in telecomunications tecnologies for IoT
                        like LoRa.
                    </p>
                </section>
            </Container>
        </div>
    );
}

export default App;
