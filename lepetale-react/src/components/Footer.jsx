import React from "react";

function Footer() {
  return (
    <>
      <div>
        <section className="footer">
          <div className="footer-box">
            <h2>Le Petale</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
              totam laborum! Tempore expedita molestias perferendis Cumque quo
              nisi tempore repellendus id dolorum!
            </p>
            <div className="social">
              <a href="#">
                <i className="bx bxl-facebook" />
              </a>
              <a href="#">
                <i className="bx bxl-twitter" />
              </a>
              <a href="#">
                <i className="bx bxl-instagram" />
              </a>
              <a href="#">
                <i className="bx bxl-tiktok" />
              </a>
            </div>
          </div>
          <div className="footer-box">
            <h3>Support</h3>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Help & Support</a>
            </li>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
          </div>
          <div className="footer-box">
            <h3>View Guides</h3>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Blog Posts</a>
            </li>
            <li>
              <a href="#">Our Branches</a>
            </li>
          </div>
          <div className="footer-box">
            <h3>Contact</h3>
            <div className="contact">
              <span>
                <i className="bx bxs-map"></i>93 Front Road Hollis St., NY 11423
              </span>
              <span>
                <i className="bx bxs-phone"></i>202-555-0150
              </span>
              <span>
                <i className="bx bxs-envelope"></i>lepetale@flower.com
              </span>
            </div>
          </div>
        </section>
        <div className="copyright">
          <p>&#169; Le Petale All Right Reserved</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
