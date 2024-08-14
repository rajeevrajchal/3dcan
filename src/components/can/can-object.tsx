import { useGLTF } from "@react-three/drei";

const CanObject = () => {
  const can = useGLTF("/can/scene.gltf");

  return (
    <mesh castShadow position={[0, 0, 0]}>
      <ambientLight />
      <directionalLight position={[-12, 80, 20]} intensity={1} />
      <primitive object={can.scene} scale={10} position={[0, -1.25, -0.5]} />
      {/* Apply skate.gif as texture, uncomment to check the texture */}
      {/* <CanTexture can={can} /> */}
    </mesh>
  );
};

export default CanObject;
