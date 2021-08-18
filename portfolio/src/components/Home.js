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

function Home(props) {
  const [state, dispatch] = useReducer(reducer, iState)

  const handleClickedProjects = () => {
    dispatch({ type: 'toggleProjects' })
  }

  const handleClickedAbout = () => {
    dispatch({ type: 'toggleAbout' })
  }

  const width = window.innerWidth

  console.log(props.darkMode)

  useEffect(() => {}, [])

  if (!state.projectsClicked && !state.aboutClicked) {
    return (
      <div className="wrapper">
        <div
          className={!props.darkMode ? 'left-side' : 'left-side dark-mode-left'}
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
            <h1>hey.</h1>
          </div>
        </div>
        <div
          className={
            !props.darkMode ? 'right-side' : 'right-side dark-mode-right'
          }
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
            {width >= 1000 ? '«' : '↟'} &nbsp; p r o j e c t s
          </div>
        </div>
      </div>
    )
  } else if (state.aboutClicked) {
    return <About darkMode={props.darkMode} />
  } else if (state.projectsClicked) {
    return <Projects darkMode={props.darkMode} />
  }
}

export default Home
