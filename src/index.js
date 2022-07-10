import React from 'react';
import ReactDom from 'react-dom';
import App from './App.js';
import './index.css';
import { ResultContextProvider } from './contexts/ResultContextProvider';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDom.render(
    <ResultContextProvider>
        <Router>
            <App />
        </Router>
    </ResultContextProvider>
    , document.getElementById('root'));