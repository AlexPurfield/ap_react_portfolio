import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5>Footer Title</h5>
            <p>Some information about your website or contact details can go here.</p>
          </div>
          <div className="col">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/AboutMe" className="text-white">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/Portfolio" className="text-white">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/Resume" className="text-white">
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
