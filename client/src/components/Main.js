import React from 'react';
import { Switch, Route, Redirect, withRouter, useLocation } from "react-router-dom";

import {Home} from './Home';
import {About} from './About';
import {Projects} from './Projects';
import {Contact} from './Contact';
import {Header} from './Header';
import {Footer} from './Footer';

import {TransitionGroup, Transition, CSSTransition} from 'react-transition-group';

const Main = () => {

    const location = useLocation();

    const Homepage = () => {
        return (
            <Home />
        );
    };

    const Aboutpage = () => {
        return (
            <About />
        );
    };

    const Projectspage = () => {
        return (
            <Projects />
        );
    };

    const Contactpage = () => {
        return (
            <Contact />
        );
    };

    return (
        <div>
            <Header />
            <div>
            <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              classNames="page"
              timeout={300}
            >
              <Switch location={location}>
                    <Route path="/Home" component={Homepage} />
                    <Route path="/About" component={Aboutpage} />
                    <Route path="/Projects" component={Projectspage} />
                    <Route path="/Contact" component={Contactpage} />
                    <Redirect to="/Home" />
                </Switch>
                </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        </div>
    )
}

export default withRouter(Main);