import React from "react";

function Testimonials() {
  return (
    <>
      <div>
        <section className="customers" id="customers">
          <div className="heading">
            <h2>Our Valued Customers</h2>
            <p>
              We, Le Petale ensures our dear customers to have the best
              experience with us.
              <br />
              Together, we bring joy, surprises and excitement to our loved
              ones!
            </p>
          </div>
          <div className="customers-container">
            <div className="card">
              <div className="stars">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star-half"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                commodi minus aut porro saepe, laboriosam repudiandae ullam
                quidem libero, minima officia dolor quos labore sapiente eius
                voluptates adipisci suscipit sed.
              </p>
              <h2>Morgan Smith</h2>
              <img src="images/c1.jpeg" alt="" />
            </div>
            <div className="card">
              <div className="stars">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                commodi minus aut porro saepe, laboriosam repudiandae ullam
                quidem libero, minima officia dolor quos labore sapiente eius
                voluptates adipisci suscipit sed.
              </p>
              <h2>Elinor Patts</h2>
              <img src="images/c2.jpg" alt="" />
            </div>
            <div className="card">
              <div className="stars">
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
                <i className="bx bxs-star"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                commodi minus aut porro saepe, laboriosam repudiandae ullam
                quidem libero, minima officia dolor quos labore sapiente eius
                voluptates adipisci suscipit sed.
              </p>
              <h2>Mr. and Mrs Williams</h2>
              <img src="images/c3.jpg" alt="" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Testimonials;
