"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Hero3D from "./Hero3D";
import StarsBackground from "./Stars";

const Scene = () => {
    return (
        <div className="fixed inset-0 -z-10 bg-white dark:bg-slate-950 transition-colors duration-700">
            <Canvas shadows dpr={[1, 2]}>
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />

                    <ambientLight intensity={1} />
                    <pointLight position={[10, 10, 10]} intensity={500} color="#38bdf8" />
                    <spotLight
                        position={[-10, 10, 10]}
                        angle={0.15}
                        penumbra={1}
                        intensity={500}
                        color="#ffffff"
                        castShadow
                    />

                    <Hero3D />
                    <StarsBackground />

                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        autoRotate
                        autoRotateSpeed={0.5}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Scene;
