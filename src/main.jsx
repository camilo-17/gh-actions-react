import { createRoot } from 'react-dom/client';
import App from './App';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
