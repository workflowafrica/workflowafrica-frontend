import React from "react";

const Footer = () => (
  <div className="footer">
    <div className="news-letter row">
      <div className="news col-md-7">
        <fieldset>
        <legend><h2 className="footer-header"> Subscribe to our newsletter</h2></legend>
        <hr />
        <p>Stay updated with the latest news, reports, and updates.</p>
        <form className="news-form">
          <input className="news-input" type="email" placeholder="Email" />
          <button className="news-button" type="submit">
            Subscribe
          </button>
        </form>
        </fieldset>
      </div>
      <div className="feedback col-md-5">
        <div className="feedback-line">
          <a href="/#">
            <i className="fa fa-phone" aria-hidden="true"></i>+234 8187557344
          </a>
        </div>
        <div className="feedback-email">
          <a href="/#">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
            workflowafrica@gmail.com
          </a>
        </div>
      </div>
    </div>
    <div className="footer-nav">
      <div className="footer-link row">
        <div className="footer-contact col-md-3">
          <h3>CONTACT US</h3>
          <p>Email: workflowafrica@gmail.com</p>
          <p>Phone Numbers: +234 8187557344</p>
        </div>
        <hr />
        <div className="footer-quicklink col-md-3">
          <h3>Quick Link</h3>
          <a href="/#">Home</a>
          <br />
          <a href="/#">About</a>
          <br />
          <a href="/#">Service</a>
          <br />
          <a href="/#">Our Team</a>
          <br />
          <a href="/#">Contact</a>
        </div>
        <hr />
        <div className="footer-about col-md-3">
          <h3>ABOUT US</h3>
          <a href="/#">Who we are</a>
          <br />
          <a href="/#">What we do</a>
          <br />
          <a href="/#">Our Clients</a>
        </div>
        <hr />
        <div className="footer-connect col-md-3">
          <h3>CONNECT</h3>
          <a href="facebook.com">Facebook</a>
          <br />
          <a href="linkedin.com">LinkedIn</a>
          <br />
          <a href="twitter.com">Twitter</a>
          <br />
          <a href="instagram.com">Instagram</a>
          <br />
          <a href="github.com">Github</a>
        </div>
        <hr />
      </div>
      <p className="end-note">&#169; 2019 Work flow Africa</p>
    </div>
  </div>
);

export default Footer;
