// src/models/Sky.js
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

// Import both day and night sky models
import skyDay from '../assets/3d/sk2.glb';
import skyNight from '../assets/3d/sk3.glb';

export default function Sky({ isRotating, isDay }) {
  // Load both GLTFs
  const { scene: dayScene } = useGLTF(skyDay);
  const { scene: nightScene } = useGLTF(skyNight);

  // Choose which one to render
  const activeScene = isDay ? dayScene : nightScene;

  const skyRef = useRef();
  useFrame((_, delta) => {
    if (isRotating && skyRef.current) {
      skyRef.current.rotation.y += 0.15 * delta;
    }
  });

  return (
    <primitive
      ref={skyRef}
      object={activeScene}
      dispose={null}
    />
  );
}
