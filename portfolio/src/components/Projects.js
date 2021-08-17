import React, { useReducer, useEffect } from 'react'
import HomeTransition1 from './HomeTransition1'
import Flickity from 'react-flickity-component'

const iState = {
  backClicked: false,
  hikeMeClicked: false,
  bopItClicked: false,
  bbbClicked: false,
  twentyTrendyClicked: false,
  calculatorClicked: false,
  recipesClicked: false,
  moviesClicked: false,
  byoAdventureClicked: false,
  pageOneClicked: true,
  pageTwoClicked: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'toggleHome':
      return { ...state, backClicked: !state.backClicked }
    case 'toggleHikeMeClicked':
      return { ...state, hikeMeClicked: !state.hikeMeClicked }
    case 'toggleBopItClicked':
      return { ...state, bopItClicked: !state.bopItClicked }
    case 'toggleBBBClicked':
      return { ...state, bbbClicked: !state.bbbClicked }
    case 'toggleTwentyTrendyClicked':
      return { ...state, twentyTrendyClicked: !state.twentyTrendyClicked }
    case 'toggleMoviesClicked':
      return { ...state, moviesClicked: !state.moviesClicked }
    case 'toggleCalculatorClicked':
      return { ...state, calculatorClicked: !state.calculatorClicked }
    case 'toggleRecipesClicked':
      return { ...state, recipesClicked: !state.recipesClicked }
    case 'toggleByoAdventureClicked':
      return { ...state, byoAdventureClicked: !state.byoAdventureClicked }
    case 'togglePageOneClicked':
      return { ...state, pageOneClicked: !state.pageOneClicked }
    case 'togglePageTwoClicked':
      return { ...state, pageTwoClicked: !state.pageTwoClicked }
    default:
      return state
  }
}

function Projects() {
  const [state, dispatch] = useReducer(reducer, iState)

  const handleClickedBack = () => {
    dispatch({ type: 'toggleHome' })
  }

  const width = window.innerWidth

  if (!state.backClicked) {
    return (
      <div className="wrapper">
        <div className="left-side expand-projects-left"></div>
        <div onClick={handleClickedBack} className="back-projects">
          <h1>BACK &nbsp;{width >= 800 ? '»' : '↡'}</h1>
        </div>
        <div className="right-side expand-projects-right">
          {!state.twentyTrendyClicked &&
          !state.hikeMeClicked &&
          !state.bopItClicked &&
          !state.bbbClicked &&
          state.pageOneClicked &&
          !state.pageTwoClicked ? (
            <div className="main-project-div">
              <div className="next one"> &lt; </div>
              <div className="projects-container">
                <div className="upper-proj1-container">
                  <h3>20TRENDY</h3>
                  <div
                    onClick={() =>
                      dispatch({ type: 'toggleTwentyTrendyClicked' })
                    }
                    className="project-card twenty"
                  ></div>
                </div>
                <div className="upper-proj2-container">
                  <h3> BOP IT! VIRTUAL</h3>
                  <div
                    onClick={() => dispatch({ type: 'toggleBopItClicked' })}
                    className="project-card bop"
                  ></div>
                </div>
                <div className="lower-proj1-container">
                  <h3>HIKE•ME</h3>
                  <div
                    onClick={() => dispatch({ type: 'toggleHikeMeClicked' })}
                    className="project-card hike"
                  ></div>
                </div>
                <div className="lower-proj2-container">
                  <h3> BARBER BOOKING</h3>
                  <div
                    onClick={() => dispatch({ type: 'toggleBBBClicked' })}
                    className="project-card bbb"
                  ></div>
                </div>{' '}
              </div>
              <div
                onClick={() => dispatch({ type: 'togglePageTwoClicked' })}
                className="next two"
              >
                &gt;
              </div>
            </div>
          ) : state.twentyTrendyClicked ? (
            <div className="description-container">
              <div className="view-buttons">
                <a
                  target="_blank"
                  href="https://60f875a7e75ade0007594057--goofy-wiles-ea6e08.netlify.app/"
                >
                  <div className="view">
                    VIEW SITE &nbsp;
                    <img
                      className="app"
                      src="https://i.imgur.com/PzRdaOR.png"
                    />
                  </div>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/meglhowley/20TRENDY"
                >
                  <div className="view">
                    VIEW CODE &nbsp;
                    <img
                      className="code"
                      src="https://i.imgur.com/09DzI81.png"
                    />
                  </div>
                </a>
              </div>
              <div>
                <Flickity>
                  <img
                    className="project-pic"
                    src="https://camo.githubusercontent.com/1067d0e9ceaf96ba3e01fe34b68743bb779e84c4a951c13729f13484b6350ed7/68747470733a2f2f692e696d6775722e636f6d2f303352444d35352e706e67"
                  />
                  <img
                    className="project-pic"
                    src="https://i.imgur.com/ahfiBxs.png"
                  />
                  <img
                    className="project-pic"
                    src="https://i.imgur.com/6WdWR5N.png"
                  />
                  <img
                    className="project-pic"
                    src="https://i.imgur.com/Vk5SUzW.png"
                  />
                  <img
                    className="project-pic"
                    src="https://i.imgur.com/5xN5d5z.png"
                  />
                  <img
                    className="project-pic"
                    src="https://i.imgur.com/DCGiHIu.png"
                  />
                </Flickity>
              </div>
              <div className="main-bio">
                20TRENDY is a "doom scroll" through the year that changed life
                as we have come to know it. 20TRENDY allows users to search
                trending internet searches at different intervals through 2020,
                based on what was occuring at the time. It is a full stack
                application with user authentication and a back-end powered by
                pytrend, Google Trend's unofficial API.
              </div>
              <br />
              <div className="main-bio tech-stack">
                <b>
                  <i>Technologies Used</i> <br />
                </b>
                <div>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-react-original-wordmark"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-javascript-plain"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-css3-plain-wordmark"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-redux-original"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-npm-original-wordmark"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-python-plain-wordmark"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-postgresql-plain-wordmark"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-flask-original-wordmark colored"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-sqlalchemy-original-wordmark colored"
                  ></i>{' '}
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-vscode-plain-wordmark"
                  ></i>
                </div>
                <br />
                <br />
              </div>
              <div
                className="view back"
                onClick={() => dispatch({ type: 'toggleTwentyTrendyClicked' })}
              >
                BACK TO PROJECTS &nbsp;
                <img
                  className="back-arrow"
                  src="https://i.imgur.com/wLEU1iD.png"
                />
              </div>
              <br />
            </div>
          ) : state.bopItClicked ? (
            <div className="description-container">
              <div className="view-buttons">
                <a
                  target="_blank"
                  href="http://bop-it-virtual.surge.sh/index.html"
                >
                  <div className="view">
                    VIEW SITE &nbsp;
                    <img
                      className="app"
                      src="https://i.imgur.com/PzRdaOR.png"
                    />
                  </div>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/meglhowley/Bop-It-Virtual"
                >
                  <div className="view">
                    VIEW CODE &nbsp;
                    <img
                      className="code"
                      src="https://i.imgur.com/09DzI81.png"
                    />
                  </div>
                </a>
              </div>
              <div>
                <Flickity>
                  <img
                    className="project-pic"
                    src="https://i.imgur.com/q9dIsoY.png"
                  />
                  <img
                    className="project-pic"
                    src="https://i.imgur.com/3UC9arN.png"
                  />
                  <img
                    className="project-pic"
                    src="https://i.imgur.com/RYqiWIA.png"
                  />
                </Flickity>
              </div>
              <div className="main-bio">
                Ignite your nostalgia with this Bop-it! virtual game, modeled
                after the beloved 90's Hasbro toy. This Vanilla JS game offers
                two game play modes: a conventional timed mode similar to
                Hasbro's standard gameplay, and a memory-based game where all
                that matters is sequence. **<u>Warning:</u> Dance Party Mode is
                not suitable for those with photosensitivity.
              </div>
              <br />
              <div className="main-bio tech-stack">
                <b>
                  <i>Technologies Used</i> <br />
                </b>
                <div>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-html5-plain-wordmark"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-javascript-plain"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-css3-plain-wordmark"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-vscode-plain-wordmark"
                  ></i>
                </div>
                <br />
                <br />
              </div>
              <div
                className="view back"
                onClick={() => dispatch({ type: 'toggleBopItClicked' })}
              >
                BACK TO PROJECTS &nbsp;
                <img
                  className="back-arrow"
                  src="https://i.imgur.com/wLEU1iD.png"
                />
              </div>
              <br />
            </div>
          ) : state.hikeMeClicked ? (
            <div className="description-container">
              <div className="view-buttons">
                <a
                  target="_blank"
                  href="https://sleepy-bastion-09248.herokuapp.com/"
                >
                  <div className="view">
                    VIEW SITE &nbsp;
                    <img
                      className="app"
                      src="https://i.imgur.com/PzRdaOR.png"
                    />
                  </div>
                </a>
                <a target="_blank" href="https://github.com/meglhowley/hikeME">
                  <div className="view">
                    VIEW CODE &nbsp;
                    <img
                      className="code"
                      src="https://i.imgur.com/09DzI81.png"
                    />
                  </div>
                </a>
              </div>
              <div>
                <Flickity>
                  <img
                    className="project-pic"
                    src="https://i.imgur.com/ERYNfU3.png"
                  />
                  <img
                    className="project-pic"
                    src="https://camo.githubusercontent.com/563588474b74db682507dca96e594b34cd1519c4ecd1f327e9083e2a5d0ec2a0/68747470733a2f2f692e696d6775722e636f6d2f526569743255512e706e67"
                  />
                  <img
                    className="project-pic"
                    src="https://camo.githubusercontent.com/7478e894879bc793d5f05b7e313fd1bdb48fe4ad6fb92b9b72c06a5ca49d37fd/68747470733a2f2f692e696d6775722e636f6d2f6f75357a6a35462e706e67"
                  />
                  <img
                    className="project-pic"
                    src="https://i.imgur.com/P1dVffz.png"
                  />
                </Flickity>
              </div>
              <div className="main-bio">
                hikeME is an interactive full-stack hiking application that
                allows users to browse Maine's best trails, built using the MERN
                stack: Mongoose/Express/ React/Node.js. Trail data includes:
                GoogleMaps location data, elevation gain, length, trail
                difficulty, weather conditions, and more. User features of
                hikeME include searching the database, adding/deleting comments
                on trails, contributing trails to the collection, browsing
                upcoming lunar & celestial events, and more.
              </div>
              <br />
              <div className="main-bio tech-stack">
                <b>
                  <i>Technologies Used</i> <br />
                </b>
                <div>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-react-original-wordmark"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-javascript-plain"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-css3-plain-wordmark"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-npm-original-wordmark"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-express-original"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-mongodb-plain-wordmark"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-postgresql-plain-wordmark"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-sequelize-plain-wordmark"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-vscode-plain-wordmark"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-nodejs-plain-wordmark"
                  ></i>
                </div>
                <br />
                <br />
              </div>
              <div
                className="view back"
                onClick={() => dispatch({ type: 'toggleHikeMeClicked' })}
              >
                BACK TO PROJECTS &nbsp;
                <img
                  className="back-arrow"
                  src="https://i.imgur.com/wLEU1iD.png"
                />
              </div>
              <br />
            </div>
          ) : state.bbbClicked ? (
            <div className="description-container">
              <div className="view-buttons">
                <a
                  target="_blank"
                  href="https://infinite-temple-92107.herokuapp.com/"
                >
                  <div className="view">
                    VIEW SITE &nbsp;
                    <img
                      className="app"
                      src="https://i.imgur.com/PzRdaOR.png"
                    />
                  </div>
                </a>
                <a
                  target="_blank"
                  href=" https://github.com/meglhowley/barber-shop"
                >
                  <div className="view">
                    VIEW CODE &nbsp;
                    <img
                      className="code"
                      src="https://i.imgur.com/09DzI81.png"
                    />
                  </div>
                </a>
              </div>
              <div>
                <Flickity>
                  <img
                    className="project-pic"
                    src="https://camo.githubusercontent.com/29b626a72a9300a4ca65d5bad2e8eb484c4dfcb06280ed92f852070ba21daf38/68747470733a2f2f696d6775722e636f6d2f70526f633772692e6a7067"
                  />
                  <img
                    className="project-pic"
                    src="https://i.imgur.com/7kdEiba.png"
                  />
                  <img
                    className="project-pic"
                    src="https://camo.githubusercontent.com/1d3c3d2478076d23a6e097fe0a305da1ad333ca67275375960446bf5614d1191/68747470733a2f2f696d6775722e636f6d2f486c37555769722e6a7067"
                  />
                  <img
                    className="project-pic"
                    src="https://i.imgur.com/C64ojAH.png"
                  />
                  <img
                    className="project-pic"
                    src="https://i.imgur.com/6r1nCpy.png"
                  />
                </Flickity>
              </div>
              <div className="main-bio">
                Barber-Shop Booking is a fully-functional, ready-made barber
                solution with user authentication that allows clients to sign
                up, sign in, and book appointments with a specified stylist for
                a variety of services. This application was built using the PERN
                stack: PostgreSQL/Express/React/Node.js. The database was
                created/managed using PostgreSQL (psql), in tandem with
                Sequelize as the promise-based ORM library. A RESTful API was
                created and called on using Axios. Front-end was built out using
                React (with Hooks) / Functional Components/ CSS/ & JSX. The
                web/server framework was built using Express.
              </div>
              <br />
              <div className="main-bio tech-stack">
                <b>
                  <i>Technologies Used</i> <br />
                </b>
                <div>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-react-original-wordmark"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-javascript-plain"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-css3-plain-wordmark"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-npm-original-wordmark"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-express-original"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-postgresql-plain-wordmark"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-sequelize-plain-wordmark"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-vscode-plain-wordmark"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-nodejs-plain-wordmark"
                  ></i>
                </div>
                <br />
                <br />
              </div>
              <div
                className="view back"
                onClick={() => dispatch({ type: 'toggleBBBClicked' })}
              >
                BACK TO PROJECTS &nbsp;
                <img
                  className="back-arrow"
                  src="https://i.imgur.com/wLEU1iD.png"
                />
              </div>
              <br />
            </div>
          ) : state.calculatorClicked ? (
            <div className="description-container">
              <div className="view-buttons">
                <a
                  target="_blank"
                  href="https://vibrant-blackwell-061f00.netlify.app/"
                >
                  <div className="view">
                    VIEW SITE &nbsp;
                    <img
                      className="app"
                      src="https://i.imgur.com/PzRdaOR.png"
                    />
                  </div>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/meglhowley/u3_hw_react_hooks_calculator"
                >
                  <div className="view">
                    VIEW CODE &nbsp;
                    <img
                      className="code"
                      src="https://i.imgur.com/09DzI81.png"
                    />
                  </div>
                </a>
              </div>
              <div>
                <Flickity>
                  <img
                    className="project-pic"
                    src="https://i.imgur.com/2m7TlGK.png"
                  />
                  <img
                    className="project-pic"
                    src="https://i.imgur.com/AcJSQPW.png"
                  />
                </Flickity>
              </div>
              <div className="main-bio">
                Simple, elegant calculator built in one night after learning
                React Hooks for the first time. A clone of the Apple calculator,
                it can perform all major mathematical operations-
                multiplication, division, addition, and subtraction, including
                fractional numbers. Enjoy a simple clear button in top left to
                zero out.
              </div>
              <br />
              <div className="main-bio tech-stack">
                <b>
                  <i>Technologies Used</i> <br />
                </b>
                <div>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-react-original-wordmark"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-javascript-plain"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-css3-plain-wordmark"
                  ></i>

                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-npm-original-wordmark"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-vscode-plain-wordmark"
                  ></i>
                </div>
                <br />
                <br />
              </div>
              <div
                className="view back"
                onClick={() => dispatch({ type: 'toggleCalculatorClicked' })}
              >
                BACK TO PROJECTS &nbsp;
                <img
                  className="back-arrow"
                  src="https://i.imgur.com/wLEU1iD.png"
                />
              </div>
              <br />
            </div>
          ) : state.recipesClicked ? (
            <div className="description-container">
              <div className="view-buttons">
                <a
                  target="_blank"
                  href="https://epic-nightingale-1fb5f9.netlify.app/"
                >
                  <div className="view">
                    VIEW SITE &nbsp;
                    <img
                      className="app"
                      src="https://i.imgur.com/PzRdaOR.png"
                    />
                  </div>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/meglhowley/u3_lab_react_recipes"
                >
                  <div className="view">
                    VIEW CODE &nbsp;
                    <img
                      className="code"
                      src="https://i.imgur.com/09DzI81.png"
                    />
                  </div>
                </a>
              </div>
              <div>
                <Flickity>
                  <img
                    className="project-pic"
                    src="https://i.imgur.com/yj6O0R5.png"
                  />
                  <img
                    style={{ width: '75vh' }}
                    className="project-pic"
                    src="https://i.imgur.com/7EKgzah.png"
                  />
                </Flickity>
              </div>
              <div className="main-bio">
                Recipe and Nutrition search engine application built in 1 day
                using the
                <u>
                  <a href="https://developer.edamam.com/?gclid=CjwKCAjwmK6IBhBqEiwAocMc8r-Iigulyc-YjwvreQM9j75beO0ShgIcVDw2JEvFmaEAY3tDxH598BoCin0QAvD_BwE">
                    Edamam Api
                  </a>
                </u>
                . This application was built using React Hooks like useState,
                useEffect, and useReducer, along with a simple single-page
                rendering. API calls were fetched using Axios.
              </div>
              <br />
              <div className="main-bio tech-stack">
                <b>
                  <i>Technologies Used</i> <br />
                </b>
                <div>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-react-original-wordmark"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-javascript-plain"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-css3-plain-wordmark"
                  ></i>

                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-npm-original-wordmark"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-vscode-plain-wordmark"
                  ></i>
                </div>
                <br />
                <br />
              </div>
              <div
                className="view back"
                onClick={() => dispatch({ type: 'toggleRecipesClicked' })}
              >
                BACK TO PROJECTS &nbsp;
                <img
                  className="back-arrow"
                  src="https://i.imgur.com/wLEU1iD.png"
                />
              </div>
              <br />
            </div>
          ) : state.moviesClicked ? (
            <div className="description-container">
              <div className="view-buttons">
                <a
                  target="_blank"
                  href="https://cranky-mcnulty-bfae11.netlify.app/"
                >
                  <div className="view">
                    VIEW SITE &nbsp;
                    <img
                      className="app"
                      src="https://i.imgur.com/PzRdaOR.png"
                    />
                  </div>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/meglhowley/u4_lab_redux_movies"
                >
                  <div className="view">
                    VIEW CODE &nbsp;
                    <img
                      className="code"
                      src="https://i.imgur.com/09DzI81.png"
                    />
                  </div>
                </a>
              </div>
              <div>
                <Flickity>
                  <img
                    className="project-pic"
                    src="https://i.imgur.com/Z5fRFa3.png"
                  />
                  <img
                    className="project-pic"
                    src="https://i.imgur.com/CkHaBde.png"
                  />
                  <img
                    className="project-pic"
                    src="https://i.imgur.com/4qb79KD.png"
                  />
                  <img
                    className="project-pic"
                    src="https://i.imgur.com/Ff3NOi6.png"
                  />
                </Flickity>
              </div>
              <div className="main-bio">
                Flick Finder is a movie search engine built in 1 day using the
                <u>
                  <a href="https://www.themoviedb.org/documentation/api?language=en-US">
                    TMDB (The Movie DataBase)
                  </a>
                </u>
                API. This application was built using React Redux for more
                complex state management. Flick Finder allows users to search
                any movie from the TMDB database, view details such as Release
                Date, Duration, and Plot bios, add or remove movies from their
                watch list, and browse the latest trending movies. The code
                includes a services directory to handle all Axios calls. The app
                also use a store, reducers, types, and actions for overall state
                management between components.
              </div>
              <br />
              <div className="main-bio tech-stack">
                <b>
                  <i>Technologies Used</i>{' '}
                </b>
                <div>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-react-original-wordmark"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-redux-original"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-javascript-plain"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-css3-plain-wordmark"
                  ></i>

                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-npm-original-wordmark"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-vscode-plain-wordmark"
                  ></i>
                </div>
                <br />
                <br />
              </div>
              <div
                className="view back"
                onClick={() => dispatch({ type: 'toggleMoviesClicked' })}
              >
                BACK TO PROJECTS &nbsp;
                <img
                  className="back-arrow"
                  src="https://i.imgur.com/wLEU1iD.png"
                />
              </div>
              <br />
            </div>
          ) : state.byoAdventureClicked ? (
            <div className="description-container">
              <div className="view-buttons">
                <a
                  target="_blank"
                  href="https://github.com/meglhowley/u4_hw_python_adventure"
                >
                  <div className="view">
                    VIEW CODE &nbsp;
                    <img
                      className="code"
                      src="https://i.imgur.com/09DzI81.png"
                    />
                  </div>
                </a>
              </div>
              <div>
                <Flickity>
                  <img
                    className="project-pic"
                    src="https://i.imgur.com/eBQBmxl.png"
                  />
                  <img
                    className="project-pic"
                    src="https://i.imgur.com/0kZClvc.png"
                  />
                  <img
                    className="project-pic"
                    src="https://i.imgur.com/TeAiXXi.png"
                  />
                  <img
                    className="project-pic"
                    src="https://i.imgur.com/0oDMEdg.png"
                  />
                </Flickity>
              </div>
              <div className="main-bio">
                A build your own CLI Terminal adventure game inspired by The
                Legend of Zelda: Ocarina of Time built using Python only.
                Accepts user input for the direction of the game - including a
                challenge to recreate Epona's Song to secure a horse, locate and
                obtain the Master Sword, and battle Gannon to save Hyrule.
                <br /> <br />
                To play: 1) Fork and clone Github repository onto your local
                machine 2) Inside the main directory, run command "python3
                main.py" 3) Build out Link's destiny!
              </div>
              <br />
              <div className="main-bio tech-stack">
                <b>
                  <i>Technologies Used</i> <br />
                  <br />
                </b>
                <div>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-python-plain-wordmark"
                  ></i>
                  <i
                    style={{ fontSize: width >= 800 ? '4em' : '2.5em' }}
                    class="devicon-vscode-plain-wordmark"
                  ></i>
                </div>
                <br />
                <br />
              </div>
              <div
                className="view back"
                onClick={() => dispatch({ type: 'toggleByoAdventureClicked' })}
              >
                BACK TO PROJECTS &nbsp;
                <img
                  className="back-arrow"
                  src="https://i.imgur.com/wLEU1iD.png"
                />
              </div>
              <br />
            </div>
          ) : state.pageTwoClicked ? (
            <div className="main-project-div">
              <div
                onClick={() => dispatch({ type: 'togglePageTwoClicked' })}
                className="next three"
              >
                {' '}
                &lt;{' '}
              </div>
              <div className="projects-container">
                <div className="upper-proj1-container">
                  <h3>REACT CALCULATOR</h3>
                  <div
                    onClick={() =>
                      dispatch({ type: 'toggleCalculatorClicked' })
                    }
                    className="project-card calculator"
                  ></div>
                </div>
                <div className="upper-proj2-container">
                  <h3> RECIPE SEARCH</h3>
                  <div
                    onClick={() => dispatch({ type: 'toggleRecipesClicked' })}
                    className="project-card recipe"
                  ></div>
                </div>
                <div className="lower-proj1-container">
                  <h3>FLICK FINDER</h3>
                  <div
                    onClick={() => dispatch({ type: 'toggleMoviesClicked' })}
                    className="project-card movies"
                  ></div>
                </div>
                <div className="lower-proj2-container">
                  <h3>BYO ADVENTURE</h3>
                  <div
                    onClick={() =>
                      dispatch({ type: 'toggleByoAdventureClicked' })
                    }
                    className="project-card zelda"
                  ></div>
                </div>{' '}
              </div>
              <div
                onClick={() => dispatch({ type: 'togglePageTwoClicked' })}
                className="next two"
              >
                &gt;
              </div>
            </div>
          ) : null}
        </div>
      </div>
    )
  } else {
    return <HomeTransition1 />
  }
}
export default Projects
