
import Logo from './assets/Logo.svg';
import { Link } from 'react-router-dom';
function Footer() {
    return (
      <div  className="main-block">
      <img src={Logo} alt="Little Lemon"/>
      <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/menu">Menu</Link>
            </li>
            <li>
                <Link to href="/booking">Reservations</Link>
            </li>
            <li>
                <Link to="/order-online">Order Online</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
        </ul>
      </nav>
      <div>
        <p><b>Contacts</b></p>
        <p>Address</p>
        <p>Phone</p>
        <p>Email</p>
      </div>
      <ul>
        <li>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
        </li>
        <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
        </li>
        <li>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
        </li>
        <li>
            <a href="https://www.youtube.com/"  target="_blank" rel="noreferrer">Youtube</a>
        </li>
      </ul>
      </div>
    );
  }
  
  export default Footer;