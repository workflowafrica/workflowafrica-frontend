import React from "react";
import img from "../assets/images/about.png";

const About = () => {

  return (
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
              addition to project management, training and certifications as
              well as strategic business solutions.
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
                  <li>
                    Becoming a renowned technology hub in Africa and beyond
                  </li>
                  <li>
                    Training and empowering young Africans in software
                    development and technologies
                  </li>
                  <li>
                    Building reliable and bespoke technology solutions for
                    Africa and Africans
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
            <h1 className="division-heading">Our Divisions</h1>
            <hr />
            <div className="our-division row">
              <div className="software col-md-4">
                <img src={img} alt="Software Design" />
                <h2>Remote Software Design and Development</h2>
                <button>
                  Read More <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </button>
                <div className="software-modal">
                  <div className="modal">
                    <span className="close">&times;</span>
                    <div className="software-row">
                      <div className="modal-image col-md-6">
                        <img src={img} alt="Software Design" />
                      </div>
                      <div className="modal-content col-md-6">
                        <h3>Remote Software Design and Development</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse tristique egestas nisl elementum.
                          Elementum iaculis dolor. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Suspendisse tristique
                          egestas nisl elementum. Elementum iaculis dolor. Lorem
                          ipsum dolor sit amet, consectetur adipiscing elit.
                          Suspendisse tristique egestas nisl elementum.
                          Elementum iaculis dolor. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Suspendisse tristique
                          egestas nisl elementum. Elementum iaculis dolor. Lorem
                          ipsum dolor sit amet, consectetur adipiscing elit.
                          Suspendisse tristique egestas nisl elementum.
                          Elementum iaculis dolor. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Suspendisse tristique
                          egestas nisl elementum. Elementum iaculis dolor. Lorem
                          ipsum dolor sit amet, consectetur adipiscing elit.
                          Suspendisse tristique egestas nisl elementum.
                          Elementum iaculis dolor
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="training col-md-4">
                <img
                  src={img}
                  alt="Capacity Building"
                  height="200px"
                  width="200px"
                />
                <h2>Training and Capacity Building in Software Development </h2>
                <button>
                  Read More <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </button>
                <div className="training-modal">
                  <div className="modal">
                    <span className="close">&times;</span>
                    <div className="training-row">
                      <div className="modal-image col-md-6">
                        <img src={img} alt="Capacity Building" />
                      </div>
                      <div className="modal-content col-md-6">
                        <h3>
                          Training and Capacity Building in Software Development
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse tristique egestas nisl elementum.
                          Elementum iaculis dolor. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Suspendisse tristique
                          egestas nisl elementum. Elementum iaculis dolor. Lorem
                          ipsum dolor sit amet, consectetur adipiscing elit.
                          Suspendisse tristique egestas nisl elementum.
                          Elementum iaculis dolor. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Suspendisse tristique
                          egestas nisl elementum. Elementum iaculis dolor. Lorem
                          ipsum dolor sit amet, consectetur adipiscing elit.
                          Suspendisse tristique egestas nisl elementum.
                          Elementum iaculis dolor. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Suspendisse tristique
                          egestas nisl elementum. Elementum iaculis dolor. Lorem
                          ipsum dolor sit amet, consectetur adipiscing elit.
                          Suspendisse tristique egestas nisl elementum.
                          Elementum iaculis dolor
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="development col-md-4">
                <img
                  src={img}
                  alt="Web Development"
                  height="200px"
                  width="200px"
                />
                <h2>Responsive Web Designs and Development</h2>
                <button>
                  Read More <i className="fa fa-arrow-right" aria-hidden="true"></i>
                </button>
                <div className="development-modal">
                  <div className="modal">
                    <span className="close">&times;</span>
                    <div className="development-row">
                      <div className="modal-image col-md-6">
                        <img src={img} alt="Web Development" />
                      </div>
                      <div className="modal-content col-md-6">
                        <h3>Responsive Web Designs and Development</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse tristique egestas nisl elementum.
                          Elementum iaculis dolor. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Suspendisse tristique
                          egestas nisl elementum. Elementum iaculis dolor. Lorem
                          ipsum dolor sit amet, consectetur adipiscing elit.
                          Suspendisse tristique egestas nisl elementum.
                          Elementum iaculis dolor. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Suspendisse tristique
                          egestas nisl elementum. Elementum iaculis dolor. Lorem
                          ipsum dolor sit amet, consectetur adipiscing elit.
                          Suspendisse tristique egestas nisl elementum.
                          Elementum iaculis dolor. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Suspendisse tristique
                          egestas nisl elementum. Elementum iaculis dolor. Lorem
                          ipsum dolor sit amet, consectetur adipiscing elit.
                          Suspendisse tristique egestas nisl elementum.
                          Elementum iaculis dolor
                        </p>
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
  );
};

export default About;
