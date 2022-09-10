import React from "react";
import { NavLink } from "react-router-dom";
import images from "../src/images/me.jpg";
const Home=() =>{
    return(
    <>
    <section id="header" className="d-flex align-items-center">
  < div className="container-fluid nav_bg">
    <div className="row">
        <div className="col-10 mx-auto ">
            <div className="row">
        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
            <h1>Hello  <strong className="brand-name">I am Prithiraj Saha </strong></h1>
            <h2 className="my-3">
                Web Developer
            </h2>
            <div className="mt-3">
                <NavLink to="/About" className="bin-get-started">Get started</NavLink>
            </div>
            
        </div>

        <div className="col-lg-6 order-1 order-lg-2 header img">
            < img  src={images}width="300px" alt="home-img" align="right"></img>
            </div>
        </div>
        </div>
            </div>
            </div>
            </section>
    </>
    );
};
export default Home;