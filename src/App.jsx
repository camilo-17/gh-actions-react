import { useState } from 'react';
import './App.css';
import 'shards-ui/dist/css/shards.min.css';
import AlertComponent from './components/Alert';

function App() {
    return (
        <div className="App">
            <AlertComponent></AlertComponent>
        </div>
    );
}

export default App;
