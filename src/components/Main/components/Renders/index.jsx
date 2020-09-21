import * as THREE from "three";
import React, { useRef, useMemo } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { DEFAULT } from "../../../Model/components";

function Renders({ layer = DEFAULT }) {
  const group = useRef();

  const gltf = useLoader(GLTFLoader, "/scene.glb", (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco-gltf/");
    loader.setDRACOLoader(dracoLoader);
  });

  const material = useMemo(() => {
    if (layer === DEFAULT)
      return new THREE.MeshStandardMaterial({
        color: new THREE.Color("#5e5557"),
        roughness: 0.5,
        metalness: 1.3,
        wireframe: true,
      });
    return new THREE.MeshBasicMaterial({ color: new THREE.Color("#5e5557") });
  }, [layer]);

 useFrame(() => {
    group.current.rotation.y += 0.001;
  });

  return (
    <group ref={group}>
      <group rotation={[-1.5707963267948963, 0, 0]} position={[0, 2, 0]}>
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

export default Renders;
