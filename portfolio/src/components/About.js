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
  if (!state.backClicked) {
    return (
      <div className="wrapper">
        <div className="left-side expand-about-left"></div>
        <div onClick={handleClickedBack} className="back-about">
          <h1>« back</h1>
        </div>
        <div className="right-side expand-about-right"></div>
      </div>
    )
  } else {
    return <HomeTransition2 />
  }
}
export default Projects
