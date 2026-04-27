import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random points in a sphere
  const [positions, colors] = useMemo(() => {
    const count = 3000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    const color1 = new THREE.Color('#B8956A'); // Bronze
    const color2 = new THREE.Color('#C4704A'); // Terracotta
    const color3 = new THREE.Color('#ffffff'); // White
    
    for (let i = 0; i < count; i++) {
      // Spherical distribution
      const r = 15 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      
      // Mix colors based on position
      const mixedColor = color1.clone();
      const rand = Math.random();
      if (rand > 0.6) mixedColor.lerp(color2, Math.random());
      else if (rand > 0.3) mixedColor.lerp(color3, Math.random());
      
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }
    
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    
    // Slow rotation
    ref.current.rotation.x = state.clock.elapsedTime * 0.05;
    ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    
    // Subtle breathing effect
    const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    ref.current.scale.set(scale, scale, scale);
  });

  return (
    <Points ref={ref} positions={positions} colors={colors} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.6}
      />
    </Points>
  );
}

export default function InteractiveBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ParticleField />
      </Canvas>
    </div>
  );
}
