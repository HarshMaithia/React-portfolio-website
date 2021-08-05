import React from "react";
import { Jumbotron } from "reactstrap";

export const Home = () => {
  return (
    <div>
      <Jumbotron>
        <div className="container">
              <h1>Hello! I'm Harsh.</h1>
              <p className="jumboText">
                I'm a passionate React developer who loves to build beautifully
                styled,well structured, responsive websites &amp; applications. I
                feel free to work with React, React Hooks, Redux and React
                Native. I'm well versed with fundamentals of MERN stack.
              </p>
        </div>
      </Jumbotron>

      <div className="sectionTitle">Services I can provide</div>
      <div className="serviceAllItems">
        <div className="serviceItem">
          <div className="servicIcon">
            <i className="fa fa-laptop fa-3x" />{" "}
          </div>
          <div className="serviceTitle">UI Dev</div>
          <div className="serviceDesc">
            Develop attractive, user friendly and responsive user interfaces.
          </div>
        </div>

        <div className="serviceItem">
          <div className="servicIcon">
            <i className="fa fa-code fa-3x" />{" "}
          </div>
          <div className="serviceTitle">Web Dev</div>
          <div className="serviceDesc">
            Develop dynamic, reuseable and responsive React websites and web-apps.
          </div>
        </div>

        <div className="serviceItem">
          <div className="servicIcon">
            {" "}
            <i className="fa fa-mobile fa-3x" />{" "}
          </div>
          <div className="serviceTitle">Mobile App Dev</div>
          <div className="serviceDesc">
            Develop user friendly, eye-catchy and responsive React Native Mobile apps.
          </div>
        </div>
      </div>
    </div>
  );
};
