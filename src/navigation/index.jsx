import { BrowserRouter, Route, Routes } from "react-router-dom";

import Conference from "../pages/Conference";
import Congrats from "../pages/Congrats";


const Navigation = () => {
    return (
        <BrowserRouter>
            {/*<NavBar1 />*/}

            <Routes>
                <Route path="/" element={<Conference />} />
                <Route path="/congrats" element={<Congrats />} />

                
            </Routes>

        </BrowserRouter>


    )
}
export default Navigation;