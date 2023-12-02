import Main from './Pages/Home.tsx'
import Error from './Pages/Error.tsx'
import Construction from "./Pages/Construction.tsx"
import './index.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Main />} />
                <Route path="projects" element={<Construction />} />
                <Route path="hobbies" element={<Construction />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
};