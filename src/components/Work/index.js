import React, { Component } from "react";
import "./work.css";

class Work extends Component {

render()
 {
      
  return (
    <div>
      <div className="row">
        <div className="col s12">
          <h3>Projects</h3>
        </div>
      </div>

      {/* Start of work thumbnails section */}

      {/* Row 1 */}
      <div className="row work-row">
        {/* Row 1, Space 1 of 3 */}
        <div className="col s12 m6 l4">
          <div className="card trans-bg sticky-action">
            <div className="card-image waves-effect waves-block waves-light workpic-div">
              <img
                src="/assets/img/work/DreMartinez_thumb.jpg"
                alt="Dre Martinez"
                className="activator workpic responsive-img"
                width="100%"
              ></img>
            </div>
            <div className="card-content">
              <span className="card-title blue-grey-text text-darken-1">
                <a href="http://www.dremartinez.com" target="_blank" rel="noopener noreferrer">
                  DreMartinez.com
                </a>
                <i className="material-icons activator right">expand_less</i>
              </span>
            </div>
            <div className="card-title card-action left-align trans-bg blue-grey-text text-darken-1">
              GitHub: N/A
            </div>
            <div className="card-reveal">
              <span className="card-title blue-grey-text text-darken-1">
                Dre Martinez<i className="material-icons right">close</i>
              </span>
              <p className="blue-grey-text text-darken-1">
                Website for Miami, FL mixed media artist Andre Martinez, created with CMS
                Squarespace.
              </p>
            </div>
          </div>
        </div>

        {/* Row 1, Space 2 of 3 */}
        <div className="col s12 m6 l4">
          <div className="card trans-bg sticky-action">
            <div className="card-image waves-effect waves-block waves-light workpic-div">
              <img
                src="/assets/img/work/kairos_thumb.jpg"
                alt="kairos"
                className="activator workpic"
                width="100%"
              ></img>
            </div>
            <div className="card-content">
              <span className="card-title blue-grey-text text-darken-1">
                <a href="http://kairos2020.herokuapp.com" target="_blank" rel="noopener noreferrer">
                  kairos
                </a>
                <i className="material-icons activator right">expand_less</i>
              </span>
            </div>
            <div className="card-title card-action left-align trans-bg blue-grey-text text-darken-1">
              GitHub:{" "}
              <a
                href="https://github.com/bessygmartinez/kairos"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            </div>

            <div className="card-reveal">
              <span className="card-title blue-grey-text text-darken-1">
                kairos<i className="material-icons right">close</i>
              </span>
              <p className="blue-grey-text text-darken-1">
                A MERN stack web app to ease creation and maintenence of work schedules.
              </p>
              <small className="blue-grey-text text-darken-1">
                HTML5 • CSS3 • JavaScript • React • Node • Express • Mongoose • Passport • React
                Redux • bcrypt • jsonwebtoken • React Big Calendar • React-Toastify • Material
                Design for Bootstrap • Heroku
              </small>
            </div>
          </div>
        </div>

        {/* Row 1, Space 3 of 3 */}
        <div className="col s12 m6 l4">
          <div className="card trans-bg sticky-action">
            <div className="card-image waves-effect waves-block waves-light workpic-div">
              <img
                src="/assets/img/work/GoogleBooksSearch_thumb.jpg"
                alt="Google Books Search"
                className="activator workpic"
                width="100%"
              ></img>
            </div>
            <div className="card-content">
              <span className="card-title blue-grey-text text-darken-1">
                <a
                  href="https://warm-taiga-87514.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Books Search
                </a>
                <i className="material-icons activator right">expand_less</i>
              </span>
            </div>
            <div className="card-title card-action left-align blue-grey-text text-darken-1">
              GitHub:{" "}
              <a
                href="https://github.com/bessygmartinez/GoogleBooksSearch"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            </div>
            <div className="card-reveal">
              <span className="card-title blue-grey-text text-darken-1">
                Google Books Search<i className="material-icons right">close</i>
              </span>
              <p className="blue-grey-text text-darken-1">
                A web app to search for books via Google Books API, where you can store your
                favorites.
              </p>
              <small className="blue-grey-text text-darken-1">
                HTML • CSS • JavaScript • React • Node • Express • Mongoose • Materialize • MongoDB
                • Heroku
              </small>
            </div>
          </div>
        </div>
      </div>
      {/* End Row 1 */}

      {/* Row 2 */}
      <ul className="collapsible trans-bg">
          <li>
      <div className="collapsible-header blue-grey-text text-darken-1">
      <div className="row">
          <div className="col s12 m12 l12 center-align">More Projects...</div>
          </div><i className="material-icons">expand_more</i>
      </div>
      <div className="row collapsible-body">
        {/* Row 2, Space 1 of 3 */}
        <div className="col s12 m6 l4">
          <div className="card trans-bg sticky-action">
            <div className="card-image waves-effect waves-block waves-light workpic-div">
              <img
                src="/assets/img/work/DefunctDisney_thumb.jpg"
                alt="Defunct Disney"
                className="activator workpic responsive-img"
                width="100%"
              ></img>
            </div>
            <div className="card-content">
              <span className="card-title blue-grey-text text-darken-1">
                <a href="http://bessygmartinez.github.io/DefunctDisney" target="_blank" rel="noopener noreferrer">
                  Defunct Disney
                </a>
                <i className="material-icons activator right">expand_less</i>
              </span>
            </div>
            <div className="card-title card-action left-align trans-bg blue-grey-text text-darken-1">
              GitHub: <a href="https://github.com/bessygmartinez/DefunctDisney" target="_blank" rel="noopener noreferrer">Repo</a>
            </div>
            <div className="card-reveal">
              <span className="card-title blue-grey-text text-darken-1">
                Defunct Disney<i className="material-icons right">close</i>
              </span>
              <p className="blue-grey-text text-darken-1">
              A web app memory game featuring defunct rides from Walt Disney World.
              </p>
              <small className="blue-grey-text text-darken-1">
                HTML5 • CSS3 • JavaScript • React • Node • Express • Materialize • Heroku
              </small>
            </div>
          </div>
        </div>

        {/* Row 2, Space 2 of 3 */}
        <div className="col s12 m6 l4">
          <div className="card trans-bg sticky-action">
            <div className="card-image waves-effect waves-block waves-light workpic-div">
              <img
                src="/assets/img/work/RaspaElPlatano_thumb.jpg"
                alt="Raspa El Platano"
                className="activator workpic"
                width="100%"
              ></img>
            </div>
            <div className="card-content">
              <span className="card-title blue-grey-text text-darken-1">
                <a href="https://rocky-ocean-59342.herokuapp.com" target="_blank" rel="noopener noreferrer">
                  Raspa El Platano
                </a>
                <i className="material-icons activator right">expand_less</i>
              </span>
            </div>
            <div className="card-title card-action left-align trans-bg blue-grey-text text-darken-1">
              GitHub:{" "}
              <a
                href="https://github.com/bessygmartinez/RaspaElPlatano"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            </div>

            <div className="card-reveal">
              <span className="card-title blue-grey-text text-darken-1">
                Raspa El Platano<i className="material-icons right">close</i>
              </span>
              <p className="blue-grey-text text-darken-1">
              A web scraper app that takes the latest articles posted by The Plantain.
              </p>
              <small className="blue-grey-text text-darken-1">
                HTML5 • CSS3 • JavaScript • React • Node • Express • Express-Handlebars • Cheerio • Mongoose
                Morgan • Axios • MongoDB • Materialize • Heroku
              </small>
            </div>
          </div>
        </div>

        {/* Row 2, Space 3 of 3 */}

        <div className="col s12 m6 l4">
          <div className="card trans-bg sticky-action">
            <div className="card-image waves-effect waves-block waves-light workpic-div">
              <img
                src="/assets/img/work/Tempo_thumb.jpg"
                alt="Tempo"
                className="activator workpic"
                width="100%"
              ></img>
            </div>
            <div className="card-content">
              <span className="card-title blue-grey-text text-darken-1">
                <a
                  href="https://thegitdown.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tempo
                </a>
                <i className="material-icons activator right">expand_less</i>
              </span>
            </div>
            <div className="card-title card-action left-align blue-grey-text text-darken-1">
              GitHub:{" "}
              <a
                href="https://github.com/bessygmartinez/tempo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            </div>
            <div className="card-reveal">
              <span className="card-title blue-grey-text text-darken-1">
                Tempo<i className="material-icons right">close</i>
              </span>
              <p className="blue-grey-text text-darken-1">
              A full stack web app with centralized band data.
              </p>
              <small className="blue-grey-text text-darken-1">
                HTML5 • CSS3 • JavaScript • Node • Express • Express-Handlebars • MySQL • Bootstrap • Heroku
              </small>
            </div>
          </div>
        </div>
      </div>
      {/* </li>
      </ul> */}
      {/* End Row 2 */}

      {/* Row 3 */}
      {/* <ul className="collapsible trans-bg">
          <li> */}
          {/* <div className="collapsible-header blue-grey-text text-darken-1"><i className="material-icons">expand_more</i>
          <div className="row">
          <div className="col s12 m4 l4">Good Burger Log</div>
          <div className="col s12 m4 l4">Waifu Finder</div>
          <div className="col s12 m4 l4">Bamazon</div>
          </div>
      </div> */}
        <div className="row collapsible-body">
        {/* Row 3, Space 1 of 3 */}
        <div className="col s12 m6 l4">
          <div className="card trans-bg sticky-action">
            <div className="card-image waves-effect waves-block waves-light workpic-div">
              <img
                src="/assets/img/work/GoodBurger_thumb.jpg"
                alt="Good Burger Log"
                className="activator workpic responsive-img"
                width="100%"
              ></img>
            </div>
            <div className="card-content">
              <span className="card-title blue-grey-text text-darken-1">
                <a href="https://fierce-peak-44776.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                  Good Burger Log
                </a>
                <i className="material-icons activator right">expand_less</i>
              </span>
            </div>
            <div className="card-title card-action left-align trans-bg blue-grey-text text-darken-1">
              GitHub: <a href="https://github.com/bessygmartinez/Good-Burger" target="_blank" rel="noopener noreferrer">Repo</a>
            </div>
            <div className="card-reveal">
              <span className="card-title blue-grey-text text-darken-1">
                Good Burger Log<i className="material-icons right">close</i>
              </span>
              <p className="blue-grey-text text-darken-1">
              A full stack web app that logs burgers and burgers eaten.
              </p>
              <small className="blue-grey-text text-darken-1">
                HTML5 • CSS3 • JavaScript • Node • Express • MySQL • Bootstrap • Heroku
              </small>
            </div>
          </div>
        </div>

        {/* Row 3, Space 2 of 3 */}
        <div className="col s12 m6 l4">
          <div className="card trans-bg sticky-action">
            <div className="card-image waves-effect waves-block waves-light workpic-div">
              <img
                src="/assets/img/work/WaifuFinder_thumb.jpg"
                alt="Waifu Finder"
                className="activator workpic"
                width="100%"
              ></img>
            </div>
            <div className="card-content">
              <span className="card-title blue-grey-text text-darken-1">
                <a href="https://guarded-earth-21570.herokuapp.com" target="_blank" rel="noopener noreferrer">
                  Waifu Finder
                </a>
                <i className="material-icons activator right">expand_less</i>
              </span>
            </div>
            <div className="card-title card-action left-align trans-bg blue-grey-text text-darken-1">
              GitHub:{" "}
              <a
                href="https://github.com/bessygmartinez/WaifuFinder/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            </div>

            <div className="card-reveal">
              <span className="card-title blue-grey-text text-darken-1">
                Waifu Finder<i className="material-icons right">close</i>
              </span>
              <p className="blue-grey-text text-darken-1">
              A full stack web app game to find your best matched Waifu.
              </p>
              <small className="blue-grey-text text-darken-1">
                HTML5 • CSS3 • JavaScript • Node • Express • Bootstrap • Heroku
              </small>
            </div>
          </div>
        </div>

        {/* Row 3, Space 3 of 3 */}
        <div className="col s12 m6 l4">
          <div className="card trans-bg sticky-action">
            <div className="card-image waves-effect waves-block waves-light workpic-div">
              <img
                src="/assets/img/work/bamazonJS_thumb.jpg"
                alt="Bamazon"
                className="activator workpic"
                width="100%"
              ></img>
            </div>
            <div className="card-content">
              <span className="card-title blue-grey-text text-darken-1">
                <a
                  href="https://github.com/bessygmartinez/Bamazon/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bamazon
                </a>
                <i className="material-icons activator right">expand_less</i>
              </span>
            </div>
            <div className="card-title card-action left-align blue-grey-text text-darken-1">
              GitHub:{" "}
              <a
                href="https://github.com/bessygmartinez/Bamazon/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            </div>
            <div className="card-reveal">
              <span className="card-title blue-grey-text text-darken-1">
                Bamazon<i className="material-icons right">close</i>
              </span>
              <p className="blue-grey-text text-darken-1">
              A command line storefront app using Node.
              </p>
              <small className="blue-grey-text text-darken-1">
                JavaScript • Node • mysql.js • inquirer.js • cli-table.js • colors.js
              </small>
            </div>
          </div>
        </div>
      </div>
      {/* End Row 3 */}

      {/* Row 4 */}
      {/* <ul className="collapsible trans-bg">
          <li>
          <div className="collapsible-header blue-grey-text text-darken-1"><i className="material-icons">expand_more</i>
          <div className="row">
          <div className="col s12 m4 l4">LIRI</div>
          <div className="col s12 m4 l4">Scene It</div>
          <div className="col s12 m4 l4">Train Data Limited</div>
          </div>
          </div> */}
      <div className="row collapsible-body">
        {/* Row 4, Space 1 of 3 */}
        <div className="col s12 m6 l4">
          <div className="card trans-bg sticky-action">
            <div className="card-image waves-effect waves-block waves-light workpic-div">
              <img
                src="/assets/img/work/LIRIjs_thumb.jpg"
                alt="LIRI"
                className="activator workpic responsive-img"
                width="100%"
              ></img>
            </div>
            <div className="card-content">
              <span className="card-title blue-grey-text text-darken-1">
                <a href="https://bessygmartinez.github.io/liri-node-app/" target="_blank" rel="noopener noreferrer">
                  LIRI
                </a>
                <i className="material-icons activator right">expand_less</i>
              </span>
            </div>
            <div className="card-title card-action left-align trans-bg blue-grey-text text-darken-1">
              GitHub: <a href="https://bessygmartinez.github.io/liri-node-app/" target="_blank" rel="noopener noreferrer">Repo</a>
            </div>
            <div className="card-reveal">
              <span className="card-title blue-grey-text text-darken-1">
               LIRI<i className="material-icons right">close</i>
              </span>
              <p className="blue-grey-text text-darken-1">
              A command line Node app that takes in search parameters and returns data.
              </p>
              <small className="blue-grey-text text-darken-1">
                JavaScript • Node • Axios • Moment.js • Node-Spotify-API • BandsInTown API
              </small>
            </div>
          </div>
        </div>

        {/* Row 4, Space 2 of 3 */}
        <div className="col s12 m6 l4">
          <div className="card trans-bg sticky-action">
            <div className="card-image waves-effect waves-block waves-light workpic-div">
              <img
                src="/assets/img/work/SceneIt_thumb.jpg"
                alt="Scene It"
                className="activator workpic"
                width="100%"
              ></img>
            </div>
            <div className="card-content">
              <span className="card-title blue-grey-text text-darken-1">
                <a href="https://bessygmartinez.github.io/Scene-It/" target="_blank" rel="noopener noreferrer">
                  Scene It
                </a>
                <i className="material-icons activator right">expand_less</i>
              </span>
            </div>
            <div className="card-title card-action left-align trans-bg blue-grey-text text-darken-1">
              GitHub:{" "}
              <a
                href="https://github.com/bessygmartinez/Scene-It"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            </div>

            <div className="card-reveal">
              <span className="card-title blue-grey-text text-darken-1">
                Scene It<i className="material-icons right">close</i>
              </span>
              <p className="blue-grey-text text-darken-1">
              A web app to find movie recommendations and store your favorites.
              </p>
              <small className="blue-grey-text text-darken-1">
                HTML5 • CSS3 • JavaScript • jQuery • Bootstrap • Google Firebase • Moment.js
              </small>
            </div>
          </div>
        </div>

        {/* Row 4, Space 3 of 3 */}
        <div className="col s12 m6 l4">
          <div className="card trans-bg sticky-action">
            <div className="card-image waves-effect waves-block waves-light workpic-div">
              <img
                src="/assets/img/work/TheTrain_thumb.jpg"
                alt="Train Data Limited"
                className="activator workpic"
                width="100%"
              ></img>
            </div>
            <div className="card-content">
              <span className="card-title blue-grey-text text-darken-1">
                <a
                  href="https://bessygmartinez.github.io/TheTrain/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Train Data Limited
                </a>
                <i className="material-icons activator right">expand_less</i>
              </span>
            </div>
            <div className="card-title card-action left-align blue-grey-text text-darken-1">
              GitHub:{" "}
              <a
                href="https://github.com/bessygmartinez/TheTrain"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            </div>
            <div className="card-reveal">
              <span className="card-title blue-grey-text text-darken-1">
                Train Data Limited<i className="material-icons right">close</i>
              </span>
              <p className="blue-grey-text text-darken-1">
              A web app to create train schedules with data manipulation by Moment.js.
              </p>
              <small className="blue-grey-text text-darken-1">
                HTML5 • CSS3 • JavaScript • jQuery • Bootstrap • Google Firebase • Moment.js
              </small>
            </div>
          </div>
        </div>
      </div>
      {/* End Row 4 */}

      {/* Row 5 */}
      {/* <ul className="collapsible trans-bg">
          <li>
          <div className="collapsible-header blue-grey-text text-darken-1"><i className="material-icons">expand_more</i>
          <div className="row">
          <div className="col s12 m4 l4">Yas, Gawd!</div>
          <div className="col s12 m4 l4">Miami-Dade Trivia</div>
          <div className="col s12 m4 l4">Zelda Gem Collector</div>
          </div>
          </div> */}
        <div className="row collapsible-body">
        {/* Row 5, Space 1 of 3 */}
        <div className="col s12 m6 l4">
          <div className="card trans-bg sticky-action">
            <div className="card-image waves-effect waves-block waves-light workpic-div">
              <img
                src="/assets/img/work/YasGawd_thumb.jpg"
                alt="Yas, Gawd!"
                className="activator workpic"
                width="100%"
              ></img>
            </div>
            <div className="card-content">
              <span className="card-title blue-grey-text text-darken-1">
                <a
                  href="https://bessygmartinez.github.io/YasGawd-Giphy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yas, Gawd!
                </a>
                <i className="material-icons activator right">expand_less</i>
              </span>
            </div>
            <div className="card-title card-action left-align blue-grey-text text-darken-1">
              GitHub:{" "}
              <a
                href="https://github.com/bessygmartinez/YasGawd-Giphy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            </div>
            <div className="card-reveal">
              <span className="card-title blue-grey-text text-darken-1">
                Yas, Gawd!<i className="material-icons right">close</i>
              </span>
              <p className="blue-grey-text text-darken-1">
              A web app featuring Giphy gifs centered around Ru Paul's Drag Race.
              </p>
              <small className="blue-grey-text text-darken-1">
                HTML5 • CSS3 • JavaScript • jQuery • Bootstrap
                • Heroku
              </small>
            </div>
          </div>
        </div>

        {/* Row 5, Space 2 of 3 */}
        <div className="col s12 m6 l4">
          <div className="card trans-bg sticky-action">
            <div className="card-image waves-effect waves-block waves-light workpic-div">
              <img
                src="/assets/img/work/MiamiDadeBro_thumb.jpg"
                alt="Miami-Dade Trivia"
                className="activator workpic responsive-img"
                width="100%"
              ></img>
            </div>
            <div className="card-content">
              <span className="card-title blue-grey-text text-darken-1">
                <a href="https://bessygmartinez.github.io/TriviaGame/" target="_blank" rel="noopener noreferrer">
                  Miami-Dade Trivia
                </a>
                <i className="material-icons activator right">expand_less</i>
              </span>
            </div>
            <div className="card-title card-action left-align trans-bg blue-grey-text text-darken-1">
              GitHub: <a href="https://github.com/bessygmartinez/TriviaGame" target="_blank" rel="noopener noreferrer">Repo</a>
            </div>
            <div className="card-reveal">
              <span className="card-title blue-grey-text text-darken-1">
                Miami-Dade Trivia<i className="material-icons right">close</i>
              </span>
              <p className="blue-grey-text text-darken-1">
              A web app trivia game featuring facts centered on Miami, FL.
              </p>
              <small className="blue-grey-text text-darken-1">
                HTML5 • CSS3 • JavaScript • jQuery • Bootstrap
              </small>
            </div>
          </div>
        </div>

        {/* Row 5, Space 3 of 3 */}
        <div className="col s12 m6 l4">
          <div className="card trans-bg sticky-action">
            <div className="card-image waves-effect waves-block waves-light workpic-div">
              <img
                src="/assets/img/work/zeldagem_thumb.jpg"
                alt="Zelda Gem Collector"
                className="activator workpic"
                width="100%"
              ></img>
            </div>
            <div className="card-content">
              <span className="card-title blue-grey-text text-darken-1">
                <a href="https://bessygmartinez.github.io/Zelda-Gem-Collector" target="_blank" rel="noopener noreferrer">
                  Zelda Gem Collector
                </a>
                <i className="material-icons activator right">expand_less</i>
              </span>
            </div>
            <div className="card-title card-action left-align trans-bg blue-grey-text text-darken-1">
              GitHub:{" "}
              <a
                href="https://github.com/bessygmartinez/Zelda-Gem-Collector"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            </div>

            <div className="card-reveal">
              <span className="card-title blue-grey-text text-darken-1">
                Zelda Gem Collector<i className="material-icons right">close</i>
              </span>
              <p className="blue-grey-text text-darken-1">
                A web app numbers game.
              </p>
              <small className="blue-grey-text text-darken-1">
                HTML5 • CSS3 • JavaScript • jQuery • Bootstrap
              </small>
            </div>
          </div>
        </div>
      </div>
      {/* End Row 5 */}

      {/* Row 6 */}
      {/* <ul className="collapsible trans-bg">
          <li>
          <div className="collapsible-header blue-grey-text text-darken-1"><i className="material-icons">expand_more</i>
          <div className="row">
          <div className="col s12 m4 l4">Anime Guessing Game</div>
          <div className="col s12 m4 l4">Psychic Game</div>
          <div className="col s12 m4 l4"></div>
          </div>
          </div> */}
      <div className="row collapsible-body">
        {/* Row 6, Space 1 of 3 */}
        <div className="col s12 m6 l4">
          <div className="card trans-bg sticky-action">
            <div className="card-image waves-effect waves-block waves-light workpic-div">
              <img
                src="/assets/img/work/animegirl_thumb.png"
                alt="Anime Guessing Game"
                className="activator workpic"
                width="100%"
              ></img>
            </div>
            <div className="card-content">
              <span className="card-title blue-grey-text text-darken-1">
                <a
                  href="https://bessygmartinez.github.io/Anime-Guess-Game/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Anime Guessing Game
                </a>
                <i className="material-icons activator right">expand_less</i>
              </span>
            </div>
            <div className="card-title card-action left-align blue-grey-text text-darken-1">
              GitHub:{" "}
              <a
                href="https://github.com/bessygmartinez/Anime-Guess-Game"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            </div>
            <div className="card-reveal">
              <span className="card-title blue-grey-text text-darken-1">
                Anime Guessing Game<i className="material-icons right">close</i>
              </span>
              <p className="blue-grey-text text-darken-1">
              A web app guessing game featuring anime titles.
              </p>
              <small className="blue-grey-text text-darken-1">
                HTML5 • CSS3 • JavaScript • Bootstrap
              </small>
            </div>
          </div>
        </div>

        {/* Row 6, Space 2 of 3 */}
        <div className="col s12 m6 l4">
          <div className="card trans-bg sticky-action">
            <div className="card-image waves-effect waves-block waves-light workpic-div">
              <img
                src="/assets/img/work/PsychicGame_thumb.jpg"
                alt="Psychic Game"
                className="activator workpic"
                width="100%"
              ></img>
            </div>
            <div className="card-content">
              <span className="card-title blue-grey-text text-darken-1">
                <a href="https://bessygmartinez.github.io/Psychic-Game/" target="_blank" rel="noopener noreferrer">
                  Psychic Game
                </a>
                <i className="material-icons activator right">expand_less</i>
              </span>
            </div>
            <div className="card-title card-action left-align trans-bg blue-grey-text text-darken-1">
              GitHub:{" "}
              <a
                href="https://github.com/bessygmartinez/Psychic-Game"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo
              </a>
            </div>

            <div className="card-reveal">
              <span className="card-title blue-grey-text text-darken-1">
                Psychic Game<i className="material-icons right">close</i>
              </span>
              <p className="blue-grey-text text-darken-1">
              A web app guessing game.
              </p>
              <small className="blue-grey-text text-darken-1">
                HTML5 • CSS3 • JavaScript • Bootstrap
              </small>
            </div>
          </div>
        </div>

        {/* Row 6, Space 3 of 3 */}
        <div className="col s12 m6 l4">
        </div>
      </div>
      </li>
      </ul>
      {/* End Row 6 */}

      {/* End of work thumbnails section */}
          <div id="contact"></div>
    </div>
  );
}
}

export default Work;