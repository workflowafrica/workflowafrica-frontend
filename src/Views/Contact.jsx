import React from "react";
// import GoogleMap from "../components/Goodmap";

const Contact = () => (
  <div className="contact" id="contact">
    <div className="contact-header">
      <h1>Contact Us</h1>
    </div>
    <div className="container">
      <h1 className="heading">Get in Touch</h1>
      <p className="short-note">
        We’d love to talk with you about your next project. Drop us a line, and
        we’ll get back to you within two business days.
      </p>
      <div className="office row">
        <div className="head-office col-md-6">
          <h4 className="office-heading">HEAD OFFICE:</h4>
          <p>
            A perfect blend of creativity and technical wizardry. The best
            people formula for great websites.
          </p>
          <p>
            <span>Call:</span> 08187557344
          </p>
          <p>
            <span>Email:</span> workflowafrica@gmail.com
          </p>
        </div>
        <div className="online-office col-md-6">
          <h4 className="online-heading">FIND US ONLINE:</h4>
          <div className="social-row">
            <div className="social">
              <a href="/#">
                <i className="fa fa-google" aria-hidden="true" />
                <span>Google</span>
              </a>
            </div>
            <div className="social">
              <a href="/#">
                <i className="fa fa-linkedin" aria-hidden="true" />
                <span>Linkedin</span>
              </a>
            </div>
            <div className="social">
              <a href="/#">
                <i className="fa fa-github" aria-hidden="true" />
                <span>Github</span>
              </a>
            </div>
          </div>
          <br />
          <div className="social-row">
            <div className="social">
              <a href="/#">
                <i className="fa fa-facebook" aria-hidden="true" />
                <span>Facebook</span>
              </a>
            </div>
            <div className="social">
              <a href="/#">
                <i className="fa fa-twitter" aria-hidden="true" />
                <span>Tweeter</span>
              </a>
            </div>
            <div className="social">
              <a href="/#">
                <i className="fa fa-skype" aria-hidden="true" />
                <span>Skype</span>
              </a>
            </div>
          </div>
          <br />
          <div className="social-row">
            <div className="social">
              <a href="/#">
                <i className="fa fa-instagram" aria-hidden="true" />
                <span>Instagram</span>
              </a>
            </div>
            <div className="social">
              <a href="/#">
                <i className="fa fa-telegram" aria-hidden="true" />
                <span>Telegram</span>
              </a>
            </div>
            <div className="social">
              <a href="/#">
                <i className="fa fa-slack" aria-hidden="true" />
                <span>Slack</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="message">
        <h1 className="message-heading">Send a Message</h1>
        <div className="client">
          <ul className="client-lists">
            <a href="/#">
              <li className="list">CORPORATE</li>
            </a>
            <a href="/#">
              <li className="list">INDIVIDUAL</li>
            </a>
          </ul>
        </div>
        <form className="feedback-form">
          <input
            className="name"
            type="text"
            placeholder="Full Name"
            required
          />
          <br />
          <select className="options" required>
            <option>-- Select Catergory --</option>
            <option value="grapefruit">Web Application</option>
            <option value="lime">Mobile Application</option>
            <option value="coconut">Full Stack</option>
            <option value="mango">Data Base</option>
          </select>
          <br />

          <input
            className="email"
            type="email"
            placeholder="Your Email"
            required
          />
          <input
            className="number"
            type="number"
            placeholder="Phone Number"
            required
          />
          <br />
          <input
            className="company"
            type="text"
            placeholder="Company Name"
            required
          />
          <br />
          <textarea className="textarea" type="text" placeholder="Message" />

          <br />
          <button className="feedback-button" type="submit">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
    <div
      style={{
        display: "block",
        height: "500px",
        width: "100%"
      }}
    >
      {/* <GoogleMap /> */}
    </div>
  </div>
);

export default Contact;
