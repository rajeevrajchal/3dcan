import { Center, useVideoTexture } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import React, { useMemo } from "react";
import * as THREE from "three";
import { $FIX_ME } from "../types/fix_me";

export function curvedPlaneGeometry(width = 1, height = 1, radius = 2) {
  const segments = 32;
  const segmentsH = segments;
  const segmentsV = segments / (width / height); // square
  const geometry = new THREE.PlaneGeometry(width, height, segmentsH, segmentsV);

  let heightMin = Infinity;
  let heightMax = -Infinity;

  const distanceMax = Math.sqrt((width / 2) ** 2 + (height / 2) ** 2);
  radius = Math.max(distanceMax, radius);

  const position = geometry.attributes.position;
  for (let i = 0; i < position.count; i++) {
    const x = position.getX(i);
    const y = position.getY(i);

    const distance = Math.sqrt(x * x + y * y);
    const height = Math.sqrt(Math.max(radius ** 2 - distance ** 2, 0));
    heightMin = Math.min(height, heightMin);
    heightMax = Math.max(height, heightMax);
    position.setZ(i, height);
  }

  // geometry.computeVertexNormals()
  // position.needsUpdate = true

  return { geometry, heightMin, heightMax };
}

export function CurvedPlane({
  width,
  height,
  radius,
  children,
  ...props
}: $FIX_ME) {
  const { geometry, heightMax } = useMemo(
    () => curvedPlaneGeometry(width, height, radius),
    [width, height, radius]
  );

  return (
    <group {...props}>
      <mesh
        geometry={geometry}
        receiveShadow
        castShadow
        position-z={-heightMax}
      >
        {children}
      </mesh>
    </group>
  );
}

const SkateBackground: React.FC<MeshProps> = () => {
  const texture = useVideoTexture("src/assets/skate.mp4");
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.x = -1;
  texture.offset.x = 1;

  const ratio = 16 / 9;
  const width = 4;
  const radius = -5;

  const r = useMemo(
    () =>
      texture.image
        ? texture.image.videoWidth / texture.image.videoHeight
        : ratio,
    [texture.image, ratio]
  );

  return (
    <Center>
      <CurvedPlane width={width} height={width / r} radius={radius}>
        <meshStandardMaterial
          side={THREE.DoubleSide}
          map={texture}
          toneMapped={false}
          transparent
          opacity={0.9}
        />
      </CurvedPlane>
    </Center>
  );
};

export default SkateBackground;
