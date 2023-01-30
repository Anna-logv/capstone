
import Hero from './sections/Hero';
import Specials from './sections/Specials';
import Testimonials from './sections/Testimonials';
import About from './sections/About';
const spesials={specials:[
    {
        name:"Greek salad",
        price:"$12.28",
        desc:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        pic:"greek_salad.jpg"
    },
    {
        name:"Bruchetta",
        price:"$9.45",
        desc:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        pic:"bruchetta.jpg"
    },
    {
        name:"Lemon Dessert",
        price:"$7.12",
        desc:"This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        pic:"lemon_dessert.jpg"
    }
]}
const testimonials={testimonials:[
    {
        rating:"5",
        name:"Sara Lopez1",
        nickname:"Sara721",
        txt:"1-Seriously cannot stop thinking about the Turkish Mac n' Cheese!!",
        pic:"test_pic.png"
    },
    {
        rating:"4",
        name:"Sara Lopez2",
        nickname:"Sara722",
        txt:"2-Seriously cannot stop thinking about the Turkish Mac n' Cheese!!",
        pic:"test_pic.png"
    },
    {
        rating:"5",
        name:"Sara Lopez3",
        nickname:"Sara723",
        txt:"3-Seriously cannot stop thinking about the Turkish Mac n' Cheese!!",
        pic:"test_pic.png"
    },
    {
        rating:"2",
        name:"Sara Lopez4",
        nickname:"Sara724",
        txt:"4-Seriously cannot stop thinking about the Turkish Mac n' Cheese!!",
        pic:"test_pic.png"
    }
]}
function HomePage() {
  return (
    <>
        <Hero/>
        <Specials data={spesials}/>
        <Testimonials data={testimonials}/>
        <About/>
    </>

  );
}

export default HomePage;