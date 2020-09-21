import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";
import { Renders, Effects, OCCLUSION } from "./components";

function Model() {
  return (
    <Canvas
      shadowMap
      style={{ background: "#171717" }}
      camera={{ position: [0, 0, 8], fov: 50 }}
      gl={{ antialias: false }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.ReinhardToneMapping;
        gl.outputEncoding = THREE.sRGBEncoding;
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 60, -100]} intensity={20} />
      <pointLight position={[-50, 0, -50]} intensity={2} />
      <spotLight
        castShadow
        intensity={8}
        angle={Math.PI / 10}
        position={[10, 10, 10]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <mesh position={[0, 4.5, -10]}>
        <sphereBufferGeometry attach="geometry" args={[4.9, 32, 32]} />
        <meshBasicMaterial attach="material" transparent opacity={0.5} />
      </mesh>
      <Suspense fallback={null}>
        <Renders />
        <Renders layer={OCCLUSION} />
      </Suspense>
      <Effects />
    </Canvas>
  );
}

export default Model;
