import React, { useReducer, useEffect } from 'react'
import HomeTransition1 from './HomeTransition1'

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
  if (!state.backClicked) {
    return (
      <div className="wrapper">
        <div className="left-side expand-projects-left"></div>
        <div onClick={handleClickedBack} className="back-projects">
          <h1>back »</h1>
        </div>
        <div className="right-side expand-projects-right">
          <div className="projects-container">
            <div>
              <img src="https://i.imgur.com/aEvdtnr.png" className="hikeme" />
            </div>
            <div>
              <img src="https://i.imgur.com/2iQisOd.png" className="bopit" />
            </div>
            <div>
              <img src="https://i.imgur.com/SHjFwmO.png" className="recipes" />
            </div>
            <div>
              <img src="https://i.imgur.com/X35dbUA.png" className="recipes" />
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
