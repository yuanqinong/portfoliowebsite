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
            <a href="https://web.facebook.com/?_rdc=1&_rdr">
              <i className="fa fa-facebook-square" />
            </a>
            <a href="#">
              <i className="fa fa-google-plus-square" />
            </a>
            <a href="https://www.instagram.com/instructor_ehizeex/">
              <i className="fa fa-instagram" />
            </a>
            <a href="https://www.youtube.com/channel/UCSSr5ZDFbilpZ592_ycoAwA">
              <i className="fa fa-youtube-square" />
            </a>
            <a href="https://twitter.com/Ehiedu_baba">
              <i className="fa fa-twitter" />
            </a>
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
