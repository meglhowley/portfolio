import React, { useReducer, useEffect } from "react";
import HomeTransition2 from "./HomeTransition2";
import { Modal, ProgressStep } from "react-rainbow-components";

const iState = {
  backClicked: false,
  modalOpen: false,
  techClicked: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "toggleHome":
      return { backClicked: !state.backClicked };
    case "toggleModalOpen":
      return { modalOpen: !state.modalOpen };
    case "toggleTechClicked":
      return { techClicked: !state.techClicked };
    default:
      return state;
  }
};

function Projects(props) {
  const [state, dispatch] = useReducer(reducer, iState);

  const handleClickedBack = () => {
    dispatch({ type: "toggleHome" });
  };

  const width = window.innerWidth;

  if (!state.backClicked) {
    return (
      <div className="wrapper">
        <div
          className="left-side expand-about-left"
          style={{
            backgroundColor: !props.darkMode
              ? "rgba(241, 255, 86, 255)"
              : "rgba(0, 0, 0, 0.822)",
            color: !props.darkMode ? "black" : "rgb(202, 202, 202)",
          }}
        >
          <div className="side-nav">
            {" "}
            <div className="social-container">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/megan-l-howley-4b568199/"
              >
                <img
                  className="linkedin"
                  src="https://i.imgur.com/9MmHVbl.png"
                />{" "}
                <div className="social-text">LINKEDIN</div>
              </a>
            </div>
            <div className="social-container">
              <a target="_blank" href="https://github.com/meglhowley">
                <img
                  className="github "
                  src="https://i.imgur.com/etFOyI6.png"
                />
                <div className="social-text">GITHUB</div>
              </a>
            </div>
            <div className="social-container">
              <a href="ResumeJan.pdf" download="MeganHowleyResume">
                <img
                  className="download "
                  src="https://i.imgur.com/D7U1DzF.png"
                  alt="download"
                />
                <div className="social-text">RESUME</div>
              </a>
            </div>
            <div className="social-container">
              <a href="mailto:meglhowley@gmail.com" subject="HTML link">
                <img className="email" src="https://i.imgur.com/aExEYeg.png" />
                <div className="social-text">EMAIL</div>
              </a>
            </div>
          </div>
          <div className="bio-container animate__animated">
            <div className="top-half-bio">
              <div className="biography">
                <h2>Hi, ????&nbsp;I'm Meg.</h2>
                <p>
                  Software engineer specializing in building engaging,
                  accessible digital experiences. Currently working on high
                  impact public sector web applications at&nbsp;
                  <a
                    href="https://www.portlandwebworks.com/"
                    className="hover-underline"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: props.darkMode ? "white" : "black" }}
                  >
                    Portland Webworks
                  </a>
                  .
                </p>
              </div>
              {!state.techClicked ? (
                <div className="skills-sect1">
                  <div
                    onClick={() => {
                      dispatch({ type: "toggleTechClicked" });
                    }}
                  >
                    &nbsp;TECH | SKILLS
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    onClick={() => {
                      dispatch({ type: "toggleTechClicked" });
                    }}
                    className="close-tech"
                  >
                    X
                  </div>
                  <div className="skills-sect">
                    <div class="container animate__animated animate__tada">
                      <i
                        style={{ fontSize: width >= 1020 ? "6vh" : "3.5vh" }}
                        class="devicon-html5-plain-wordmark"
                      ></i>
                      <div class="overlay">
                        <div class="text">HTML5</div>
                      </div>
                    </div>
                    <div class="container animate__animated animate__tada">
                      <i
                        style={{ fontSize: width >= 1020 ? "6vh" : "3.5vh" }}
                        class="devicon-react-original-wordmark"
                      ></i>
                      <div class="overlay">
                        <div class="text">React</div>
                      </div>
                    </div>
                    <div class="container animate__animated animate__tada">
                      <i
                        style={{ fontSize: width >= 1020 ? "6vh" : "3.5vh" }}
                        class="devicon-javascript-plain"
                      ></i>
                      <div class="overlay">
                        <div class="text">Javascript</div>
                      </div>
                    </div>
                    <div class="container animate__animated animate__tada">
                      <i
                        style={{ fontSize: width >= 1020 ? "6vh" : "3.5vh" }}
                        class="devicon-css3-plain-wordmark"
                      ></i>
                      <div class="overlay">
                        <div class="text">CSS3</div>
                      </div>
                    </div>
                    <div class="container animate__animated animate__tada">
                      <i
                        style={{ fontSize: width >= 1020 ? "6vh" : "3.5vh" }}
                        class="devicon-redux-original"
                      ></i>
                      <div class="overlay">
                        <div class="text">React Redux</div>
                      </div>
                    </div>
                    <div class="container animate__animated animate__tada">
                      <i
                        style={{ fontSize: width >= 1020 ? "6vh" : "3.5vh" }}
                        class="devicon-npm-original-wordmark"
                      ></i>
                      <div class="overlay">
                        <div class="text">NPM</div>
                      </div>
                    </div>
                    <div class="container animate__animated animate__tada">
                      <i
                        style={{ fontSize: width >= 1020 ? "6vh" : "3.5vh" }}
                        class="devicon-nodejs-plain-wordmark"
                      ></i>
                      <div class="overlay">
                        <div class="text">Node.js</div>
                      </div>
                    </div>
                    <div class="container animate__animated animate__tada">
                      <i
                        style={{ fontSize: width >= 1020 ? "6vh" : "3.5vh" }}
                        class="devicon-python-plain-wordmark"
                      ></i>
                      <div class="overlay">
                        <div class="text">Python</div>
                      </div>
                    </div>
                    <div class="container animate__animated animate__tada">
                      <i
                        style={{ fontSize: width >= 1020 ? "6vh" : "3.5vh" }}
                        class="devicon-express-original"
                      ></i>
                      <div class="overlay">
                        <div class="text">Express.js</div>
                      </div>
                    </div>
                    <div class="container animate__animated animate__tada">
                      <i
                        style={{ fontSize: width >= 1020 ? "6vh" : "3.5vh" }}
                        class="devicon-mongodb-plain-wordmark"
                      ></i>
                      <div class="overlay">
                        <div class="text">
                          Mongo <br />
                          DB
                        </div>
                      </div>
                    </div>
                    <div class="container animate__animated animate__tada">
                      <i
                        style={{ fontSize: width >= 1020 ? "6vh" : "3.5vh" }}
                        class="devicon-postgresql-plain-wordmark"
                      ></i>
                      <div class="overlay">
                        <div class="text">
                          Postgre
                          <br />
                          SQL
                        </div>
                      </div>
                    </div>
                    <div class="container animate__animated animate__tada">
                      <i
                        style={{ fontSize: width >= 1020 ? "6vh" : "3.5vh" }}
                        class="devicon-sequelize-plain"
                      ></i>
                      <div class="overlay">
                        <div class="text">Sequelize</div>
                      </div>
                    </div>
                    <div class="container animate__animated animate__tada">
                      <i
                        style={{ fontSize: width >= 1020 ? "6vh" : "3.5vh" }}
                        class="devicon-flask-original-wordmark colored"
                      ></i>
                      <div class="overlay">
                        <div class="text">Flask</div>
                      </div>
                    </div>
                    <div class="container animate__animated animate__tada">
                      <i
                        style={{ fontSize: width >= 1020 ? "6vh" : "3.5vh" }}
                        class="devicon-sqlalchemy-original-wordmark colored"
                      ></i>
                      <div class="overlay">
                        <div class="text">
                          SQL
                          <br />
                          Alchemy
                        </div>
                      </div>
                    </div>
                    <div class="container animate__animated animate__tada">
                      <i
                        style={{ fontSize: width >= 1020 ? "6vh" : "3.5vh" }}
                        class="devicon-vscode-plain-wordmark"
                      ></i>
                      <div class="overlay">
                        <div class="text">VS Code</div>
                      </div>
                    </div>
                    <div class="container animate__animated animate__tada">
                      <i
                        style={{ fontSize: width >= 1020 ? "6vh" : "3.5vh" }}
                        class="devicon-git-plain-wordmark"
                      ></i>
                      <div class="overlay">
                        <div class="text">Git</div>
                      </div>
                    </div>
                    <div class="container animate__animated animate__tada">
                      <i
                        style={{ fontSize: width >= 1020 ? "6vh" : "3.5vh" }}
                        class="devicon-github-original-wordmark"
                      ></i>
                      <div class="overlay">
                        <div class="text">GitHub</div>
                      </div>
                    </div>
                    <div class="container animate__animated animate__tada">
                      <i
                        style={{ fontSize: width >= 1020 ? "6vh" : "3.5vh" }}
                        class="devicon-heroku-line-wordmark"
                      ></i>
                      <div class="overlay">
                        <div class="text">Heroku</div>
                      </div>
                    </div>
                    <div class="container animate__animated animate__tada">
                      <img
                        style={{ width: width >= 1020 ? "6vh" : "3.5vh" }}
                        src="https://i.imgur.com/Q9pqRVE.png"
                      />
                      <div class="overlay">
                        <div class="text">RESTful API</div>
                      </div>
                    </div>
                    <div class="container animate__animated animate__tada">
                      <i
                        style={{ fontSize: width >= 1020 ? "6vh" : "3.3vh" }}
                        class="devicon-trello-plain"
                      ></i>
                      <div class="overlay">
                        <div class="text">Trello</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="bottom-container">
              <div className="trait-1">
                <div className="icon">
                  <img
                    src={
                      !props.darkMode
                        ? "https://i.imgur.com/y2Mqmd5.png"
                        : "https://i.imgur.com/fdUAOXx.png"
                    }
                  />
                </div>
                <div>
                  <h2>TEAM FIRST | EGOS LAST</h2>
                  <p>
                    I have a proven track-record of collaboration and
                    relationship-building. I believe that true innovation can
                    only occur within spaces of safe and open communication.
                  </p>
                </div>
              </div>
              <div className="trait-2">
                <div className="icon">
                  <img
                    src={
                      !props.darkMode
                        ? "https://i.imgur.com/O0Pnt7a.png"
                        : "https://i.imgur.com/krZk1De.png"
                    }
                  />
                </div>
                <div>
                  <h2>PROBLEM-SOLVER | CREATOR</h2>
                  <p>
                    I like to push the limits of what is known within
                    traditional digital experiences. Programming is governed by
                    both art and science, allowing me to lean into my strengths.
                  </p>
                </div>
              </div>
              <div className="trait-3">
                <div className="icon">
                  <img
                    src={
                      !props.darkMode
                        ? "https://i.imgur.com/vgiXnIQ.png"
                        : "https://i.imgur.com/3JONxUa.png"
                    }
                  />
                </div>
                <div>
                  <h2>CLIENT-FOCUSED | HUMAN-DRIVEN</h2>
                  <p>
                    I have years of experience guiding individual clients
                    through planning software, and large institutions through
                    brokerage systems. I know what trips clients up, so I always
                    prioritize a seamless user experience.
                  </p>
                </div>
              </div>
              <div className="trait-4">
                <div className="icon">
                  <img
                    src={
                      !props.darkMode
                        ? "https://i.imgur.com/u2aumjX.png"
                        : "https://i.imgur.com/yxeZvDk.png"
                    }
                  />
                </div>
                <div>
                  <h2>AVID LEARNER | COMMITTED TO EXCELLENCE</h2>
                  <p>
                    Those who know me well would tell you my level of drive and
                    ambition is unparalled. I belive there is no age limit on
                    learning, which is what drives me in the tech industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div onClick={handleClickedBack} className="back-about">
          <h1> BACK</h1>
        </div>
        <div>
          <Modal
            isOpen={state.modalOpen}
            onRequestClose={() => dispatch({ type: "toggleModalOpen" })}
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
                Or you can email me direct at:{" "}
                <a href="mailto:meglhowley@gmail.com">meglhowley@gmail.com</a>
              </h4>
            </div>
          </Modal>
        </div>
        <div
          className="right-side expand-about-right"
          style={{
            backgroundColor: !props.darkMode ? "white" : "rgb(46, 90, 104)",
          }}
        ></div>
      </div>
    );
  } else {
    return <HomeTransition2 darkMode={props.darkMode} />;
  }
}
export default Projects;
