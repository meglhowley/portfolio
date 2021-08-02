import React, { useReducer, useEffect } from 'react'
import HomeTransition2 from './HomeTransition2'
import { Modal } from 'react-rainbow-components'

const iState = {
  backClicked: false,
  modalOpen: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'toggleHome':
      return { backClicked: !state.backClicked }
    case 'toggleModalOpen':
      return { modalOpen: !state.modalOpen }
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
                <img className="me" src="https://i.imgur.com/W7WcxRu.png" />
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
              <a href="myresume.pdf" download="MeganHowleyResume">
                <div className="download-div">
                  <img
                    className="download"
                    src="https://image.flaticon.com/icons/png/512/1091/1091673.png"
                  />
                  &nbsp;DOWNLOAD RESUME
                </div>
              </a>
            </div>
          </div>

          <div className="skills-contact">
            <div>
              <h3>languages</h3>
              <ul>
                <li>HTML5</li>
                <li>JavaScript</li>
                <li>ES6</li>
                <li>Python</li>
              </ul>
            </div>
            <div>
              <h3>front-end</h3>
              <ul>
                <li>CSS3</li>
                <li>DOM</li>
                <li>React</li>
                <li>React Hooks</li>
                <li>React Redux</li>
                <li>Node.js</li>
                <li>Express.js</li>
              </ul>
            </div>
            <div>
              <h3>back-end/ORMs</h3>
              <ul>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>PosGreSQL</li>
                <li>Sequelize</li>
                <li>Flask</li>
                <li>SQLAlchemy</li>
              </ul>
            </div>
            <div>
              <h3>dev-tools</h3>
              <ul>
                <li>Git/Github</li>
                <li>Heroku</li>
                <li>CLI Terminal</li>
                <li>Netlify</li>
                <li>Inspect Dev Tools</li>
                <li>React/Redux Dev Tools</li>
              </ul>
            </div>
          </div>
          <footer>
            <div
              onClick={() => dispatch({ type: 'toggleModalOpen' })}
              className="contact-me"
            >
              LET'S CREATE- CONTACT ME
            </div>{' '}
          </footer>
        </div>
        <div onClick={handleClickedBack} className="back-about">
          <h1>{width >= 1000 ? '«' : '↟'} back</h1>
        </div>
        <div>
          <Modal
            isOpen={state.modalOpen}
            onRequestClose={() => dispatch({ type: 'toggleModalOpen' })}
          >
            <div className="contact-div">
              <h3>Send A Message Here</h3>
              <form name="contact" method="POST" data-netlify="true">
                <input placeholder="YOUR NAME"></input>
                <br />
                <input placeholder="YOUR EMAIL"></input>
                <br />
                <textarea name="message" placeholder="MESSAGE"></textarea>
                <br />
                <button type="submit">SEND</button>
              </form>
              <h4>
                Or you can email me direct at:{' '}
                <a href="mailto:meglhowley@gmail.com">meglhowley@gmail.com</a>
              </h4>
            </div>
          </Modal>
        </div>
        <div className="right-side expand-about-right"></div>
      </div>
    )
  } else {
    return <HomeTransition2 />
  }
}
export default Projects
