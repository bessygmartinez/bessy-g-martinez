import React from "react";
import "./skills.css";
import cloud1 from "./cloud1.svg";
import drop from "./drop.svg";

function Skills() {
    return (
        <div className="skills">
        <div className="designer">
            <div className="cloud1-svg hide-me vibrate-3">
                <img src={cloud1} alt="cloud" className="cloud1 hide-me"></img>
            </div>
            <h3 className="hide-me">
                Designer
            </h3>
            <p className="hide-me">
               I've been a Freelance Graphic Designer for over 15 years and value clean design models, straighforward
               content format, and meaningful interactions. Being creative fuels my work.
            </p>
        </div>

        <div className="developer">
            <div className="cloud2-svg vibrate-2 hide-me">
                <img src={cloud1} alt="cloud" className="cloud1 flip-cloud hide-me"></img>
            </div>
            <h3 className="clearfix hide-me">
                Developer
            </h3>
            <p className="hide-me">
                I love to code and watch it come to life in the browser. Some of the languages
                I use and continue to develop are HTML5, CSS3, JavaScript, and SQL. I also work with React, JSX, jQuery,
                Node, Express, MySQL, MongoDB, Express Handlebars, Passport, JWT, and am familiar with GitHub and Heroku, among
                other technologies.
            </p>
        </div>

        <div className="coffee-addict">
            <div className="cloud3-svg vibrate-3 hide-me">
                <img src={cloud1} alt="cloud" className="cloud1 hide-me"></img>
            </div>
            <h3 className="clearfix hide-me">
                Coffee Addict
            </h3>
            <p className="hide-me">
                I know I said that creativity fuels my work, but it's actually coffee. Coffee fuels my work.
            </p>
        </div>



                    <div className="cloud4-svg hide-me clearfix" >
                    <img src={cloud1} alt="rain cloud" className="cloud2 vibrate-2 hide-me"></img>
                    </div>

                <div className="ac-animated-svg-icon ac-svg-animated ac-svg-shadow rain" >
				<div className="ac-animated-svg-icon-contents rain" id="work">
				<div className="ac-animated-svg-cloudrain rain" >
                <img src={drop} alt="drop" className="svg-drop svg-drop-1"></img>
                <img src={drop} alt="drop" className="svg-drop svg-drop-2"></img>
                <img src={drop} alt="drop" className="svg-drop svg-drop-3"></img>
                <img src={drop} alt="drop" className="svg-drop svg-drop-4"></img>
                <img src={drop} alt="drop" className="svg-drop svg-drop-5"></img>
                <img src={drop} alt="drop" className="svg-drop svg-drop-6"></img>

                </div>
                </div>
                </div>
                </div>

    )
}

export default Skills;