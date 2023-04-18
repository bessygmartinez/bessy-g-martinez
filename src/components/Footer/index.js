import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./footer.css";

class Footer extends Component {
    
render()
    {
         
     return (
         <div className="footright">
             <a href="https://www.linkedin.com/in/bessygmartinez/" target="_blank" rel="noopener noreferrer"
             className="tooltipped" data-position="left" data-tooltip="LinkedIn">
                 <ion-icon name="logo-linkedin" size="large"></ion-icon></a>
             <br></br>
             <a href="https://github.com/bessygmartinez" target="_blank" rel="noopener noreferrer"
             className="tooltipped" data-position="left" data-tooltip="GitHub">
             <ion-icon name="logo-github" size="large"></ion-icon></a>
             <br></br>
             <AnchorLink href="#contact"
             className="tooltipped" data-position="left" data-tooltip="Send a Message">
             <ion-icon name="mail-sharp" size="large"></ion-icon></AnchorLink>
         </div>
        );
    }
}

export default Footer;