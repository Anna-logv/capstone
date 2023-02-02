import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import Nav from './Nav';
function Header() {
    return (
        <div className="main-block">
            <Link to="/"><img src={Logo} alt="Little Lemon" /></Link>
            <nav><Nav/></nav>
        </div>
    );
  }
  
  export default Header;