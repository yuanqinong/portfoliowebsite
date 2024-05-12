import React from "react";
import "./Profile.css";
import { TypeAnimation } from "react-type-animation";

function Profile(props) {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/ong-yuan-qin/" target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://wa.me/60137698311" target="_blank" rel="noreferrer">
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="https://github.com/yqfffs" target="_blank" rel="noreferrer">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            Hello, My Name is <span className="highlighted-text">Yuan Qin</span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1 className="type-animation">
                <TypeAnimation
                  sequence={[
                    "AI Engineer📚",
                    1000,
                    "NLP Engineer✨",
                    1000,
                    "CV Engineer🔍",
                    1000,
                    "Web Developer🌐",
                    1000,
                  ]}
                  wrapper="span"
                  speed={30}
                  style={{ fontSize: "40px", fontFamily: "Cursive"}}
                  repeat={Infinity}
                />
              </h1>
              <div className="tagline-container">
                <span className="profile-role-tagline">
                  Empowering Tomorrow's World with AI Innovations.
                </span>
              </div>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire Me</button>
            <a href="Resume_OngYuanQin.pdf" download="Resume_OngYuanQin.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-image">
          <div className="profile-image-bg"></div>
        </div>       
      </div>
    </div>
  );
}

export default Profile;
