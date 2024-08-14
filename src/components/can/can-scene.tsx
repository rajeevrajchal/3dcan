/* eslint-disable @typescript-eslint/no-empty-object-type */
import { CameraControls, Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import SkateBackground from "../skate-background";
import CanObject from "./can-object";

// const ReflectiveSurface: React.FC = () => {
//   const materialRef = useRef<$FIX_ME>(null);

//   return (
//     <mesh
//       position={[0, -5, 0]}
//       rotation={[-Math.PI / 2, 0, 0]}
//       scale={[10, 10, 10]}
//     >
//       <planeGeometry args={[20, 20]} />
//       <MeshReflectorMaterial mirror={1} ref={materialRef} />
//     </mesh>
//   );
// };

const CanScene = () => {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      gl={{ preserveDrawingBuffer: true }}
      frameloop="demand"
    >
      <Center bottom>
        <CanObject />
      </Center>
      <SkateBackground />

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={3} />
      <CameraControls />
    </Canvas>
  );
};

export default CanScene;
