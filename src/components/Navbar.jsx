import React, { useState, useEffect, useCallback, useRef } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.png";

const Navbar = () => {
  let container = React.createRef();
  const scroll = useRef();

  
  const [scrolled, setScrolled] = useState(false);
  
  const [open, setOpen] = useState(false);

  const handleOutsideClick = useCallback(
    event => {
      const { keyCode } = event;
      if (keyCode === 27) {
        setOpen(false);
        return;
      }
      if (!open) {
        return;
      }
      if (container) {
        const domNode = ReactDOM.findDOMNode(container.current);
        if (domNode && !domNode.contains(event.target)) {
          setOpen(false);
        }
      }
    },
    [container, open]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleOutsideClick);
  }, [handleOutsideClick]);

    useEffect(() => {
      document.addEventListener("scroll", e => {
        if (window.pageYOffset > 400) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      });
    }, []);


  return (
    <div className={`navbar ${scrolled ? "scrolled" : null} `} ref={scroll}>
      <img src={Logo} alt="Workflow Africa logo" />
      <i className="mobile-nav fa fa-bars" onClick={() => setOpen(true)} />
      <div
        className={`nav-links float-right ${open ? "open" : "closed"}`}
        ref={container}
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/service">Services</Link>
          </li>
          <li>
            <Link to="/team">Our Team</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
