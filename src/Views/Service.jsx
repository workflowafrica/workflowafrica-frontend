import React from "react";
import sam from "../assets/images/about.png";

const Service = () => (
  <div className="service">
    <div className="service-header">
      <h1>PRODUCT & SERVICES</h1>
    </div>
    <div className="container">
      <div className="header">
        <h1 className="container-header">Software Development & Design</h1>
        <p>
          Workflow makes custom software that’s stable, scalable, secure and
          easy to use. Expertly tailored around your business goals.
        </p>
      </div>
      <div className="divisions">
        <div className="moblie row">
          <div className="col-md-6">
            <img src={sam} alt="mobile" />
          </div>
          <div className="moblie-description">
            <h1>Mobile App</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Service;
