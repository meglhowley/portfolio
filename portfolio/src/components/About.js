import React, { useReducer, useEffect } from 'react'
import HomeTransition2 from './HomeTransition2'

const iState = {
  backClicked: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'toggleHome':
      return { backClicked: !state.backClicked }
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
        <div className="left-side expand-about-left">
          <div className="bio-container">
            <img className="me" src="https://i.imgur.com/o6DSbUy.jpeg" />
            <div className="biography">
              <h2>
                Hey 👋&nbsp;I'm Meg.
                {/* <br />
                <span>I code things</span> */}
              </h2>
              <p>
                I am a full stack engineer with a passion for creating projects
                that emphasize both clean functionality, and mindful design.
                Financial professional turned coder, I bring 6 years of complex
                client knowledge to everything I build. I will partner with you
                to create scalable, beautiful code.
              </p>
            </div>
          </div>
        </div>
        <div onClick={handleClickedBack} className="back-about">
          <h1>{width >= 1000 ? '«' : '↟'} back</h1>
        </div>
        <div className="right-side expand-about-right"></div>
      </div>
    )
  } else {
    return <HomeTransition2 />
  }
}
export default Projects
