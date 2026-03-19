"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Environment, ContactShadows, PresentationControls, Sparkles } from "@react-three/drei";
import { Suspense } from "react";

function StunningObject() {
  return (
    <PresentationControls
      global
      rotation={[0.13, 0.1, 0]}
      polar={[-0.4, 0.2]}
      azimuth={[-1, 0.75]}
      snap={true}
    >
      <Float rotationIntensity={2} floatIntensity={3} speed={2}>
        <mesh castShadow receiveShadow>
          <torusKnotGeometry args={[8, 2.5, 256, 64]} />
          <meshPhysicalMaterial
            color="#8b5cf6"
            emissive="#1a0b2e"
            roughness={0.05}
            metalness={0.9}
            clearcoat={1}
            transmission={0.95}
            thickness={2.5}
            ior={1.5}
          />
        </mesh>
      </Float>
    </PresentationControls>
  );
}

export function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 30], fov: 45 }}
      gl={{ antialias: true, preserveDrawingBuffer: true }}
      dpr={[1, 2]}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[20, 20, 20]} angle={0.2} penumbra={1} intensity={2} color="#f0abfc" />
      <spotLight position={[-20, -20, -20]} angle={0.2} penumbra={1} intensity={1} color="#3b82f6" />

      <Suspense fallback={null}>
        <Environment preset="city" />
        <StunningObject />
        <Sparkles count={300} scale={40} size={3} speed={0.5} opacity={0.4} color="#e879f9" />
        <ContactShadows position={[0, -12, 0]} opacity={0.6} scale={50} blur={2.5} far={15} />
      </Suspense>
    </Canvas>
  );
}
