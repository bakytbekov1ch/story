import React from "react";

import "./About.scss";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="about__content">
          <img
            src="https://upload.wikimedia.org/wikipedia/ru/c/ce/Aang.png"
            alt=""
          />
          <h1>
            Welcome to the <br />
            history of <span>eli</span>
          </h1>
          <div className="about__input">
            <input type="text" placeholder="Number" />
            <Link to="/">
              <button>submit</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
