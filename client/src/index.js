import React from 'react';
import {createRoot}from 'react-dom/client';
import './index.css';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';



const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <RouterProvider router={ router } />
);