"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 1800;
    const array = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      const radius = Math.random() * 4.5;
      const angle = Math.random() * Math.PI * 2;

      array[i3] =
        Math.cos(angle) * radius +
        (Math.random() - 0.5);

      array[i3 + 1] =
        (Math.random() - 0.5) * 6;

      array[i3 + 2] =
        Math.sin(angle) * radius +
        (Math.random() - 0.5);
    }

    return array;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;

    ref.current.rotation.y += delta * 0.035;
    ref.current.rotation.z =
      Math.sin(state.clock.elapsedTime * 0.25) *
      0.08;
  });

  return (
    <Points
      ref={ref}
      positions={positions}
      stride={3}
      frustumCulled
    >
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.035}
        sizeAttenuation
        depthWrite={false}
        opacity={0.65}
      />
    </Points>
  );
}

export function SpiritScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 8],
        fov: 40
      }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={1} />

      <ParticleField />
    </Canvas>
  );
}