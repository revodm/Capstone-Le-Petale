import React from "react";

function Contact() {
  return (
    <>
      <div>
        <section id="contacts">
          <div className="container mt-5 bg-light py-3">
            <div className="row mb-5">
              <div className="col-md-8 text-start">
                <h6 className="text-dark">CONTACT US</h6>
                <h1>Leave A Message</h1>
                <p className="mb-1">
                  For event bookings, kindly leave us a message.
                </p>
                <form className="row g-3 pt-4">
                  <div className="col-md-6">
                    <label for="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label for="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      required
                    />
                  </div>
                  <div className="col-md-8">
                    <label for="email" className="form-label">
                      E-mail Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <label for="phoneNumber" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phoneNumber"
                      placeholder="+639"
                    />
                  </div>
                  <div className="col-md-12">
                    <label for="comments" className="form-label">
                      Comments/Questions
                    </label>
                    <textarea
                      className="form-control"
                      id="comments"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-12">
                    <button type="submit" className="btn btn-dark">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
