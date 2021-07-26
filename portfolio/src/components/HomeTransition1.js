import React, { useReducer, useEffect } from 'react'
import About from './About'
import Projects from './Projects'

const iState = {
  projectsClicked: false,
  aboutClicked: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'toggleProjects':
      return { ...state, projectsClicked: !state.projectsClicked }
    case 'toggleAbout':
      return { ...state, aboutClicked: !state.aboutClicked }
    default:
      return state
  }
}

function HomeTransition1() {
  const [state, dispatch] = useReducer(reducer, iState)

  const handleClickedProjects = () => {
    dispatch({ type: 'toggleProjects' })
  }

  const handleClickedAbout = () => {
    dispatch({ type: 'toggleAbout' })
  }

  useEffect(() => {}, [])

  if (!state.projectsClicked && !state.aboutClicked) {
    return (
      <div className="wrapper">
        <div className="left-side transition1-left">
          <div className="box about" onClick={handleClickedAbout}>
            about »
          </div>
          <div className="title">
            <h1>
              hi, i'm
              <br />
              meg.
            </h1>
          </div>
        </div>
        <div className="right-side transition1-right">
          <div className="box projects" onClick={handleClickedProjects}>
            « projects
          </div>
        </div>
      </div>
    )
  } else if (state.projectsClicked) {
    return <Projects />
  } else if (state.aboutClicked) {
    return <About />
  }
}

export default HomeTransition1
