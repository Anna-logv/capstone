import restauranfood from './assets/restauranfood.jpg';
import bruchetta from './assets/bruchetta.jpg';
import greek_salad from './assets/greek_salad.jpg';
import lemon_dessert from './assets/lemon_dessert.jpg';
function Main() {
    return (
      <>

      <section id="hero_block">
        <div class="main-block">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
          We are family owned Mediterranean restaurant, focused on traditional recipes served with modern twist.
          </p>
          <p>
            <a href="#" class="button">Reserve a Table</a>
          </p>
          <div id="hero_pic"><img src={restauranfood} alt="Little Lemon"/></div>
        </div>
      </section>


      <section id="specials_block" class="main-block">

        <div class="title">
          <h1>This week specials!</h1>
          <div><a href="#" class="button">Online Menu</a></div>
        </div>

        <div class="specials-list">

          <article class="specials-item">
            <img src={greek_salad} alt="Greek salad"/>
            <div class="header">Greek salad</div>
            <div class="price">$12.28</div>
            <div class="desc">
              The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
            </div>
            <div class="link">
              <a href="#" class="a-delivery">Order a delivery</a>
            </div>
          </article>

          <article class="specials-item">
            <img src={bruchetta} alt="Bruchetta"/>
            <div class="header">Bruchetta</div>
            <div class="price">$9.13</div>
            <div class="desc">
            Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. 
            </div>
            <div class="link">
            <a href="#" class="a-delivery">Order a delivery</a>
            </div>
          </article>

          <article class="specials-item">
            <img src={lemon_dessert} alt="Lemon Dessert"/>
            <div class="header">Lemon Dessert</div>
            <div class="price">$5.20</div>
            <div class="desc">
            This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
            </div>
            <div class="link">
            <a href="#" class="a-delivery">Order a delivery</a>
            </div>
          </article>

        </div>
      </section>

      </>

    );
  }
  
  export default Main;