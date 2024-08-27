import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import contactIcon from "../../../assets/contact.svg";
import { socials } from "../../../constants";
import emailjs from "@emailjs/browser";

function Contact() {
  return (
    <div className="absolute top-6 right-6 z-10 text-black px-2 rounded">
      <DropdownButton />
    </div>
  );
}

function DropdownButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="w-15 h-15 bg-white rounded-md p-1 m-1 flex items-center justify-center transition-transform duration-300 hover:brightness-125"
        onClick={() => setOpen(!open)}
      >
        <img src={contactIcon} alt="" className="w-6 h-6" />
      </button>

      {open && <DropdownMenu />}
    </div>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.scrollHeight);
  }, []);

  function calcHeight(el) {
    let height = el.scrollHeight;

    if (activeMenu === "main") {
      height += 35;
    } else {
      height += 50;
    }
    setMenuHeight(height);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then((result) => {
        console.log(result.text);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      });
  }

  return (
    <div
      className="absolute top-14 right-0 w-96 bg-[#242526] border border-[#474a4d] rounded-lg p-4 overflow-hidden transition-all duration-500 ease-in-out"
      style={{ height: menuHeight }}
      ref={dropdownRef}
    >
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <form className="menu space-y-4" onSubmit={sendEmail}>
          <div className="flex flex-col">
            <button
              type="button"
              onClick={() => setActiveMenu("socials")}
              className="w-full bg-[#484a4d] text-white px-5 h-10 rounded-md flex justify-between items-center hover:bg-[#525357] focus:outline-none"
            >
              <span>Socials</span>
              <span>&#62;</span>
            </button>
            <label htmlFor="name" className="text-[#dadce1] mt-4">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 bg-[#484a4d] border border-[#474a4d] rounded-md text-[#dadce1] focus:outline-none focus:border-[#dadce1]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-[#dadce1]">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 bg-[#484a4d] border border-[#474a4d] rounded-md text-[#dadce1] focus:outline-none focus:border-[#dadce1]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-[#dadce1]">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 bg-[#484a4d] border border-[#474a4d] rounded-md text-[#dadce1] focus:outline-none focus:border-[#dadce1]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 p-2 bg-[#484a4d] border border-[#474a4d] rounded-md text-[#dadce1] hover:bg-[#525357] focus:outline-none"
          >
            Send
          </button>
        </form>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "socials"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu space-y-4">
          <div className="text-[#dadce1]"></div>
          {socials.map((i) => (
            <a
              href={i.link}
              className="w-full  bg-[#484a4d] text-white  h-10 rounded-md hover:bg-[#525357] focus:outline-none flex flex-row items-center"
              key={i.id}
            >
              <img src={i.icon} alt="" className="w-10 h-auto mx-4" />
              {i.name}
            </a>
          ))}
          <button
            onClick={() => setActiveMenu("main")}
            className="w-full bg-[#484a4d] text-white px-5 h-10 rounded-md flex justify-between items-center hover:bg-[#525357] focus:outline-none"
          >
            <span>&#60;</span>
          </button>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Contact;
