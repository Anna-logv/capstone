import Logo from './assets/Logo.svg';
import Nav from './Nav';
function Header() {
    return (
        <div class="main-block">
            <img src={Logo} alt="Little Lemon"/>
            <nav><Nav/></nav>
        </div>
    );
  }
  
  export default Header;