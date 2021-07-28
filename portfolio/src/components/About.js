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
            <div>
              <div>
                <img className="me" src="https://i.imgur.com/3fWXOMb.jpeg" />
              </div>
              <div className="socials">
                <div>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/megan-l-howley-4b568199/"
                  >
                    <img
                      className="linkedin"
                      src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                    />
                  </a>
                </div>
                <div>
                  <a target="_blank" href="https://github.com/meglhowley">
                    <img
                      className="github"
                      src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"
                    />
                  </a>
                </div>
                <div>
                  <a href="mailto:meglhowley@gmail.com" subject="HTML link">
                    <img
                      className="email"
                      src="https://i.pinimg.com/originals/8f/c3/7b/8fc37b74b608a622588fbaa361485f32.png"
                    />
                  </a>
                </div>
              </div>
              <br />
            </div>
            <div className="biography">
              <h2>Hey 👋&nbsp;I'm Meg.</h2>
              <p>
                I am a full stack engineer with a passion for creating projects
                that emphasize clean functionality and mindful design. Financial
                professional turned coder, I bring 6 years of complex client
                knowledge to everything I build. I will partner with you to
                create scalable, beautiful code. <br />
              </p>
              <a href="../uploads/Resume.pdf" target="_blank">
                {' '}
                hi{' '}
              </a>
              <div className="download-div">
                <img
                  className="download"
                  src="https://image.flaticon.com/icons/png/512/1091/1091673.png"
                />
                &nbsp;DOWNLOAD RESUME
              </div>
            </div>
          </div>

          <div className="skills-contact">
            <div>
              <h3>languages</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Python</li>
              </ul>
            </div>
            <div>
              <h3>front-end</h3>
            </div>
            <div>
              <h3>back-end</h3>
            </div>
            <div>
              <h3>dev-tools</h3>
            </div>
          </div>
          <footer>
            <div className="contact-me">LET'S CREATE. CONTACT ME.</div>{' '}
            {/* <div className="socials">
              <div>
                <img
                  className="linkedin"
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                />
              </div>
              <div>
                <img
                  className="github"
                  src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"
                />
              </div>
              <div>
                <img
                  className="email"
                  src="https://i.pinimg.com/originals/8f/c3/7b/8fc37b74b608a622588fbaa361485f32.png"
                />
              </div>
            </div> */}
          </footer>
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
