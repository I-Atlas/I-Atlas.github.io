import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useFrame } from "react-three-fiber";
import { draco } from "drei";
import { DEFAULT } from "..";

function Model({ layer = DEFAULT }) {
  const group = useRef();

  const gltf = useLoader(GLTFLoader, "/scene.glb", draco());

  const material = useMemo(() => {
    if (layer === DEFAULT)
      return new THREE.MeshStandardMaterial({
        color: new THREE.Color("#EBC8B2"),
        roughness: 1,
        metalness: 1.4,
      });
    return new THREE.MeshBasicMaterial({ color: new THREE.Color("#EBC8B2") });
  }, [layer]);

  useFrame(() => {
    group.current.rotation.y += 0.001;
  });

  return (
    <group ref={group}>
      <group rotation={[-1.57, 0, 0]} position={[0, 2, 0]}>
        <mesh material={material} layers={layer} receiveShadow castShadow>
          <bufferGeometry attach="geometry" {...gltf.__$[4].geometry} />
        </mesh>
        <mesh material={material} layers={layer} receiveShadow castShadow>
          <bufferGeometry attach="geometry" {...gltf.__$[5].geometry} />
        </mesh>
        <mesh material={material} layers={layer} receiveShadow castShadow>
          <bufferGeometry attach="geometry" {...gltf.__$[6].geometry} />
        </mesh>
      </group>
    </group>
  );
}

export default Model;
