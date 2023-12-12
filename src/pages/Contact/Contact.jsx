import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="col-12 mt-3 mb-1 text-center text-uppercase" id="contact">
        <h2>Contact</h2>
        <hr />
        <div className="container link-container">
          <div className="link">
            <a href="https://github.com/nidhish-create">Github</a>
          </div>
          <div className="link">
            <a href="https://www.linkedin.com/in/nidhish-malviya-4a563a209/">Linkedin</a>
          </div>
          <div className="link">
            <a href="nidhishmal2@gmail.com">Email</a>
          </div>
          <div className="link">
            <p>6265534335</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
