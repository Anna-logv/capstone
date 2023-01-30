import about_1 from '../assets/about_1.png';
import about_2 from '../assets/about_2.png';
function About() {
    return (
        <section id="about_block" className="main-block">
        <div className="main-block-helper">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div className="b-about-img">
            <img src={about_1} alt="Little Lemon"/>
            <img src={about_2} alt="Little Lemon"/>
        </div>

      </section>
    );
  }

  export default About;