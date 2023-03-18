import React from 'react';
import {JWTProvider as AuthProvider} from './contexts/JWTContext';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import {ReduxPersisted} from "./store";
import Routes from './routes';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ReduxPersisted>
        <BrowserRouter>
            <AuthProvider>
                <Routes/>
            </AuthProvider>
        </BrowserRouter>
    </ReduxPersisted>
);
