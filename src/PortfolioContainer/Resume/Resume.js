import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "AI Related Skills", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Python", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "Flutter", ratingPercentage: 70 },
    { skill: "C++", ratingPercentage: 75 },
    { skill: "C#", ratingPercentage: 80 },
    { skill: "Java", ratingPercentage: 75 },
    { skill: "Java Script", ratingPercentage: 80 },
    { skill: "PHP", ratingPercentage: 70 },
  ];

  const aiSkillsDetails = [
    { skill: "Pytorch", ratingPercentage: 85 },
    { skill: "TensorFlow", ratingPercentage: 80 },
    { skill: "OpenVino", ratingPercentage: 80 },
    { skill: "Scikit-learn", ratingPercentage: 80 },
    { skill: "NLTK", ratingPercentage: 80 },
    { skill: "SpaCy", ratingPercentage: 80 },
    { skill: "Named-entity recognition", ratingPercentage: 80 },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Multimedia University"}
        subHeading={"Bachelor of Information Technology (Artificial Intelligence)"}
        fromDate={"2019"}
        toDate={"2022"}
      />
      <span className="resume-cgpa">CGPA: 3.96</span>
      <ResumeHeading
        heading={"Multimedia University"}
        subHeading={"Foundation in Information Technology"}
        fromDate={"2018"}
        toDate={"2019"}
      />
      <span className="resume-cgpa">CGPA: 3.77</span>
    </div>,
    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container-scrollable">
        {/* Your work experience content goes here */}
        <div className="experience-container">
          <ResumeHeading
            heading={"Intel Microelectronics (M) Sdn. Bhd."}
            subHeading={"AI Graduate Trainee"}
            fromDate={"October 2022"}
            toDate={"Present"}
          />
          <div className="experience-description">
            <span className="resume-description-text">
              - Leveraging NLP knowledge to build automated ticketing platform FAQ
              generator and engineering keyword mining pipeline.
            </span>
            <br />
            <br />
            <span className="resume-description-text">
              - Developing Generative AI platforms website with seamless API
              integration using React.js, and familiar with Redux.
            </span>
            <br />
            <br />
            <span className="resume-description-text">
              - Developing solution that allows Large Language Models to
              understand complex diagrams including table and flowchart with
              computer vision techniques.
            </span>
            <br />
            <br />
            <span className="resume-description-text">
              - Creating an engineering keyword mining pipeline with NLP techniques and visualizing the keyword mining results with Power Bi. 
            </span>
            <br />
            <br />
            <span className="resume-description-text">
              - Creating smart reporting mircroservice for AI chatbot with C#.
            </span>
            <br />
            <br />
            <span className="resume-description-text">
              - Designing and implementing AI benchmarking scenarios, optimizing performance for models developed with various frameworks like OpenVino, PyTorch, and TensorFlow.
            </span>
            <br />
            <br />
          </div>
          <ResumeHeading
            heading={"Mi Equipment (M) Sdn Bhd."}
            subHeading={"AI Intern"}
            fromDate={"May 2022"}
            toDate={"July 2022"}
          />
          <div className="experience-description">
            <span className="resume-description-text">
              - Conducting model tests and experiments, implementing suitable models on-site servers to validate performance and accuracy.
            </span>
            <br />
            <br />
            <span className="resume-description-text">
              - Analyzing and pre-processing over 20,000 image datasets for model training.
            </span>
            <br />
            <br />
            <span className="resume-description-text">
              - Training and fine-tuning defect detection models based on feedback from global customers to ensure compliance with industry standards.
            </span>
            <br />
            <br />
            <span className="resume-description-text">
              - Creating a Python-based AI defect inspection application and demonstrating to customers from different countries.
            </span>
            <br />
            <br />
            <span className="resume-description-text">
              - Installing and testing AI inspection software on vision machines before dispatching to customers
            </span>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>,
    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    /* AI RELATED SKILLS */
    <div
      className="resume-screen-container ai-skills-container"
      key="ai-related-skills"
    >
      {aiSkillsDetails.map((skill, index) => (
              <div className="skill-parent" key={index}>
                <div className="heading-bullet"></div>
                <span>{skill.skill}</span>
                <div className="skill-percentage">
                  <div
                    style={{ width: skill.ratingPercentage + "%" }}
                    className="active-percentage-bar"
                  ></div>
                </div>
              </div>
            ))}
    </div>,
    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Badminton"
        description="Playing badminton can reduce my stress and maintain my physical health."
      />
      <ResumeHeading
        heading="Watching Movies"
        description="Watching movies provide thought-provoking escape from reality, allowing me to explore different worlds and perspectives."
      />
      <ResumeHeading
        heading="Gaming"
        description="I like to playing video games with my friends to maintain our connection and reduce my stress."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
