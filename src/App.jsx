import "./App.css";

import { Canvas } from "@react-three/fiber";
import { Bvh, Stars } from "@react-three/drei";
import Experience from "./components/3js/Experience";
import { useState } from "react";
import Header from "./components/pages/partials/Header";
function App() {
  const [freeCam, setFreeCam] = useState(false);
  const [arrowOpacity, setArrowOpacity] = useState(1);
  return (
    <>
      <button
        className="absolute w-15 h-15 bg-white p-1 m-1  top-6 left-6 z-10 text-black flex items-center justify-center transition-transform duration-300 hover:brightness-125 rounded-md "
        onClick={() => setFreeCam((prev) => !prev)}
      >
        Explore
      </button>
      <Header />
      <Canvas
        camera={{
          fov: 70,
          position: [-5.23, 9.4, 16.67],
        }}
      >
        <color attach="background" args={["black"]} />
        <Bvh firstHitOnly>
          <Stars />
          <Experience
            freeCam={freeCam}
            setArrowOpacity={setArrowOpacity}
          ></Experience>
        </Bvh>
      </Canvas>
      {!freeCam && (
        <div
          className="fixed bottom-10 w-full text-center text-5xl text-white select-none"
          style={{ opacity: arrowOpacity }}
        >
          &or;
        </div>
      )}
    </>
  );
}

export default App;
