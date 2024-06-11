import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import imgBack from "../../../src/images/contactbg.png";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Form from "./Form";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <div className="contact-me-parent">
        <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
        <div className="central-form">
          <div className="col">
            <h2 className="title">
              <TypeAnimation
                sequence={[
                  "Get In Touch📞",
                  1000,
                  "Lets build something together🚀",
                  1000,
                ]}
                wrapper="span"
                speed={30}
                style={{ fontSize: "40px", fontFamily: "Cursive" }}
                repeat={Infinity}
              />
            </h2>{" "}
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
          <div className="back-form">
            <div className="img-back">
              <h4>Drop You Message Here!</h4>
              <img src={imgBack} alt="image not found" />
            </div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
