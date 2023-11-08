import React from "react";

import {Link,useNavigate} from "react-router-dom";

function NavBar(){

    
    return(
        <div className="navbar">
            <img src='https://th.bing.com/th?id=OIP.xfh04ZqPFsbPmTi1IKyF3AHaHb&w=249&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
             alt='logo' className="logo" />
             <ul className="nav-ul">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about us">About Us</Link></li>
                <li><Link to="/service">Service</Link></li>
                <li><Link to="/contact us">Contact us</Link></li>

            </ul>
            
           <h3 > AtmaSamman Institute Of Management & Technology</h3>
        </div>
    )
}

export default NavBar;