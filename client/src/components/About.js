import React from "react";
import { Row, Col, Button } from "reactstrap";
import {Link} from 'react-router-dom';

export const About = () => {
  return (
    <div>
      <div className="aboutDiv">
        <img className="aboutImg" src="/Assets/profile.png" />
        <h4 className="aboutText" style={{ marginTop: "3rem" }}>
          Hi, I am Harsh Maithia
        </h4>
        <h2 className="aboutText">A React Developer</h2>
        <p className="aboutDesc">
          I'm from Nashik, India.I completed my Bachelors in Computer
          Engineering in 2021. Since my childhood, I've been a creative person
          and loved art and design. I love to design and develop new things. I'm
          always curious about the new trends in web development and tend to
          gain knowledge of them. Apart from web dev, in my free time, I enjoy watching movies,
          sketching and taking long walks. <br /> <br /> I wish to utilize my technical skills
          and work in a challenging and motivating environment while keep
          learning and growing in my field.
        </p>
        <Link to="/Assets/Harsh_Maithia.pdf" target="_blank" className="btn btn-lg resumeBtn" download>Download Resume</Link>
        
      </div>

      <div className="aboutTitle">Education</div>
      <div className="aboutDiv aboutFieldDiv">
        <Row>
          <Col md="2">
            {" "}
            <h4 className="aboutText aboutLabel">School:</h4>
          </Col>
          <Col md="auto">
            <h4 className="aboutText">
              St Philomena's convent high school, Nashik.
            </h4>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            {" "}
            <h4 className="aboutText aboutLabel">Junior College:</h4>
          </Col>
          <Col md="auto">
            <h4 className="aboutText ">
              GES R N Chandak college of Science, Arts and Commerce, Nashik.{" "}
            </h4>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            {" "}
            <h4 className="aboutText aboutLabel">College:</h4>
          </Col>
          <Col md="auto">
            <h4 className="aboutText ">
              Gokhale Education Society's R H Sapat college of engineering,
              Nashik.
            </h4>
          </Col>
        </Row>
      </div>

      <div className="aboutTitle">Technical Skills</div>
      <div className="aboutDiv aboutFieldDiv">
        <Row>
          <Col md="2">
            {" "}
            <h4 className="aboutText aboutLabel">Front-end:</h4>
          </Col>
          <Col md="auto">
            <h4 className="aboutText">
              {" "}
              <span className="skillTag">HTML</span>{" "}
              <span className="skillTag">CSS</span>{" "}
              <span className="skillTag">JavaScript</span>{" "}
            </h4>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            {" "}
            <h4 className="aboutText aboutLabel">Frameworks/Libraries:</h4>
          </Col>
          <Col md="auto">
            <h4 className="aboutText">
              {" "}
              <span className="skillTag">Bootstrap</span>{" "}
              <span className="skillTag">jQuery</span>{" "}
              <span className="skillTag">ReactJs</span>{" "}
            </h4>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            {" "}
            <h4 className="aboutText aboutLabel">Back-end:</h4>
          </Col>
          <Col md="auto">
            <h4 className="aboutText">
              <span className="skillTag">NodeJs</span>{" "}
            </h4>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            {" "}
            <h4 className="aboutText aboutLabel">Native:</h4>
          </Col>
          <Col md="auto">
            <h4 className="aboutText">
              {" "}
              <span className="skillTag">React Native</span>{" "}
            </h4>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            {" "}
            <h4 className="aboutText aboutLabel">Database:</h4>
          </Col>
          <Col md="auto">
            <h4 className="aboutText">
              <span className="skillTag">MongoDB</span>{" "}
              <span className="skillTag">MySQL</span>{" "}
            </h4>
          </Col>
        </Row>

        <Row>
          <Col md="2">
            {" "}
            <h4 className="aboutText aboutLabel">Programming:</h4>
          </Col>
          <Col md="auto">
            <h4 className="aboutText">
              <span className="skillTag">C++</span>{" "}
              <span className="skillTag">Python</span>{" "}
            </h4>
          </Col>
        </Row>
      </div>
    </div>
  );
};
