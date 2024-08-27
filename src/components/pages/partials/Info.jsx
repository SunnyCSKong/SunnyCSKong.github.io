import React, { useState } from "react";

export default function Info() {
  const [open, setOpen] = useState(false);
  return (
    <div className="absolute px-4 top-6 left-20 z-10 text-black">
      <div className="relative  ">
        <button
          className="w-15 h-15 bg-white p-1 m-1  top-6 left-6 z-10 text-black flex items-center justify-center transition-transform duration-300 hover:brightness-125 rounded-md"
          onClick={() => setOpen(!open)}
        >
          &nbsp;?&nbsp;
        </button>
        {open && <InfoDropdown />}
      </div>
    </div>
  );
}

function InfoDropdown() {
  return (
    <div className="absolute top-14 left-0 w-96 bg-[#242526] border border-[#474a4d] rounded-lg p-4 overflow-hidden transition-all duration-500 ease-in-out text-white">
      <p className="my-1">
        This website was made using React, React Three Fiber, TailwindCSS, and
        Vite.
      </p>
      <p className="my-1">
        Click the explore button to be able to move the camera around! You can
        click and drag and zoom in/out.
      </p>

      <p className="my-1">
        Why is the solar system oriented this way? This was the orientation on
        my birthday!
      </p>
    </div>
  );
}
