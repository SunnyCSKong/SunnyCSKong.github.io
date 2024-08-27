import { OrbitControls, ScrollControls } from "@react-three/drei";
import { System } from "./System";
import {
  Selection,
  EffectComposer,
  Outline,
} from "@react-three/postprocessing";
import { CameraMovement } from "./CameraMovement";
import { Overlay } from "../pages/Overlay";

export const NB_PAGES = 4;

function Experience({ freeCam, setArrowOpacity }) {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls enabled={freeCam} />

      <Selection>
        <EffectComposer multisampling={8} autoClear={false}>
          <Outline blur visibleEdgeColor="white" edgeStrength={5} width={500} />
        </EffectComposer>
        <ScrollControls pages={NB_PAGES} damping={0.25}>
          <System />
          <Overlay freeCam={freeCam} setArrowOpacity={setArrowOpacity} />
          <CameraMovement />
        </ScrollControls>
      </Selection>
    </>
  );
}

export default Experience;
