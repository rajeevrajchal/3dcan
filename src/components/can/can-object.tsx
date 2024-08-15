/* eslint-disable react-hooks/exhaustive-deps */
import { useGLTF, useTexture, useVideoTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import useApp from "../../store/app_data";
import { $FIX_ME } from "../../types/fix_me";

const CanObject = () => {
  const { showAction, selectTexture } = useApp();

  const can = useGLTF("/can/scene.gltf");
  const videoTexture = useVideoTexture("/skate.mp4");
  const skateTexture = useTexture("/skate.gif");

  const canRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (canRef.current && selectTexture !== "original") {
      canRef.current.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const meshChild = child as $FIX_ME;
          if (selectTexture === "static") {
            meshChild.material.map = skateTexture;
          } else if (selectTexture === "video") {
            meshChild.material.map = videoTexture;
          }
          meshChild.material.needsUpdate = true;
        }
      });
    }
  }, [skateTexture, selectTexture]);

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
        scale={8}
        position={[0, 0, 0]}
      />
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]} position={[0, 1, 0]}>
        {showAction === "torus_knot" && (
          <torusKnotGeometry args={[1, 0.05, 100, 10]} />
        )}
        {showAction === "ring" && <ringGeometry args={[0.8, 1, 32, 20]} />}{" "}
        {showAction === "torus" && (
          <torusGeometry args={[1.2, 0.25, 100, 20]} />
        )}
        <meshStandardMaterial map={videoTexture} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export default CanObject;
