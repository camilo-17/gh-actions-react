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
import ionicPorject from '../assets/projects/ionic.gif';
import slevePorject from '../assets/projects/svlete.gif';
import flutterPorject from '../assets/projects/flutter.gif';
import portfolioPorject from '../assets/projects/portfolio.gif';

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
            title: 'Portfolio',
            img: portfolioPorject,
            desc: 'This is my portfolio.',
            longDesc: 'Desing to show all personal and freelance projects.',
            link: 'https://camilocaro.com',
        },
        {
            title: 'Ionic speed test App',
            img: ionicPorject,
            desc: 'Speedtest app developed during a freelance project.',
            longDesc: 'Use Ionic, cordova and capacitor',
            link: '',
            classImg: 'image-app'
        },
        {
            title: 'Flutter codeLab',
            img: flutterPorject,
            desc: 'Flutter code lab boostraped to learn.',
            longDesc: 'Flutter',
            link: '',
            classImg: 'image-app'
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
                    <div className='project-conta'>
                        {myProjects.map((element, index) => (
                            <Col sm="12" md="12" lg="4" key={index} className="list-container">
                                <ProyectCard data={element}></ProyectCard>
                            </Col>
                        ))}
                    </div>
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
                     
As a Fullstack Software Developer Engineer, I have extensive experience working with a diverse range of technologies. I have worked with Angular, Node.js, React.js, Svelte, Flutter, Ionic, NestJS, and Next.js, which have allowed me to build robust and scalable web and mobile applications. Additionally, I have a strong background in IoT technologies, enabling me to integrate software systems with connected devices seamlessly. With a holistic understanding of both frontend and backend development, I am proficient in designing efficient architectures, implementing RESTful APIs, and ensuring seamless data flow between different components. My expertise in these technologies and my passion for innovation enable me to deliver high-quality solutions that meet the unique needs of each project.
                    </p>
                </section>
            </Container>
        </div>
    );
}

export default App;
