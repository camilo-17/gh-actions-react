import { Container, Row, Col } from 'shards-react';
import NavExample from './components/Navbar';
import ProyectCard from './components/Card';
import Hero from './components/Hero';
import './App.css';
import Skeleton from 'react-loading-skeleton';
import ppImg from '../assets/pp.jpg';
import Courses from './components/Courses';
import 'react-loading-skeleton/dist/skeleton.css';
import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL, listAll } from 'firebase/storage';

function App() {
    const firebaseConfig = {
        apiKey: import.meta.env.API_KEY,
        authDomain: 'flutter-booksky.firebaseapp.com',
        projectId: 'flutter-booksky',
        storageBucket: 'flutter-booksky.appspot.com',
        messagingSenderId: '720062944985',
        appId: import.meta.env.API_ID,
    };

    const [files, setFiles] = useState([]);
    const [myProjects, setMyProjects] = useState([]);
    const [myCourses, setMyCourses] = useState([]);
    // let myProjects = [];

    useEffect(() => {
        if (files.length === 0) {
            return;
        }
        const newMyProjects = [
            {
                title: 'Rick and morty App',
                img: files.find((element) => element.includes('rick')),
                desc: 'This frontend use Rick and morty API for list characters.',
                longDesc: 'Use React and github pages',
                link: 'https://camilo-17.github.io/rick-and-morty-app',
            },
            {
                title: 'Sveltestagram',
                img: files.find((element) => element.includes('svlete')),
                desc: 'This is a clon for instagram.',
                longDesc: 'Use Svelte and news API for load resources',
                link: 'https://amazing-ptolemy-9ed655.netlify.app',
            },
            {
                title: 'Portfolio',
                img: files.find((element) => element.includes('portfolio_new')),
                desc: 'This is my portfolio.',
                longDesc: 'Desing to show all personal and freelance projects.',
                link: 'https://camilocaro.com',
            },
            {
                title: 'Ionic speed test App',
                img: files.find((element) => element.includes('ionic')),
                desc: 'Speedtest app developed during a freelance project.',
                longDesc: 'Use Ionic, cordova and capacitor',
                link: '',
                classImg: 'image-app',
            },
            {
                title: 'Flutter codeLab',
                img: files.find((element) => element.includes('flutter.gif')),
                desc: 'Flutter code lab boostraped to learn.',
                longDesc: 'Flutter',
                link: '',
                classImg: 'image-app',
            },
            {
                title: 'Flutter coin app',
                img: files.find((element) => element.includes('coin_app')),
                desc: 'Flutter coin app developed consming coin gekko API.',
                longDesc: 'Flutter',
                link: '',
                classImg: 'image-app-2',
            },
        ];
        const newmyCourses = [
            {
                title: 'Big data & Machine Learning',
                img: files.find((element) => element.includes('bigdata_ml')),
            },
            {
                title: 'Virtual Machine',
                img: files.find((element) => element.includes('maquinas_virtuales')),
            },
            {
                title: 'Angular',
                img: files.find((element) => element.includes('angular')),
            },
            {
                title: 'docker',
                img: files.find((element) => element.includes('docker')),
            },
            {
                title: 'Python',
                img: files.find((element) => element.includes('python')),
            },
            {
                title: 'firebase',
                img: files.find((element) => element.includes('firebase.png')),
            },
            {
                title: 'Profesional de JS',
                img: files.find((element) => element.includes('js.png')),
            },
        ];
        setMyProjects(newMyProjects);
        setMyCourses(newmyCourses);
    }, [files]);

    const app = initializeApp(firebaseConfig);

    const fetchImages = async () => {
        const storage = getStorage();
        const listRef = await listAll(ref(storage, 'portfolio'));
        let urlPromises = listRef.items.map((imageRef) => getDownloadURL(imageRef));

        return Promise.all(urlPromises);
    };

    const loadImages = async () => {
        const urls = await fetchImages();
        setFiles(urls);
    };
    if (files.length === 0) {
        loadImages();
    }
    const [showImag, setShowimg] = useState([]);

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
