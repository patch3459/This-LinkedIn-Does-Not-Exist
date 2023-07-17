/*
    RootLayout.jsx

    Layout for all pages
*/

import { Outlet } from "react-router-dom";

// components
import {Header} from "../Header.jsx";
import {Footer} from "../Footer.jsx";

export function RootLayout() {

    return (
        <div>
            <Header />
                <Outlet />
            <Footer />
        </div>
    );
}