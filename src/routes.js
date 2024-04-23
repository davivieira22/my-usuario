import React from "react";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './Conteiner/home';
import User from './Conteiner/users';


function MyRouter()  {
    return ( 
    <Router>


        <Routes>
            <Route  path="/" element={<Home/>} />

            <Route  path="/usuarios" element={<User/>} />

        </Routes>




    </Router>


    )



}






export default MyRouter;