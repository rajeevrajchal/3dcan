import { OrbitControls } from "@react-three/drei";
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
      <CanObject />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={10} />
    </Canvas>
  );
};

export default CanScene;
