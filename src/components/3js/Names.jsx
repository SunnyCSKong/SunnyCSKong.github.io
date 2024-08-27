import React, { useRef, useMemo } from "react";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { Text, Mask, useMask } from "@react-three/drei";
export const Names = ({ name, ...props }) => {
  const groupRef = useRef();

  // Calculate total width based on text length
  const totalWidth = useMemo(() => name.length * 2.0, [name]);

  useFrame(({ camera }) => {
    if (groupRef.current) {
      groupRef.current.quaternion.copy(camera.quaternion);
    }
  });

  return (
    <group ref={groupRef} {...props} position-x={-totalWidth / 2}>
      {name.split("").map((char, index) => (
        <Character index={index} char={char} key={index} width={totalWidth} />
      ))}
      <Mask id={1}>
        <planeGeometry args={[totalWidth, 2]} />
      </Mask>
    </group>
  );
};

function Character({ index, char, width }) {
  const ref = useRef();
  const stencil = useMask(1);

  // Position each character with respect to its index
  const xPosition = (index - (length - 1) / 2) * 2;
  useFrame((state, delta) =>
    easing.damp(
      ref.current.position,
      "y",
      char === " " ? 0 : char.charCodeAt(0) * -2,
      0.1,
      delta
    )
  );

  return (
    <group position-x={xPosition} ref={ref}>
      {char !== " " && (
        <Text
          position={[0, char.charCodeAt(0) * 2, 0]}
          fontSize={4}
          font={"./Roboto-Mono-regular.woff"}
        >
          {char}
          <meshBasicMaterial {...stencil} />
        </Text>
      )}
    </group>
  );
}
