import { Link } from 'react-router-dom';
import restauranfood from '../assets/restauranfood.jpg';
function Hero() {
    return (
        <section id="hero_block">
        <div className="main-block">
          <div  className="main-block-helper">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are family owned Mediterranean restaurant, focused on traditional recipes served with modern twist.
            </p>
            <p>
               <Link to="/booking" className="button">Reserve a Table</Link> 
            </p>
            <div id="hero_pic"><img src={restauranfood} alt="Little Lemon" /></div>
          </div>
        </div>
      </section>
    );
  }

  export default Hero;