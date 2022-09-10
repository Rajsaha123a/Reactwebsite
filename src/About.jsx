import React from "react";
import { NavLink } from "react-router-dom";
import images from "../src/images/me.jpg";



    

const About =() =>{
    return (
    <>
       <section id="header" className="d-flex align-items-center">
  < div className="container-fluid nav_bg">
    <div className="row">
        <div className="col-10 mx-auto ">
            <div className="row">
        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
            <h1>  <strong className="brand-name"> I am Prithiraj Saha</strong></h1>
            
            <div id="About"className="button">
            
                  <p>I am currently studying in B.Tech 4th Semester in Electronics and Instrumentation Engineering at National Institute of Technology Agartala. I am motivated to learn Common Software topics & Competitive Programming(In C++).
                     <br></br>I have also learned HTML, CSS, JAVA SCRIPT and made a few small project websites with the help of these. 
                <br></br>I am also a very focused and always give my full concentration and time to any task given to me. 
                  <br></br>I am looking for real world experience in any IT Firms. Thanks for reading .</p>
                     
           </div>
            <div className="mt-3">
                <NavLink to="/Contact" className="bin-get-started">Get started</NavLink>
            </div>
            
        </div>
        <div className="col-lg-6 order-1 order-lg-2 header img">
            < img  src={images}width="250px" alt="About-img"  align="right"></img>
            </div>
        </div>
        </div>
            </div>
            </div>
            </section>
    </>
    );
};
export default About;