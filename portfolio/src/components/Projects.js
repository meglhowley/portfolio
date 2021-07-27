import React, { useReducer, useEffect } from 'react'
import HomeTransition1 from './HomeTransition1'

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
  if (!state.backClicked) {
    return (
      <div className="wrapper">
        <div className="left-side expand-projects-left"></div>
        <div onClick={handleClickedBack} className="back-projects">
          <h1>back »</h1>
        </div>
        <div className="right-side expand-projects-right">
          <div className="projects-container">
            <div
              onClick={() => dispatch({ type: 'toggleTwentyTrendyClicked' })}
              className="upper-projects"
            >
              20TRENDY
              {!state.twentyTrendyClicked ? (
                <img
                  src="https://i.imgur.com/28nbjhC.png"
                  className="twenty-trendy"
                />
              ) : (
                <div className="description">
                  <br />
                  20TRENDY is a "doom scroll" through the year that changed life
                  as we have come to know it. 20TRENDY allows users to search
                  trending internet searches at different intervals through
                  2020, based on what was occuring at the time. It is a full
                  stack application with user authentication and a back-end
                  powered by pytrend, Google Trend's unofficial API.
                  <br />
                  <br />
                  <a
                    target="_blank"
                    href="https://github.com/meglhowley/20TRENDY"
                  >
                    View Code
                  </a>
                  <a
                    target="_blank"
                    href="https://60f875a7e75ade0007594057--goofy-wiles-ea6e08.netlify.app/"
                  >
                    View App
                  </a>
                </div>
              )}
            </div>
            <div
              onClick={() => dispatch({ type: 'toggleBopItClicked' })}
              className="upper-projects"
            >
              Bop It! Virtual
              {!state.bopItClicked ? (
                <img src="https://i.imgur.com/2iQisOd.png" className="bopit" />
              ) : (
                <div className="description">
                  <br />
                  Ignite your nostalgia with this Bop-it! virtual game, modeled
                  after the beloved 90's Hasbro toy. This Vanilla JS game offers
                  two game play modes: a conventional timed mode similar to
                  Hasbro's standard gameplay, and a memory-based game where all
                  that matters is sequence.
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
              )}
            </div>
            <div
              onClick={() => dispatch({ type: 'toggleHikeMeClicked' })}
              className="lower-projects"
            >
              hikeMe
              {!state.hikeMeClicked ? (
                <img src="https://i.imgur.com/aEvdtnr.png" className="hikeme" />
              ) : (
                <div className="description">
                  <br />
                  hikeME is an interactive full-stack hiking application that
                  allows users to browse Maine's best trails. Trail data
                  includes: GoogleMaps location data, elevation gain, length,
                  trail difficulty, weather conditions, and more. User features
                  of hikeME include searching the database, adding/deleting
                  comments on trails, contributing trails to the collection,
                  browsing upcoming lunar and celestial events, and more.
                  <br />
                  <br />
                  <a
                    target="_blank"
                    href="https://github.com/meglhowley/hikeME"
                  >
                    View Code
                  </a>
                  <a
                    target="_blank"
                    href="https://sleepy-bastion-09248.herokuapp.com/"
                  >
                    View App
                  </a>
                </div>
              )}
            </div>
            <div
              onClick={() => dispatch({ type: 'toggleBBBClicked' })}
              className="lower-projects"
            >
              B^3
              {!state.bbbClicked ? (
                <img src="https://i.imgur.com/X35dbUA.png" className="barber" />
              ) : (
                <div className="description">
                  Barber-Shop Booking is a fully-functional, ready-made barber
                  solution with user authentication that allows clients to sign
                  up, sign in, and book appointments with a specified stylist
                  for a variety of services. As an alternative to relying on 3rd
                  party booking apps like Booksy, Barber-shop offers
                  entrepreneurs and shop owners alike the ability to book
                  appointments directly with their future guests. Guests will
                  enjoy a simple user experience with a calendar of options that
                  drills down to an array of 60 min time slots, filtered by
                  their preferred stylist.
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
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return <HomeTransition1 />
  }
}
export default Projects
