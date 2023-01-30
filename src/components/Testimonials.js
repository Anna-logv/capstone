function Testimonials(props) {
    return (
    <section id="testimonials_block">
        <div className="main-block">
          <div className="main-block-helper">
            <h2>Testimonisls</h2>
            <div className="testimonials-list">
                {props.data.testimonials.map((testimonial,index)=>{
                    let ratings=[];
                    for (let i=0; i<5;i++) {
                        const r=(Number(testimonial.rating)>i) ? <span key={i}></span> : <span key={i} className="no"></span>
                        ratings.push(r);
                    }
                    return(
                        <article className="testimonials-item" key={index}>    
                        <div className="rating">
                        {
                            ratings.map((r,i)=>r)
                        }
                        </div>
                        <img src={require(`../assets/${testimonial.pic}`)} alt="Sara Lopez" />
                        <div className="person">
                        <div className="name">{testimonial.name}</div>
                        <div className="nickname">{testimonial.nickname}</div>
                        </div>
                        <div className="txt">“{testimonial.txt}”</div>
                    </article>
                    )
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }

  export default Testimonials;