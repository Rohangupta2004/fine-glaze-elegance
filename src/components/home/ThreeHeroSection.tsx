import { memo, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Group } from "three";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type MouseTarget = { x: number; y: number };

const FacadeModel = memo(() => {
  const frameRef = useRef<Group>(null);

  const windowPositions = useMemo(() => {
    const cols = 10;
    const rows = 16;
    const positions: [number, number, number][] = [];

    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        positions.push([(col - (cols - 1) / 2) * 0.78, row * 0.44 - 3.2, 0.06]);
      }
    }

    return positions;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (frameRef.current) {
      frameRef.current.rotation.y = Math.sin(t * 0.28) * 0.05;
      frameRef.current.position.y = Math.sin(t * 0.4) * 0.08;
    }
  });

  return (
    <group ref={frameRef} position={[0, 0.3, 0]}>
      <mesh position={[0, 0, -0.2]}>
        <boxGeometry args={[8.6, 8.4, 0.2]} />
        <meshStandardMaterial color="#16191f" roughness={0.85} metalness={0.1} />
      </mesh>

      <mesh position={[0, 0, 0.02]}>
        <boxGeometry args={[8.7, 8.6, 0.06]} />
        <meshStandardMaterial color="#b4bcc8" metalness={0.95} roughness={0.2} envMapIntensity={1.2} />
      </mesh>

      {windowPositions.map((position) => (
        <mesh key={position.join("-")} position={position}>
          <planeGeometry args={[0.62, 0.32]} />
          <meshPhysicalMaterial
            color="#7cb8ff"
            metalness={0.1}
            roughness={0.04}
            transmission={0.72}
            transparent
            opacity={0.58}
            clearcoat={1}
            clearcoatRoughness={0.08}
            envMapIntensity={1.6}
            reflectivity={1}
          />
        </mesh>
      ))}
    </group>
  );
});

FacadeModel.displayName = "FacadeModel";

const CameraRig = ({ mouse }: { mouse: MouseTarget }) => {
  useFrame(({ camera }) => {
    camera.position.x += (mouse.x * 1.2 - camera.position.x) * 0.035;
    camera.position.y += (mouse.y * 0.55 + 1.6 - camera.position.y) * 0.035;
    camera.lookAt(0, 0, 0);
  });

  return null;
};

export const ThreeHeroSection = () => {
  const [mouse, setMouse] = useState<MouseTarget>({ x: 0, y: 0 });

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#0f0f0f]"
      onMouseMove={(event) => {
        const { clientX, clientY, currentTarget } = event;
        const rect = currentTarget.getBoundingClientRect();
        const x = ((clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((clientY - rect.top) / rect.height - 0.5) * -2;
        setMouse({ x, y });
      }}
    >
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
        camera={{ position: [0, 1.7, 9], fov: 42 }}
        className="absolute inset-0"
      >
        <ambientLight intensity={0.45} color="#90a3bf" />
        <directionalLight position={[7, 8, 5]} intensity={1.35} color="#d8e6ff" />
        <directionalLight position={[-5, 4, -3]} intensity={0.48} color="#8da7d1" />
        <Environment preset="city" />
        <CameraRig mouse={mouse} />
        <FacadeModel />
      </Canvas>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/70" />

      <div className="relative z-10 container mx-auto flex min-h-screen flex-col items-start justify-center px-4 py-24 text-white">
        <span className="mb-5 rounded-full border border-sky-300/40 bg-sky-300/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-sky-100">
          Fine Glaze • Facade + Aluminium Solutions
        </span>
        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
          Engineering the Future of Facades
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-200">
          Aluminium • ACP • Curtain Wall • Structural Glazing
        </p>
        <div className="pointer-events-auto mt-10 flex flex-wrap gap-4">
          <Link to="/portfolio">
            <Button size="lg" className="bg-sky-500 text-slate-950 hover:bg-sky-400">View Projects</Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-white/40 bg-white/5 text-white hover:bg-white/10">
              Get Quote in 60 sec <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
