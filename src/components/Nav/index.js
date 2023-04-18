import React from "react";
import $ from "jquery";
import "./nav.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

class Nav extends React.Component {
  handleToggle = () => {
    const bar = $(".bar");
    const head = $(".head");
    const navitems = $(".nav-items");
    const navbg = $(".nav-bg");
    const navwrap = $(".nav-wrap");

    $(bar).toggleClass("active");
    $(head).toggleClass("active");
    $(navitems).toggleClass("active");
    $(navbg).toggleClass("active");
    $(navwrap).toggleClass("active");
  };

  render() {
    return (
      <div className="head">
          <div className="nav-items">
              <div className="nav-col">
                  <h2>About Me</h2>
                  <AnchorLink href="#about-me" onClick={this.handleToggle}><p>Who am I?</p></AnchorLink>
              </div>
              <div className="nav-col">
                  <h2>Projects</h2>
                  <AnchorLink href="#work" onClick={this.handleToggle}><p>Here are my projects</p></AnchorLink>
              </div>
              <div className="nav-col nav-col-contact">
                  <h2>Contact</h2>
                  <AnchorLink href="#contact" onClick={this.handleToggle}><p>Drop Me A Line</p></AnchorLink>
              </div>
              <div className="nav-col nav-col-icons">
              <a href="https://www.linkedin.com/in/bessygmartinez/" target="_blank" rel="noopener noreferrer"
              className="tooltipped" data-position="top" data-tooltip="LinkedIn">
                 <ion-icon name="logo-linkedin" size="large"></ion-icon></a> &nbsp;&nbsp;

             <a href="https://github.com/bessygmartinez" target="_blank" rel="noopener noreferrer"
             className="tooltipped" data-position="top" data-tooltip="GitHub">
             <ion-icon name="logo-github" size="large"></ion-icon></a> &nbsp;&nbsp;

             <AnchorLink href="#contact" onClick={this.handleToggle}
             className="tooltipped" data-position="top" data-tooltip="Send a Message">
             <ion-icon name="mail-sharp" size="large"></ion-icon></AnchorLink>
              </div>
          </div>
          <div className="nav-bg"></div>
          <div className="nav-wrap"></div>
        <div className="nav-div" onClick={this.handleToggle}>
          <div className="bar first"></div>
          <div className="bar second"></div>
          <div className="bar third"></div>
        </div>
      </div>
    );
  }
}

export default Nav;