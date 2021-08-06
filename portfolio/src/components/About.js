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
          {/* <footer>
            <div className="socials">
              <div>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/megan-l-howley-4b568199/"
                >
                  <img
                    className="linkedin"
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                  />{' '}
                  <span>LINKEDIN</span>
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
          </footer> */}
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
