import "./contact.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Fab from "../../assets/facebook-icon.png";
import Inst from "../../assets/instagram.png";
import Twit from "../../assets/twitter.png";
import Load from "../../assets/loading.png";

const Contact = () => {
  const form = useRef();
  const [loading, setLoader] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(true);

    emailjs
      .sendForm(
        "service_7f85wm9",
        "template_h5rxaws",
        form.current,
        "ngXT6A5hStucwftXX"
      )
      .then(
        (result) => {
          alert(result.text);
          form.current.reset();
          setLoader(false);
        },
        (error) => {
          alert(error.text);
        }
      );
  };
  return (
    <div id="contact">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">
        Please fill out the form for any queries
      </span>
      <form ref={form} onSubmit={sendEmail} className="contactForm">
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="your_name"
        ></input>
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="your_email"
        ></input>
        <textarea
          className="msg"
          name="message"
          rows={5}
          placeholder="Enter Your Message"
        ></textarea>
        {loading ? (
          <img src={Load} alt="load" className="loadImg" />
        ) : (
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
        )}
      </form>
      <div className="links">
        <img src={Fab} alt="fabe" className="link"></img>
        <img src={Inst} alt="insta" className="link"></img>
        <img src={Twit} alt="twite" className="link"></img>
      </div>

      <footer className="footer">Copyright &#169; 2023 Aditya Mallya</footer>
    </div>
  );
};

export default Contact;
