import React from "react";
import Profile from "./Profile/Profile";
import Header from "./Header/Header";

import "./Home.css";

export default function Home(props) {
  return (
    <div className="home-container" id={props.id || ""}>
      <Header />
      <Profile />
    </div>
  );
}
