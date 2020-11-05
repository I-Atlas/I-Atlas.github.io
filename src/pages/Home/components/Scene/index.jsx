import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { Stars } from "drei";
import { Model, StrandsMovement } from "..";

function Scene() {
  return (
    <Canvas
      style={{ background: "#fff3f0" }}
      camera={{ position: [0, 0, 10], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 60, -100]} intensity={20} />
      <pointLight position={[-50, 0, -50]} intensity={2} />
      <spotLight
        castShadow
        intensity={8}
        angle={Math.PI / 10}
        position={[10, 10, 10]}
      />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <Stars />
      <StrandsMovement />
    </Canvas>
  );
}

export default Scene;
