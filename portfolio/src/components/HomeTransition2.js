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

function HomeTransition2(props) {
  const [state, dispatch] = useReducer(reducer, iState)

  const handleClickedProjects = () => {
    dispatch({ type: 'toggleProjects' })
  }

  const handleClickedAbout = () => {
    dispatch({ type: 'toggleAbout' })
  }

  const width = window.innerWidth

  useEffect(() => {}, [])

  if (!state.projectsClicked && !state.aboutClicked) {
    return (
      <div className="wrapper">
        <div
          className="left-side transition2-left"
          style={{
            backgroundColor: !props.darkMode
              ? 'rgba(241, 255, 86, 255)'
              : 'rgba(0, 0, 0, 0.822)',
            color: !props.darkMode ? 'black' : 'rgb(202, 202, 202)'
          }}
        >
          <div
            className="box about"
            style={{
              backgroundColor: !props.darkMode
                ? 'transparent'
                : 'rgb(156, 156, 156)'
            }}
            onClick={handleClickedAbout}
          >
            a b o u t &nbsp; m e &nbsp; {width >= 1020 ? '»' : '↡'}
          </div>
          <div
            className="title-line1"
            style={{
              color: !props.darkMode
                ? 'rgba(20, 20, 20, 0.747)'
                : 'rgb(156, 156, 156)'
            }}
          >
            <h1>Hello,</h1>
            <br />
          </div>
          <div className="me-pic animate__animated animate__backInDown"></div>
          <div
            className="title-line2"
            style={{
              color: !props.darkMode
                ? 'rgba(20, 20, 20, 0.747)'
                : 'rgb(156, 156, 156)'
            }}
          >
            <h1>sup.</h1>
          </div>
        </div>
        <div
          className="right-side transition2-right"
          style={{
            backgroundColor: !props.darkMode ? 'white' : 'rgb(46, 90, 104)'
          }}
        >
          <div
            className="box projects"
            style={{
              backgroundColor: !props.darkMode
                ? 'transparent'
                : 'rgb(156, 156, 156)'
            }}
            onClick={handleClickedProjects}
          >
            {width >= 1020 ? '«' : '↟'} &nbsp; p r o j e c t s
          </div>
        </div>
      </div>
    )
  } else if (state.projectsClicked) {
    return <Projects darkMode={props.darkMode} />
  } else if (state.aboutClicked) {
    return <About darkMode={props.darkMode} />
  }
}

export default HomeTransition2
