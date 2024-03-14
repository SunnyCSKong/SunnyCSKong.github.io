import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { git, lin } from "../assets";
import "./Footer.css";
function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zyenwv7",
        "template_2jlrzd7",
        form.current,
        "bd0iS5glaA9B8vf3K"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact">
      <div className="form-container">
        <h1 className="f-title">Contact Me</h1>
        <div className="b-segment">
          <div className="logos">
            <a href="https://github.com/SunnyCSKong/" className="git-link">
              <img src={git} alt="" className="git" />
            </a>
            <a
              href="https://www.linkedin.com/in/sunny-kong-003b93199/"
              className="lin-link"
            >
              <img src={lin} alt="" className="linkedIn" />
            </a>
          </div>
          <form ref={form} onSubmit={sendEmail} class="f-container">
            <label class="l-style">Name</label>
            <input type="text" name="from_name" class="i-style" />
            <label class="l-style">Email</label>
            <input type="email" name="from_email" class="i-style" />
            <label class="l-style">Message</label>
            <textarea name="message" class="m-style" />
            <input type="submit" value="Send" class="s-style" />
          </form>
        </div>
      </div>
    </div>
  );
}
export default Footer;
