import React, { useEffect } from "react";
import * as THREE from "three";
import { $FIX_ME } from "../../types/fix_me";

const CanTexture: React.FC<{ can: $FIX_ME }> = ({ can }: $FIX_ME) => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const skateTexture = textureLoader.load(
      "src/assets/skate.gif",
      (texture) => {
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.offset.set(0, 0.2); // Move the texture position
        texture.repeat.set(1, 1); // Repeat the texture
        texture.rotation = Math.PI / 2; // Rotate the texture 45 degrees
      }
    );

    // Apply the skate texture to the can material
    can.scene.traverse((child: $FIX_ME) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material && Array.isArray(mesh.material)) {
          mesh.material.forEach((material) => {
            if (material instanceof THREE.MeshStandardMaterial) {
              material.map = skateTexture;
              material.needsUpdate = true;
            }
          });
        } else if (mesh.material instanceof THREE.MeshStandardMaterial) {
          mesh.material.map = skateTexture;
          mesh.material.needsUpdate = true;
        }
      }
    });
  }, [can]);

  return null;
};

export default CanTexture;
