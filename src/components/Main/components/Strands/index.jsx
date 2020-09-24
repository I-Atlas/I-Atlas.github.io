import React, { useState, useRef } from "react";
import * as THREE from "three";
import * as meshline from "three.meshline";
import { extend, useFrame } from "react-three-fiber";
import { COLORS } from "..";

extend(meshline);

function Strands() {
  const material = useRef();
  const [color] = useState(
    () => COLORS[parseInt(COLORS.length * Math.random())]
  );
  const [ratio] = useState(() => 0.5 + 0.5 * Math.random());
  const [width] = useState(() => Math.max(0.1, 0.4 * Math.random()));
  const [curve] = useState(() => {
    let pos = new THREE.Vector3(
      30 - 60 * Math.random(),
      -5,
      10 - 20 * Math.random()
    );

    return new Array(30)
      .fill()
      .map(() =>
        pos
          .add(
            new THREE.Vector3(
              2 - Math.random() * 4,
              4 - Math.random() * 2,
              5 - Math.random() * 10
            )
          )
          .clone()
      );
  });

  useFrame(() => (material.current.uniforms.dashOffset.value -= 0.0005));

  return (
    <mesh>
      <meshLine
        vertices={curve}
        onUpdate={(self) => (self.parent.geometry = self.geometry)}
      >
        <geometry onUpdate={(self) => self.parent.setGeometry(self)}>
          <catmullRomCurve3
            args={[curve]}
            onUpdate={(self) => (self.parent.vertices = self.getPoints(500))}
          />
        </geometry>
      </meshLine>
      <meshLineMaterial
        attach="material"
        ref={material}
        depthTest={false}
        lineWidth={width}
        color={color}
        dashArray={0.2}
        dashRatio={ratio}
      />
    </mesh>
  );
}

export default Strands;
