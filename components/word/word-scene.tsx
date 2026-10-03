"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function WordObject() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;

    group.current.rotation.y =
      state.pointer.x * 0.08;

    group.current.rotation.x =
      state.pointer.y * 0.04;
  });

  return (
    <Float
      speed={0.7}
      floatIntensity={0.35}
      rotationIntensity={0.12}
    >
      <group ref={group}>
        <Center>
          <Text3D
            font="/fonts/helvetiker_bold.typeface.json"
            size={1.2}
            height={0.08}
            curveSegments={6}
            bevelEnabled
            bevelThickness={0.025}
            bevelSize={0.02}
          >
            WORD
            <meshStandardMaterial
              color="#ffffff"
              metalness={0.8}
              roughness={0.15}
            />
          </Text3D>
        </Center>
      </group>
    </Float>
  );
}

export function WordScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 7],
        fov: 35
      }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={2} />

      <pointLight
        position={[4, 2, 4]}
        intensity={12}
        color="#2563eb"
      />

      <pointLight
        position={[-4, -2, 2]}
        intensity={8}
        color="#ffffff"
      />

      <WordObject />
    </Canvas>
  );
}