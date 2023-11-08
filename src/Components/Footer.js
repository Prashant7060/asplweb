import React from "react";
// import React, { createContext, useContext } from 'react';
import { Link } from 'react-router-dom';



function Footer() {

     return(
        <>
        <footer>
        <div className='container footer1'>
    <div className='footer'>
                <h2 className="text-uppercase">About Us</h2>
                
                <ul className="list-unstyled">
                    <li><Link to="/about us">Home</Link></li>
                    <li> Why Us</li>
                    <li>Performance Management</li>
                    <li>Employee Engagement</li>
                    <li>Work Force Analytics</li>
                </ul>
                
            </div>

            {/* <hr className="clearfix w-100 d-md-none pb-0"/> */}

            <div className='footer'>
                <h2 className="text-uppercase">What We Do</h2>
                <ul className="list-unstyled">
                    <li>Application service</li>
                    <li>Cloud Service</li>
                    <li>Financial SErvice</li>
                </ul>
            </div>

            <div className='footer'>
                <h2 className="text-uppercase">Career</h2>
                <ul className="list-unstyled">
                    <li>Corporate Traning</li>
                    <li>Industrail Training </li>
                    <li>Training & development</li>
                </ul>
            </div>
            </div>
            </footer>
          

</>
    );
}

export default Footer;