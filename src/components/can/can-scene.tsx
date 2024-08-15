/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CanObject from "./can-object";

const CanScene = () => {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      gl={{ preserveDrawingBuffer: true }}
      frameloop="demand"
    >
      <ambientLight />
      <directionalLight position={[-12, 80, 20]} intensity={1} />
      <Center bottom>
        <CanObject />
      </Center>
      {/* <SkateBackground /> */}

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={10} />
    </Canvas>
  );
};

export default CanScene;
