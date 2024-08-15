import { useGLTF, useVideoTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { $FIX_ME } from "../../types/fix_me";

const CanObject = () => {
  const can = useGLTF("/can/scene.gltf");
  const videoTexture = useVideoTexture("/skate.mp4");
  const canRef = useRef<$FIX_ME>();
  const ringRef = useRef<$FIX_ME>();

  useFrame(() => {
    if (canRef.current && ringRef.current) {
      const scrollY = window.scrollY;
      canRef.current.rotation.y = scrollY * 0.01;
      ringRef.current.rotation.y = scrollY * 0.01;
    }
  });

  return (
    <group>
      <primitive object={can.scene} ref={canRef} />
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <ringGeometry args={[0.5, 1, 32]} />
        <meshStandardMaterial map={videoTexture} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default CanObject;
