import restauranfood from './assets/restauranfood.jpg';
import bruchetta from './assets/bruchetta.jpg';
import greek_salad from './assets/greek_salad.jpg';
import lemon_dessert from './assets/lemon_dessert.jpg';
import test_pic from './assets/test_pic.png';
import about_1 from './assets/about_1.png';
import about_2 from './assets/about_2.png';
function Main() {
  return (
    <>

      <section id="hero_block">
        <div class="main-block">
          <div  class="main-block-helper">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are family owned Mediterranean restaurant, focused on traditional recipes served with modern twist.
            </p>
            <p>
              <a href="#" class="button">Reserve a Table</a>
            </p>
            <div id="hero_pic"><img src={restauranfood} alt="Little Lemon" /></div>
          </div>
        </div>
      </section>


      <section id="specials_block" class="main-block">
        <div  class="main-block-helper">

            <div class="title">
              <h1>This week specials!</h1>
              <div><a href="#" class="button">Online Menu</a></div>
            </div> 

            <div class="specials-list">

              <article class="specials-item">
                <img src={greek_salad} alt="Greek salad" />
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
                <img src={bruchetta} alt="Bruchetta" />
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
                <img src={lemon_dessert} alt="Lemon Dessert" />
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
        </div>
      </section>
      <section id="testimonials_block">
        <div class="main-block">
          <div class="main-block-helper">
            <h2>Testimonisls</h2>
            <div class="testimonials-list">

              <article class="testimonials-item">
                <div class="rating">
                  <span></span><span></span><span></span><span></span><span class="no"></span>
                </div>
                <img src={test_pic} alt="Sara Lopez" />
                <div class="person">
                  <div class="name">Sara Lopez</div>
                  <div class="nickname">Sara72</div>
                </div>
                <div class="txt">“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”</div>
              </article>


              <article class="testimonials-item">
                <div class="rating">
                  <span></span><span></span><span></span><span></span><span class="no"></span>
                </div>
                <img src={test_pic} alt="Sara Lopez" />
                <div class="person">
                  <div class="name">Sara Lopez</div>
                  <div class="nickname">Sara72</div>
                </div>
                <div class="txt">“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”</div>
              </article>


              <article class="testimonials-item">
                <div class="rating">
                  <span></span><span></span><span></span><span></span><span class="no"></span>
                </div>
                <img src={test_pic} alt="Sara Lopez" />
                <div class="person">
                  <div class="name">Sara Lopez</div>
                  <div class="nickname">Sara72</div>
                </div>
                <div class="txt">“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”</div>
              </article>


              <article class="testimonials-item">
                <div class="rating">
                  <span></span><span></span><span></span><span></span><span class="no"></span>
                </div>
                <img src={test_pic} alt="Sara Lopez" />
                <div class="person">
                  <div class="name">Sara Lopez</div>
                  <div>Sara72</div>
                </div>
                <div class="txt">“Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!”</div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="about_block" class="main-block">
        <div class="main-block-helper">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div class="b-about-img">
            <img src={about_1} alt="Little Lemon"/>
            <img src={about_2} alt="Little Lemon"/>
        </div>

      </section>
    </>

  );
}

export default Main;