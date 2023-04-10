import React from "react";
import { footer } from "../../data/Data";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions ?</h1>
              <p>
                We'll help you to clear the doubt and help to make your house
                dream come true.
              </p>
            </div>
            <span className="btn5">Contact Us Today</span>
          </div>
        </div>
      </section>

      <footer>
        <div className="foot">
          <img src="../images/logo.png" alt="" />
        </div>
        <div className="container">
          <div className="box">
            <div className="logo">
              <h2>RM Associates</h2>
              <span>Er.G.R. MANIKANDAN</span>
              <p>
                52/1-2, Jagir Chinna Mottur, Near Ashwa Park Hotel,
                Mamangam(po.),salem-636 302
              </p>
              <p>contact me: 97903 62555, 9486573745</p>
              <p>Email:rmassosicatescivil@gmail.com</p>
            </div>
          </div>
        </div>
      </footer>

      <div className="legal">
        <span>© 2023 RM Associates. Designd By Ramani Krishnan.</span>
      </div>
    </div>
  );
};

export default Footer;
