import React from "react";

const Footer = () => (
  <div className="footer">
    <div className="news-letter row">
      <div className="news col-md-7">
        <h2 className="footer-header"> Subscribe to our newsletter</h2>
        <hr />

        <p>Stay updated with the latest news, reports, and updates.</p>
        <form className="news-form">
          <input className="news-input" type="email" placeholder="Email" />
          <button className="news-button" type="submit">
            Subscribe
          </button>
        </form>
      </div>
      <div className="feedback col-md-5">
        <div>
          <h2>How can we Help you?</h2>
          <hr />
          <form className="feedback-form">
            <input
              className="name"
              type="text"
              placeholder="Full Name"
              required
            />
            <br />
            <input
              className="number"
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
            <select className="options" required>
              <option>-- Select Catergory --</option>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
            <br />
            <button className="feedback-button" type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
    <div className="footer-nav">
      <div className="footer-link row">
        <div className="footer-contact col-md-4">
          <h3>CONTACT US</h3>
          <ul>
            <li>Email: workflowafrica@gmail.com</li>
            <li>Phone Numbers: 08187557344</li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="footer-about col-md-4">
          <h3>ABOUT US</h3>
          <ul>
            <li>Who we are</li>
            <li>What we do</li>
            <li>Our Clients</li>
            <li></li>
          </ul>
        </div>
        <div className="footer-connect col-md-4">
          <h3>CONNECT</h3>
          <ul>
            <li>
              <a href="facebook.com">Facebook</a>
            </li>
            <li>
              <a href="linkedin.com">LinkedIn</a>
            </li>
            <li>
              <a href="twitter.com">Twitter</a>
            </li>
            <li>
              <a href="instagram.com">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="end-note">&#169; 2019 Work flow Africa</p>
    </div>
  </div>
);

export default Footer;
