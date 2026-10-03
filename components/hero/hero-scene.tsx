"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  MeshTransmissionMaterial,
  OrbitControls,
  Sparkles
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function GlowingCore() {
  const coreRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.4;
      coreRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <group ref={coreRef}>
      {/* Primary Violet Energy Sphere */}
      <mesh position={[0.4, 0.3, -0.2]}>
        <sphereGeometry args={[0.65, 32, 32]} />
        <meshBasicMaterial color="#8b5cf6" />
      </mesh>

      {/* Secondary Amber Highlight Sphere */}
      <mesh position={[-0.5, -0.4, -0.1]}>
        <sphereGeometry args={[0.45, 32, 32]} />
        <meshBasicMaterial color="#f59e0b" />
      </mesh>
    </group>
  );
}

function Sculpture() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!mesh.current) return;

    mesh.current.rotation.x += delta * 0.08;
    mesh.current.rotation.y += delta * 0.12;

    mesh.current.rotation.x +=
      (state.pointer.y * 0.12 - mesh.current.rotation.x) * 0.02;

    mesh.current.rotation.z +=
      (state.pointer.x * 0.12 - mesh.current.rotation.z) * 0.02;
  });

  return (
    <Float
      speed={1.2}
      rotationIntensity={0.3}
      floatIntensity={0.5}
    >
      <group>
        {/* Internal light sources refracted through transmission material */}
        <GlowingCore />

        {/* Glass Outer Shell */}
        <mesh ref={mesh}>
          <icosahedronGeometry args={[1.8, 3]} />

          <MeshTransmissionMaterial
            backside
            samples={10}
            thickness={1.8}
            chromaticAberration={0.18}
            anisotropy={0.6}
            distortion={0.35}
            distortionScale={0.3}
            temporalDistortion={0.15}
            roughness={0.04}
            transmission={0.98}
            ior={1.52}
            color="#ffffff"
            attenuationDistance={1.2}
            attenuationColor="#7c3aed"
          />
        </mesh>
      </group>
    </Float>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 35
        }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true
        }}
      >
        <ambientLight intensity={0.8} />

        {/* Dynamic Key Lights */}
        <pointLight position={[5, 5, 5]} intensity={18} color="#ffffff" />
        <pointLight position={[-5, -4, 2]} intensity={14} color="#7c3aed" />
        <pointLight position={[0, -3, -3]} intensity={10} color="#3b82f6" />

        <Sculpture />

        <Sparkles
          count={120}
          scale={[8, 8, 8]}
          size={1.6}
          speed={0.3}
          opacity={0.65}
          color="#d8b4fe"
        />

        <Environment preset="city" />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}