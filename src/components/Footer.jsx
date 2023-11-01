import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className='footer'>Social Links</h5>
            
             <div className="social-icons">
              <a href="https://linkedin.com/in/alex-purfield-633177153" className="text-white">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/AlexPurfield" className="text-white">
                <i className="fab fa-github"></i>
              </a>
             </div>
           
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
