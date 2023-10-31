import { Link, useLocation } from 'react-router-dom';
import '../style/Navigation.css'


function Navigation() {
    const currentPage = useLocation().pathname;

    return (
        <nav className="navbar navbar-dark border-bottom border-body">
        <ul className = "nav navBar">
            <li className = "nav-item">
                <Link to= "/AboutMe" className = {currentPage=== '/About' ? 'nav-link active fs-4 custom-nav-link' : 'nav-link fs-4 custom-nav-link'}
                >
                About Me
                </Link>
            </li>

            <li className = "nav-item">
                <Link to ="/Portfolio" className = { currentPage === '/Portfolio' ? 'nav-link active fs-4 custom-nav-link' : 'nav-link fs-4 custom-nav-link'} 
                >
                Portfolio
                </Link>
            </li>

            <li className = "nav-item">
                <Link to = "/Contact" className = {currentPage === '/Contact' ? 'nav-link active fs-4 custom-nav-link' : 'nav-link fs-4 custom-nav-link'}
                >
                Contact 
                </Link>
            </li>
            <li className = "nav-item">
                <Link to = "/Resume" className = {currentPage === '/Resume' ? 'nav-link active fs-4 custom-nav-link' : 'nav-link fs-4 custom-nav-link'}
                >
                Resume
                </Link>
            </li>
        </ul>
        </nav>
    );
}

export default Navigation;