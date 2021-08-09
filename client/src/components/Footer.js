import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date();
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col col-sm">
            <h5>Permanent Address</h5>
            <address>
              6, Gurushree apt, Snehabandhan colony,
              <br />
              Datta Mandir road, Nashik Road
              <br />
              Nashik, Maharashtra, India.
              <br />
              <i className="fa fa-phone fa-lg" />:{" "}
              <a href="tel:+91 7276072667" className="Link">
                +91 7276072667
              </a>
              <br />
              <i className="fa fa-envelope fa-lg" />:{" "}
              <a href="mailto:maithiaharsh@gmail.com" className="Link">
                maithiaharsh@gmail.com
              </a>
            </address>

            <a
              className="btn btn-social-icon btn-linkedin"
              href="http://www.linkedin.com/in/harsh-maithia"
            >
              <i className="fa fa-linkedin" />
            </a>

            <a
              className="btn btn-social-icon btn-google"
              href="mailto:maithiaharsh@gmail.com"
            >
              <i className="fa fa-envelope-o" />
            </a>

            <a
              className="btn btn-social-icon btn-facebook"
              href="https://www.facebook.com/harsh.maithia"
            >
              <i className="fa fa-facebook" />
            </a>

            <a
              className="btn btn-social-icon btn-instagram"
              href="https://www.instagram.com/harsh_maithia_26/"
            >
              <i className="fa fa-instagram" />
            </a>
          </div>

          <div className="col col-sm" style={{ marginTop: "10px" }}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/Home" className="Link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/About" className="Link">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/Projects" className="Link">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="Link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto" style={{ marginTop: "0.9rem" }}>
            <p>
              © {currentYear.getFullYear()} Harsh Maithia |{" "}
              <i className="fa fa-code" /> by - Harsh Maithia{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
