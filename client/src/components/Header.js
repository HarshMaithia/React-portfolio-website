import React, { useState } from "react";
import {
  Navbar,NavbarBrand,Nav,NavbarToggler,Collapse,NavItem,Jumbotron} from "reactstrap";
import { NavLink } from "react-router-dom";


export const Header = () => {
    const [isNavOpen,setNav] = useState(false);


    return (
        <div>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={() => setNav(!isNavOpen)} />
            <NavbarBrand className="mr-auto" href="/">
              <h3>Harsh Maithia</h3>
            </NavbarBrand>
            <Collapse isOpen={isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/Home">
                    <span className="fa fa-home fa-lg" /> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/About">
                    <span className="fa fa-info fa-lg" /> About Me
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/Projects">
                    <span className="fa fa-list fa-lg" /> Projects
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/Contact">
                    <span className="fa fa-address-card fa-lg" /> Reach Me
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>        
      </div>
    )
}