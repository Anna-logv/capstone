import { Link } from 'react-router-dom';

function Specials(props) {
    return (

      <section id="specials_block" className="main-block">
      <div  className="main-block-helper">

          <div className="title">
            <h1>This week specials!</h1>
            <div>
              <Link to="/menu" className="button">Online Menu</Link>
            </div>
          </div>
          <div className="specials-list">
            {props.data.specials.map((special, index)=>{
                return  (

                  <article className="specials-item" key={index}>
                    <img src={require(`../assets/${special.pic}`)} alt="Greek salad" />
                    <div className="header">{special.name}</div>
                    <div className="price">{special.price}</div>
                    <div className="desc">{special.desc}</div>
                    <div className="link">
                      <Link to="/order-online" className="button">Order a delivery</Link>
                    </div>
                  </article>
                )
              }
              )}
             
            </div>
        </div>
      </section>
    );
  }

  export default Specials;