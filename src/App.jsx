import { Container, Row, Col } from 'shards-react';
import NavExample from './components/Navbar';
import ProyectCard from './components/Card';
import Hero from './components/Hero';
import './App.css';
import Skeleton from 'react-loading-skeleton';
import profileImg from '../assets/profile.jpg';
import ppImg from '../assets/pp.jpg';
import { Button } from 'shards-react';
import Courses from './components/Courses';
import 'react-loading-skeleton/dist/skeleton.css';
import BdMlImg from '../assets/courses/bigdata_ml.png';
import mvImg from '../assets/courses/maquinas_virtuales.png';
import angularImg from '../assets/courses/angular.png';
import pythonImg from '../assets/courses/python.png';
import firebaseImg from '../assets/courses/firebase.png';
import dockerImg from '../assets/courses/docker.png';
import jsImg from '../assets/courses/js.png';

import ionicPorject from '../assets/projects/ionic.gif';

import flutterPorject from '../assets/projects/flutter.gif';

import React, { useState, useEffect } from 'react';

function App() {
    const myProjects = [
        {
            title: 'Rick and morty App',
            img: 'https://tenor.googleapis.com/v2/media?id=4622616830546548677&format=optimizedgif&client_key=tenor_web&appversion=browser-r20230629-1&access_token=ya29.a0AbVbY6MRS2hWE6pm2-jMCtAi0HU7WBXxyzw4jbaMTmUz0DBzwvwIoQvAeHVQbHJiMZE0uPpOLDJIsXedGr5OAAeCPTFfqyKcJrLa9-GE8nDIAYYYLyrttsRsShwt0YDKZ5dSImR9mAu8bzy_4TP5tbRM0FPWaCgYKAZgSARESFQFWKvPlwnhgv8HfSguAsJDAw-OYMQ0163&key=AIzaSyC-P6_qz3FzCoXGLk6tgitZo4jEJ5mLzD8',
            desc: 'This frontend use Rick and morty API for list characters.',
            longDesc: 'Use React and github pages',
            link: 'https://camilo-17.github.io/rick-and-morty-app',
        },
        {
            title: 'Sveltestagram',
            img: 'https://tenor.googleapis.com/v2/media?id=2030027129968973399&format=optimizedgif&client_key=tenor_web&appversion=browser-r20230629-1&access_token=ya29.a0AbVbY6MRS2hWE6pm2-jMCtAi0HU7WBXxyzw4jbaMTmUz0DBzwvwIoQvAeHVQbHJiMZE0uPpOLDJIsXedGr5OAAeCPTFfqyKcJrLa9-GE8nDIAYYYLyrttsRsShwt0YDKZ5dSImR9mAu8bzy_4TP5tbRM0FPWaCgYKAZgSARESFQFWKvPlwnhgv8HfSguAsJDAw-OYMQ0163&key=AIzaSyC-P6_qz3FzCoXGLk6tgitZo4jEJ5mLzD8',
            desc: 'This is a clon for instagram.',
            longDesc: 'Use Svelte and news API for load resources',
            link: 'https://amazing-ptolemy-9ed655.netlify.app',
        },
        {
            title: 'Portfolio',
            img: 'https://tenor.googleapis.com/v2/media?id=4289354168806658599&format=optimizedgif&client_key=tenor_web&appversion=browser-r20230629-1&access_token=ya29.a0AbVbY6MRS2hWE6pm2-jMCtAi0HU7WBXxyzw4jbaMTmUz0DBzwvwIoQvAeHVQbHJiMZE0uPpOLDJIsXedGr5OAAeCPTFfqyKcJrLa9-GE8nDIAYYYLyrttsRsShwt0YDKZ5dSImR9mAu8bzy_4TP5tbRM0FPWaCgYKAZgSARESFQFWKvPlwnhgv8HfSguAsJDAw-OYMQ0163&key=AIzaSyC-P6_qz3FzCoXGLk6tgitZo4jEJ5mLzD8',
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
            classImg: 'image-app',
        },
        {
            title: 'Flutter codeLab',
            img: flutterPorject,
            desc: 'Flutter code lab boostraped to learn.',
            longDesc: 'Flutter',
            link: '',
            classImg: 'image-app',
        },
        {
            title: 'Flutter coin app',
            img: 'https://tenor.googleapis.com/v2/media?id=704287005785292458&format=optimizedgif&client_key=tenor_web&appversion=browser-r20230629-1&access_token=ya29.a0AbVbY6MRS2hWE6pm2-jMCtAi0HU7WBXxyzw4jbaMTmUz0DBzwvwIoQvAeHVQbHJiMZE0uPpOLDJIsXedGr5OAAeCPTFfqyKcJrLa9-GE8nDIAYYYLyrttsRsShwt0YDKZ5dSImR9mAu8bzy_4TP5tbRM0FPWaCgYKAZgSARESFQFWKvPlwnhgv8HfSguAsJDAw-OYMQ0163&key=AIzaSyC-P6_qz3FzCoXGLk6tgitZo4jEJ5mLzD8',
            desc: 'Flutter coin app developed consming coin gekko API.',
            longDesc: 'Flutter',
            link: '',
            classImg: 'image-app-2',
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
    const [showImag, setShowimg] = useState([]);

    useEffect(() => {
        // Update the document title using the browser API
        console.log('dsd', showImag);
    }, [showImag]);
    return (
        <div className="my-contendor">
            <Container>
                <NavExample></NavExample>
                <div className="hero-container">
                    <div className="img-container">
                        <img
                            className="img-profile"
                            style={showImag.length > 0 ? {} : { display: 'none' }}
                            src={ppImg}
                            alt="imagen-perfil"
                            onLoad={() => setShowimg([...showImag, true])}
                        />
                        {showImag.length === 0 && (
                            <Skeleton className="img-profile" width={200} height={200} circle={true} />
                        )}
                    </div>
                    <Hero></Hero>
                </div>

                <section id="projects" className="cards-container">
                    <h4>These are my projects</h4>
                    <div className="project-conta">
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
                        As a Fullstack Software Developer Engineer, I have extensive experience working with a
                        diverse range of technologies. I have worked with Angular, Node.js, React.js, Svelte,
                        Flutter, Ionic, NestJS, and Next.js, which have allowed me to build robust and
                        scalable web and mobile applications. Additionally, I have a strong background in IoT
                        technologies, enabling me to integrate software systems with connected devices
                        seamlessly. With a holistic understanding of both frontend and backend development, I
                        am proficient in designing efficient architectures, implementing RESTful APIs, and
                        ensuring seamless data flow between different components. My expertise in these
                        technologies and my passion for innovation enable me to deliver high-quality solutions
                        that meet the unique needs of each project.
                    </p>
                </section>
            </Container>
        </div>
    );
}

export default App;
