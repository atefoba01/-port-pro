import React, { useRef } from "react";
import "./contact.css";
import Walmat from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vsk98eo",
        "template_a0fk2ch",
        form.current,
        "ovR_WFk3nWoSEqbbkmDTJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle"> My Clients</h1>
        <p className="clientDesc">
          i have had the opportunity to work with a diverse group of companies.
          some of the notable companies i have worked with includes
        </p>

        <div className="clientImgs">
          <img src={Walmat} alt="client" className="clientImg" />
          <img src={Adobe} alt="client" className="clientImg" />
          <img src={Microsoft} alt="client" className="clientImg" />
          <img src={Facebook} alt="client" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle"> Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below o discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="your name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="your email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows={5}
            placeholder="your message"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={FacebookIcon} alt="Facebook" className="link" />
            <img src={TwitterIcon} alt="Twitter" className="link" />
            <img src={YouTubeIcon} alt="Youtube" className="link" />
            <img src={InstagramIcon} alt="Instagram" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
