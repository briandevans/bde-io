import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const count = 2200;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const color1 = new THREE.Color('#4F6BFF');
    const color2 = new THREE.Color('#8A94A8');
    const color3 = new THREE.Color('#ffffff');

    for (let i = 0; i < count; i++) {
      const r = 15 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const mixedColor = color1.clone();
      const rand = Math.random();
      if (rand > 0.65) mixedColor.lerp(color2, Math.random());
      else if (rand > 0.35) mixedColor.lerp(color3, Math.random() * 0.5);

      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.04;
    ref.current.rotation.y = state.clock.elapsedTime * 0.025;
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.045}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.45}
      />
    </Points>
  );
}

export default function InteractiveBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-25 mix-blend-screen" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ParticleField />
      </Canvas>
    </div>
  );
}
