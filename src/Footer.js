
import Logo from './Logo.svg';

function Footer() {
    return (
      <>
      <img src={Logo} alt="Little Lemon"/>
      <ul>
        <li>
            <a href="#">Home</a>
        </li>
        <li>
            <a href="#">About</a>
        </li>
        <li>
            <a href="#">Menu</a>
        </li>
        <li>
            <a href="#">Reservations</a>
        </li>
        <li>
            <a href="#">Order Online</a>
        </li>
        <li>
            <a href="#">Login</a>
        </li>
      </ul>
      <div>
        <p>Contacts</p>
        <p>Address</p>
        <p>Phone</p>
        <p>Email</p>
      </div>
      <ul>
        <li>
            <a href="#">Facebook</a>
        </li>
        <li>
            <a href="#">Instagram</a>
        </li>
        <li>
            <a href="#">Twitter</a>
        </li>
        <li>
            <a href="#">YOutube</a>
        </li>
      </ul>
      </>
    );
  }
  
  export default Footer;