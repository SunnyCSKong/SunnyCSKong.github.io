import { useThree, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { useScroll } from "@react-three/drei";
export function CameraMovement() {
  const { camera } = useThree();
  const camRef = useRef(camera);
  const tl = useRef();
  const scroll = useScroll();
  const camTarget = [0, 0, 0];

  useFrame(() => {
    //control max zoom out distance
    const maxPosition = 60; //for x/z
    const maxHeight = 79; //for y

    if (Math.abs(camera.position.z) > maxPosition) {
      camera.position.z = maxPosition;
    }
    if (Math.abs(camera.position.x) > maxPosition) {
      camera.position.x = maxPosition;
    }
    if (Math.abs(camera.position.y) > maxHeight) {
      camera.position.y = maxHeight;
    }
  });

  useFrame(() => {
    //get current scroll position and go to timeline. make cam always look at 0,0,0
    tl.current.seek(scroll.offset * tl.current.duration());
    camRef.current.lookAt(...camTarget);
  });
  useLayoutEffect(() => {
    tl.current = gsap.timeline({ paused: true });
    //sun
    tl.current.to(camRef.current.position, {
      duration: 1,
      x: 5.583541,
      y: 7.31,
      z: -16.4573,
    });
    //earth
    tl.current.to(camRef.current.position, {
      duration: 1,
      x: 16.412,
      y: 0.143,
      z: 8.9767,
    });
    //saturn
    tl.current.to(camRef.current.position, {
      duration: 1,
      x: 43.8878,
      y: 2.46,
      z: -17.8667,
    });
    //nuptune
    tl.current.to(camRef.current.position, {
      duration: 1,
      x: 3.5899,
      y: 1.9676,
      z: 61.1842,
    });
  }, []);
  return null;
}
