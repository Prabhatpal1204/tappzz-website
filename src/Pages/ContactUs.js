/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <div className="container-contact">
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Team</h3>
          <br />
          <div className="team">
            <div>
              <img src="https://i.ibb.co/J30SY3Q/male.png" />
              <p>
                <span>Prabhat Pal</span>
                <img src="https://i.ibb.co/2FPjgFd/email.png" />{" "}
                prabhat.20bce7250@vitap.ac.in{" "}
              </p>
            </div>
            <div>
              <img src="https://i.ibb.co/J30SY3Q/male.png" />
              <p>
                <span>Pranav Deshmukh</span>{" "}
                <img src="https://i.ibb.co/2FPjgFd/email.png" />{" "}
                pranav.20bce7282@vitap.ac.in
              </p>
            </div>
            <div>
              <img src="https://i.ibb.co/J30SY3Q/male.png" />
              <p>
                <span> Aryan Raghav </span>{" "}
                <img src="https://i.ibb.co/2FPjgFd/email.png" />{" "}
                aryan.20bce7265@vitap.ac.in
              </p>
            </div>
            <div>
              <img src="https://i.ibb.co/fDHS6b6/female.png" />
              <p>
                <span>Tanisha Jain</span>
                <img src="https://i.ibb.co/2FPjgFd/email.png" />{" "}
                tanisha.20bce7270@vitap.ac.in
              </p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="" autoComplete="on">
            <h3 className="title">Leave a message</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" />
              <label for="">Name</label>
              <span>Name</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" />
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input"></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn-form-contactus" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
