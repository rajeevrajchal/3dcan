import { useGLTF, useVideoTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const CanObject = () => {
  const can = useGLTF("/can/scene.gltf");
  const videoTexture = useVideoTexture("/skate.mp4");
  const canRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (canRef.current && ringRef.current) {
      const scrollY = window.scrollY;
      canRef.current.rotation.y = scrollY * 0.01;
      ringRef.current.rotation.y = scrollY * 0.01;
    }
  });

  return (
    <group>
      <primitive
        object={can.scene}
        ref={canRef}
        scale={[4, 4, 4]}
        position={[0, 0, 0]}
      />
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <torusKnotGeometry args={[1, 0.05, 100, 10]} />{" "}
        <meshStandardMaterial map={videoTexture} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default CanObject;
