import React, { useEffect, useRef, useMemo } from "react";
import { useThree, useFrame, extend } from "react-three-fiber";
import * as THREE from "three";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { AdditiveBlendingShader, VolumetricLightShader } from "..";
import { DEFAULT, OCCLUSION } from "..";

extend({ EffectComposer, RenderPass, ShaderPass });

function Effects() {
  const { gl, scene, camera, size } = useThree();
  const occlusionComposer = useRef();
  const composer = useRef();
  const occlusionRenderTarget = useMemo(
    () => new THREE.WebGLRenderTarget(),
    []
  );

  useEffect(() => {
    occlusionComposer.current.setSize(size.width, size.height);
    composer.current.setSize(size.width, size.height);
  }, [size]);

  useFrame(() => {
    camera.layers.set(OCCLUSION);
    occlusionComposer.current.render();
    camera.layers.set(DEFAULT);
    composer.current.render();
  }, 1);

  return (
    <>
      <mesh layers={OCCLUSION} position={[0, 4.5, -10]}>
        <sphereBufferGeometry attach="geometry" args={[5, 32, 32]} />
        <meshBasicMaterial attach="material" />
      </mesh>
      <effectComposer
        ref={occlusionComposer}
        args={[gl, occlusionRenderTarget]}
        renderToScreen={false}
      >
        <renderPass attachArray="passes" args={[scene, camera]} />
        <shaderPass
          attachArray="passes"
          args={[VolumetricLightShader]}
          needsSwap={false}
        />
      </effectComposer>
      <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray="passes" args={[scene, camera]} />
        <shaderPass
          attachArray="passes"
          args={[AdditiveBlendingShader]}
          uniforms-tAdd-value={occlusionRenderTarget.texture}
        />
        <shaderPass
          attachArray="passes"
          args={[FXAAShader]}
          uniforms-resolution-value={[1 / size.width, 1 / size.height]}
          renderToScreen
        />
      </effectComposer>
    </>
  );
}

export default Effects;
