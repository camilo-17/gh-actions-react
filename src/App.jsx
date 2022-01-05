import { useState } from 'react';
import AlertComponent from './components/Alert';
import { Container, Row, Col } from 'shards-react';

import './App.css';
import 'shards-ui/dist/css/shards.min.css';

function App() {
    return (
        <Container>
            <Row>
                <Col sm="6" lg="6">
                    <AlertComponent />
                </Col>
            </Row>
            <Row>
                <Col sm="6" lg="6">
                    <p>Hola mundo</p>
                </Col>
            </Row>
            <Row>
                <Col sm="6" lg="6">
                    <p>Hola </p>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
