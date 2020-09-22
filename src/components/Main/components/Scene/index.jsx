import * as THREE from "three";
import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { LINES, Lines } from "..";

function Scene() {
  let group = useRef();
  let theta = 0;

  useFrame(() =>
    group.current.rotation.set(
      0,
      5 * Math.sin(THREE.Math.degToRad((theta += 0.02))),
      0
    )
  );

  return (
    <group ref={group}>
      <group position={[0, -50, 0]}>
        {LINES.map((_, index) => (
          <Lines key={index} />
        ))}
      </group>
    </group>
  );
}

export default Scene;
