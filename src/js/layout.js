import React from "react";
import  {BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.jsx";

import {
    Home
} from "./views/home.jsx";
import {
    Demo
} from "./views/demo";
import {
    Single
} from "./views/single";
import injectContext from "./store/appContext";

import {
    Navbar
} from "./component/navbar.jsx";
import {
    Footer
} from "./component/footer.jsx";
import { DetailsPeople } from "./views/detailsPeople.jsx";
import { DetailsVehicle } from "./views/detailsVehicle.jsx";
import { DetailsPlanet } from "./views/detailsPlanet.jsx";
import { Login } from "./views/login.jsx";
import { Signup } from "./views/signup.jsx";


//create your first component
const Layout = () => {
        //the basename is used when your project is published in a subdirectory and not in the root of the domain
        // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
        const basename = process.env.BASENAME || "";

        return ( <div >
            <BrowserRouter basename = {basename} >
            <ScrollToTop >
            <div className="m-4" >
            <Navbar />
            </div>
            <Routes>
            <Route path = "/" element = { <Home /> } /> 
            <Route path = "/demo" element = {<Demo /> }/> 
            <Route path = "/detail-people/:id" element = {<DetailsPeople /> }/> 
            <Route path = "/detail-planet/:id" element = {<DetailsPlanet /> }/>
            <Route path = "/detail-vehicle/:id" element = {<DetailsVehicle /> }/> 
            <Route path = "/login" element = {<Login /> }/> 
            <Route path = "/signup" element = {<Signup /> }/> 
             <Route path = "/single/:theid" element = {<Single/>}/>  
              <Route path = "*" element = {<h1 > Not found! </h1>} />
                </Routes>  
                <Footer />
                </ScrollToTop> 
                </BrowserRouter > 
                </div>
            );
        };

        export default injectContext(Layout);