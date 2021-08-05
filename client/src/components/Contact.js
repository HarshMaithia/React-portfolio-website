import React, { useState } from "react";
import { Form, Label, Input, Button, Alert} from "reactstrap";
import { send } from "emailjs-com";
import {SERVICE_ID,TEMPLATE_ID,USER_ID} from "../config.js/config";

export const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    email_id: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      SERVICE_ID,
      TEMPLATE_ID,
      toSend,
      USER_ID
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    setToSend({ from_name: "", email_id: "", message: "" });
    alert("Message successfully sent to Harsh !");
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="contentSection contactDiv">
        <div className="Card mb-3 mt-3">
          <div className="Row no-gutters">
            <div className="Col-lg-12">
              <div className="CardBody">
                <div className="Card mb-3 CardContent">
                  <div className="Row no-gutters">
                    <div className="Col-lg-12">
                      <div className="CardBody">
                        <h4 className="Card-title" id="contactTitle">
                          LEAVE A MESSAGE -{" "}
                        </h4>{" "}
                        <br />
                        <div className="Card-text">
                          <Form id="contact-form" onSubmit={onSubmit}>
                            <Label for="name" className="contact-label">
                              Name :
                            </Label>
                            <Input
                              name="from_name"
                              type="text"
                              placeholder="Enter your Name."
                              className="contact-form form-control-lg"
                              autocomplete="off"
                              value={toSend.from_name}
                              onChange={handleChange}
                              minLength="4"
                              maxLength="12"
                              required
                            />{" "}
                            <br />
                            <Label for="email" className="contact-label">
                              Email id :
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="Enter your email id."
                              className="contact-form form-control-lg"
                              name="email_id"
                              autocomplete="off"
                              value={toSend.email_id}
                              onChange={handleChange}
                              minLength="8"
                              required
                            />{" "}
                            <br />
                            <Label for="message" className="contact-label">
                              Message :
                            </Label>
                            <textarea
                              id="message"
                              name="message"
                              Cols="60"
                              Rows="6"
                              placeholder="Type a message "
                              className="contact-form"
                              value={toSend.message}
                              onChange={handleChange}
                              required
                            ></textarea>
                            <Button
                              type="submit"
                              className="btn btn-lg"
                              id="sendBtn"
                            >
                              Send Message
                            </Button>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contentSection contactDiv">
        <div className="Card mb-3 card-content">
          <div className="row no-gutters">
            <div className="col-lg-12">
              <div className="card-body">
                <h4 className="card-title" id="contactTitle">
                  OR REACH ME AT -{" "}
                </h4>
                <div className="card-text" style={{ textAlign: "center" }}>
                  <a href="tel:+91-7276072667" className="Link">
                    <i
                      className="fa fa-phone-square fa-2x"
                      title="+91 7276072667"
                    ></i>
                  </a>{" "}
                  <span> &nbsp; </span>
                  <a href="mailto:maithiaharsh@gmail.com" className="Link">
                    <i
                      className="fa fa-envelope fa-2x"
                      title="maithiaharsh@gmail.com"
                    ></i>
                  </a>{" "}
                  <span> &nbsp; </span>
                  <a href="https://www.linkedin.com/in/harsh-maithia" className="Link" >
                    <i className="fa fa-linkedin fa-2x" title="linkdin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

