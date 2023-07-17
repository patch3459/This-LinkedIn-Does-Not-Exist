/* 
    App.jsx 

    Has the app's router using react router dom
*/
import react from "react";
import {
    createBrowserRouter, 
    createRoutesFromElements,
    Route, 
    RouterProvider
  } from 'react-router-dom';

// layout
import { RootLayout } from "./layouts/RootLayout.jsx";

// pages
import { RandomProfile } from "./pages/RandomProfile.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<RandomProfile />} />
        </Route>
    )
);

export default function App() {
    return (
        <RouterProvider router={router} />
    );
}