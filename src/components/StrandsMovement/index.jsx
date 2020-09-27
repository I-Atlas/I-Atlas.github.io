import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "react-three-fiber";
import { STRANDS, Strands } from "..";

function StrandsMovement() {
  let group = useRef();
  let theta = 0;

  useFrame(() =>
    group.current.rotation.set(
      0,
      5 * Math.sin(THREE.Math.degToRad((theta += 0.005))),
      0
    )
  );

  return (
    <group ref={group}>
      <group position={[0, -50, 0]}>
        {STRANDS.map((_, index) => (
          <Strands key={index} />
        ))}
      </group>
    </group>
  );
}

export default StrandsMovement;
