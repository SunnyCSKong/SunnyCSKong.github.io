import React from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import "./Navbar.css";
function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
    });
    toggleDrawer();
  };

  return (
    <>
      <button
        onClick={toggleDrawer}
        className={`drawer-button ${isOpen ? "hidden" : ""}`}
      >
        &#11160;
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="drawer"
        size={400}
      >
        <ul className="nav-ul">
          <li className="nav-li">
            <a
              href="#"
              onClick={() => scrollToSection("home")}
              data-text="Home"
            >
              Home
            </a>
          </li>
          <li className="nav-li">
            <a
              href="#about"
              onClick={() => scrollToSection("about")}
              data-text="About"
            >
              About Me
            </a>
          </li>
          <li className="nav-li">
            <a
              href="#project"
              onClick={() => scrollToSection("project")}
              data-text="Projects"
            >
              Projects
            </a>
          </li>
          <li className="nav-li">
            <a
              href="#contact"
              onClick={() => scrollToSection("contact")}
              data-text="Contact"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </Drawer>
    </>
  );
}

export default Navbar;
