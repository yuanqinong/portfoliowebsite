import React from "react";
import "./Profile.css";
import { TypeAnimation } from "react-type-animation";

function Profile(props) {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://www.linkedin.com/in/ong-yuan-qin/" target="_blank">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="https://wa.me/60137698311" target="_blank">
              <i class="bi bi-whatsapp"></i>
            </a>
            <a href="https://github.com/yqfffs" target="_blank">
              <i class="bi bi-github"></i>
            </a>
          </div>

          <div className="profile-details-name">
            {" "}
            Hello, My Name is <span className="highlighted-text">Yuan Qin</span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "AI Engineer🤖",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Web Developer💻",
                    1000,
                    "Enthusiastic Developer🤩",
                    1000,
                  ]}
                  wrapper="span"
                  speed={30}
                  style={{ fontSize: "1em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </h1>
              <span className="profile-role-tagline">
                Empowering Tomorrow's World with AI Innovations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn btn-primary">Hire Me</button>
            <a href="Resume_OngYuanQin.pdf" download="Resume_OngYuanQin.pdf">
            <button className="btn btn-primary">Download Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
