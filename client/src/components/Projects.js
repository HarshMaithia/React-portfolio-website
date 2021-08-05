import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
import data from '../ProjectsData.json';

export const Projects = () => {
  return (
    <>
      <div className="projectsDiv">
        <h2 id="contactTitle">Some of my recent projects</h2>
        


          {data.map((project,index) => {return(
            <Accordion className="accordionDiv" key={index} allowZeroExpanded>
            <AccordionItem className="accordionHeading">
            <AccordionItemHeading>
              <AccordionItemButton
                style={{
                  backgroundColor: "rgba(255,255,255,0)",
                  fontSize: "1.4rem",
                  fontWeight: "500",
                }}
              >
                {project.title}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p className="projectsDesc">
                {project.description}
                <br />
                <b> {project.note} </b>
                <br />
                <a href={project.link} className="btn btn-lg mt-1 projectBtn">Link</a>
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          </Accordion>
          )}) }

      </div>
    </>
  );
};
