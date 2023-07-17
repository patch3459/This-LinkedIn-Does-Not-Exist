/*
    index.js

    Injection point for the react app. Also using
    react router

*/
import { react } from "react";
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// importing the app
import App from "./components/App.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />);