import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sphere, Torus, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

const GlassBlob = ({ position, color, speed = 1, distort = 0.4, size = 1 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  distort?: number;
  size?: number;
}) => {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.12 * speed;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.18 * speed;
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 * speed) * 0.3;
    }
  });

  return (
    <Float speed={speed * 1.2} rotationIntensity={0.3} floatIntensity={1}>
      <Sphere ref={mesh} args={[size, 128, 128]} position={position}>
        <MeshDistortMaterial
          color={color}
          roughness={0.05}
          metalness={0.8}
          distort={distort}
          speed={1.5}
          transparent
          opacity={0.45}
          envMapIntensity={2}
        />
      </Sphere>
    </Float>
  );
};

const WireRing = ({ position, color, speed = 1, size = 1 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
  size?: number;
}) => {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.25 * speed;
      mesh.current.rotation.z = state.clock.elapsedTime * 0.15 * speed;
    }
  });

  return (
    <Float speed={speed * 1.5} rotationIntensity={0.6} floatIntensity={0.8}>
      <Torus ref={mesh} args={[size, 0.02, 16, 100]} position={position}>
        <meshStandardMaterial color={color} roughness={0.1} metalness={0.9} transparent opacity={0.4} emissive={color} emissiveIntensity={0.15} />
      </Torus>
    </Float>
  );
};

const CrystalGem = ({ position, color, speed = 1 }: {
  position: [number, number, number];
  color: string;
  speed?: number;
}) => {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.35 * speed;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.2 * speed;
    }
  });

  return (
    <Float speed={speed * 2} rotationIntensity={1} floatIntensity={1.5}>
      <Icosahedron ref={mesh} args={[0.4, 0]} position={position}>
        <MeshWobbleMaterial
          color={color}
          roughness={0.05}
          metalness={0.9}
          factor={0.2}
          speed={1}
          transparent
          opacity={0.5}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </Icosahedron>
    </Float>
  );
};

const ParticleSwarm = () => {
  const count = 300;
  const mesh = useRef<THREE.Points>(null!);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      [0.55, 0.36, 0.96],  // violet
      [0.93, 0.29, 0.60],  // pink
      [0.55, 0.36, 0.96],  // violet again
      [0.13, 0.83, 0.93],  // cyan
    ];
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c[0];
      col[i * 3 + 1] = c[1];
      col[i * 3 + 2] = c[2];
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const HeroScene3D = () => {
  return (
    <div className="absolute inset-0 z-[2]">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#8b5cf6" />
        <directionalLight position={[-5, -3, 3]} intensity={0.6} color="#ec4899" />
        <pointLight position={[0, 3, 4]} intensity={0.8} color="#8b5cf6" distance={15} />
        <pointLight position={[-4, -2, 2]} intensity={0.4} color="#ec4899" distance={12} />

        <GlassBlob position={[-3.5, 1.5, -2]} color="#8b5cf6" speed={0.6} distort={0.55} size={1.6} />
        <GlassBlob position={[3.5, -0.8, -3]} color="#ec4899" speed={0.4} distort={0.3} size={1.2} />
        <GlassBlob position={[1, -2.5, -1.5]} color="#8b5cf6" speed={0.8} distort={0.4} size={0.9} />
        <GlassBlob position={[-1.5, 3.5, -4]} color="#22d3ee" speed={0.3} distort={0.25} size={0.7} />

        <WireRing position={[4, 2, -1.5]} color="#8b5cf6" speed={0.5} size={1.3} />
        <WireRing position={[-4, -2, -2.5]} color="#ec4899" speed={0.7} size={1} />
        <WireRing position={[0, 0.5, -3]} color="#8b5cf6" speed={0.3} size={2.2} />

        <CrystalGem position={[-2, -3, 0]} color="#fbbf24" speed={0.6} />
        <CrystalGem position={[2.5, 3, -1]} color="#ec4899" speed={0.4} />
        <CrystalGem position={[-4.5, 0.5, -1]} color="#22d3ee" speed={0.5} />

        <ParticleSwarm />
      </Canvas>
    </div>
  );
};

export default HeroScene3D;
