import Main from './Pages/Home.tsx'
import Error from './Pages/Error.tsx'
import Projects from "./Pages/Projects.tsx"
import Aboutme from "./Pages/Aboutme.tsx"
import Construction from "./Pages/Construction.tsx"
import './index.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Main />} />
                <Route path="projects" element={<Projects />} />
                <Route path="aboutme" element={<Aboutme />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};