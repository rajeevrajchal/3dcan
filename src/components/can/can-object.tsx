import { useGLTF } from "@react-three/drei";

const CanObject = () => {
  const can = useGLTF("/can/scene.gltf");

  return (
    <mesh>
      <ambientLight />
      <directionalLight position={[-12, 80, 20]} intensity={1} />
      <primitive object={can.scene} scale={10} position={[0, -1.25, -0.5]} />
    </mesh>
  );
};

export default CanObject;
