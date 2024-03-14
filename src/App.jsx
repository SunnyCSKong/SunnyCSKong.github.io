import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";

import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
      <ParallaxProvider>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
        <Projects></Projects>
        <Footer></Footer>
      </ParallaxProvider>
    </>
  );
}

export default App;
