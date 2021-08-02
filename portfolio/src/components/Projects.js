import React, { useReducer, useEffect } from 'react'
import HomeTransition1 from './HomeTransition1'
import Flickity from 'react-flickity-component'

const iState = {
  backClicked: false,
  hikeMeClicked: false,
  bopItClicked: false,
  bbbClicked: false,
  twentyTrendyClicked: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'toggleHome':
      return { backClicked: !state.backClicked }
    case 'toggleHikeMeClicked':
      return { hikeMeClicked: !state.hikeMeClicked }
    case 'toggleBopItClicked':
      return { bopItClicked: !state.bopItClicked }
    case 'toggleBBBClicked':
      return { bbbClicked: !state.bbbClicked }
    case 'toggleTwentyTrendyClicked':
      return { twentyTrendyClicked: !state.twentyTrendyClicked }
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
          <h1>back {width >= 1000 ? '»' : '↡'}</h1>
        </div>
        <div className="right-side expand-projects-right">
          {!state.twentyTrendyClicked &&
          !state.hikeMeClicked &&
          !state.bopItClicked &&
          !state.bbbClicked ? (
            <div className="projects-container">
              <div className="upper-proj1-container">
                <div
                  onClick={() =>
                    dispatch({ type: 'toggleTwentyTrendyClicked' })
                  }
                  className="project-card twenty"
                ></div>
                20TRENDY
              </div>
              <div className="upper-proj2-container">
                <div
                  onClick={() => dispatch({ type: 'toggleBopItClicked' })}
                  className="project-card bop"
                ></div>
                Bop It! Virtual
              </div>
              <div className="lower-proj1-container">
                <div
                  onClick={() => dispatch({ type: 'toggleHikeMeClicked' })}
                  className="project-card hike"
                ></div>
                hikeME
              </div>
              <div className="lower-proj2-container">
                <div
                  onClick={() => dispatch({ type: 'toggleBBBClicked' })}
                  className="project-card bbb"
                ></div>
                BarberBooking
              </div>{' '}
            </div>
          ) : state.twentyTrendyClicked ? (
            <div className="description-container">
              <h4
                onClick={() => dispatch({ type: 'toggleTwentyTrendyClicked' })}
              >
                Back
              </h4>
              <br />
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
              <br />
              <a target="_blank" href="https://github.com/meglhowley/20TRENDY">
                <div className="view">View Code</div>
              </a>
              <a
                target="_blank"
                href="https://60f875a7e75ade0007594057--goofy-wiles-ea6e08.netlify.app/"
              >
                <div className="view">View App</div>
              </a>
            </div>
          ) : state.bopItClicked ? (
            <div className="description-container">
              {' '}
              <h4 onClick={() => dispatch({ type: 'toggleBopItClicked' })}>
                Back
              </h4>
              <br />
              Ignite your nostalgia with this Bop-it! virtual game, modeled
              after the beloved 90's Hasbro toy. This Vanilla JS game offers two
              game play modes: a conventional timed mode similar to Hasbro's
              standard gameplay, and a memory-based game where all that matters
              is sequence.
              <br />
              <br />
              <a
                target="_blank"
                href="https://github.com/meglhowley/Bop-It-Virtual"
              >
                View Code
              </a>
              <a
                target="_blank"
                href="http://bop-it-virtual.surge.sh/index.html"
              >
                View App
              </a>
            </div>
          ) : state.hikeMeClicked ? (
            <div className="description-container">
              {' '}
              <h4 onClick={() => dispatch({ type: 'toggleHikeMeClicked' })}>
                Back
              </h4>
              <br />
              hikeME is an interactive full-stack hiking application that allows
              users to browse Maine's best trails. Trail data includes:
              GoogleMaps location data, elevation gain, length, trail
              difficulty, weather conditions, and more. User features of hikeME
              include searching the database, adding/deleting comments on
              trails, contributing trails to the collection, browsing upcoming
              lunar and celestial events, and more.
              <br />
              <br />
              <a target="_blank" href="https://github.com/meglhowley/hikeME">
                View Code
              </a>
              <a
                target="_blank"
                href="https://sleepy-bastion-09248.herokuapp.com/"
              >
                View App
              </a>
            </div>
          ) : state.bbbClicked ? (
            <div className="description-container">
              {' '}
              <h4 onClick={() => dispatch({ type: 'toggleBBBClicked' })}>
                Back
              </h4>
              Barber-Shop Booking is a fully-functional, ready-made barber
              solution with user authentication that allows clients to sign up,
              sign in, and book appointments with a specified stylist for a
              variety of services. As an alternative to relying on 3rd party
              booking apps like Booksy, Barber-shop offers entrepreneurs and
              shop owners alike the ability to book appointments directly with
              their future guests. Guests will enjoy a simple user experience
              with a calendar of options that drills down to an array of 60 min
              time slots, filtered by their preferred stylist.
              <br />
              <br />
              <a
                target="_blank"
                href="https://github.com/meglhowley/barber-shop"
              >
                View Code
              </a>
              <a
                target="_blank"
                href="https://infinite-temple-92107.herokuapp.com/"
              >
                View App
              </a>{' '}
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
