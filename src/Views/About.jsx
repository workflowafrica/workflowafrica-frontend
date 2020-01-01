import React from "react";

const About = () => (
  <div className="about">
    <div className="about-header">
      <h1>ABOUT US</h1>
    </div>
    <div className="description">
      <div className="contaner">
        <div className="our-purpose">
          <h2 className="purpose-heading">ABOUT WORKFLOW AFRICA (WFA)</h2>
          <p className="text">
            Workflow Africa is a technology hub and support company which
            provides software development, software tools and IT support in
            addition to project management, training and certifications as well
            as strategic business solutions.
          </p>
        </div>
        <div className="our-value row">
          <div className="value-heading col-md-4">
            <h2 className="heading">What we do</h2>
            <hr />
            <p className="text">
              We understand the importance of ethics in our business and our
              values form our corporate culture
            </p>
          </div>
          <div className="value-content col-md-8">
            <div className="our-vision">
              <h3 className="vision-heading">Our Vission</h3>
              <p>
                Leading the top 1 % of global technology pace setters in the
                continent in every decade
              </p>
            </div>{" "}
            <br />
            <div className="our-mission">
              <h3>Our Mission</h3>
              <p>Fueling creativity with synergy and collective motivation</p>
            </div>{" "}
            <br />
            <div className="our-enterprise">
              <h3>Our Enterprise</h3>
              <ul>
                <li>Becoming a renowned technology hub in Africa and beyond</li>
                <li>
                  Training and empowering young Africans in software development
                  and technologies
                </li>
                <li>
                  Building reliable and bespoke technology solutions for Africa
                  and Africans
                </li>
                <li>
                  Becoming renowned in project delivery within timeline and
                  budget
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="division">
          <h2 className="division-heading">What we do</h2>
          <div className="our-division row">
            <div className="col-md-4">
              <h2>ICON</h2>
              <h2>Remote Software Design and Development</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse tristique egestas nisl elementum. Elementum iaculis
                dolor, neque, id consequat. Arcu{" "}
              </p>
            </div>
            <div className="col-md-4">
              <h2>ICON</h2>
              <h2>Training and Capacity Building in Software Development </h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse tristique egestas nisl elementum. Elementum iaculis
                dolor
              </p>{" "}
            </div>
            <div className="col-md-4">
              <h2>ICON</h2>
              <h2>Responsive Web Designs and Development</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse tristique egestas nisl elementum. Elementum iaculis
                dolor, neque, id consequat. Arcu
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
