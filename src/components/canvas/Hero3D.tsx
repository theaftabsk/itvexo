"use client";

import { useRef } from "react";
import { Float, MeshDistortMaterial, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const Hero3D = () => {
    const sphereRef = useRef<THREE.Mesh>(null);
    const innerSphereRef = useRef<THREE.Mesh>(null);
    const particlesRef = useRef<THREE.Points>(null);

    useFrame(({ clock }) => {
        if (sphereRef.current) {
            sphereRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.2;
            sphereRef.current.rotation.y = clock.getElapsedTime() * 0.05;
        }
        if (innerSphereRef.current) {
            innerSphereRef.current.rotation.x = clock.getElapsedTime() * 0.15;
            innerSphereRef.current.rotation.y = -clock.getElapsedTime() * 0.08;
        }
        if (particlesRef.current) {
            particlesRef.current.rotation.y = clock.getElapsedTime() * 0.02;
        }
    });

    // Create particle positions
    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
        const radius = 3 + Math.random() * 2;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    return (
        <group>
            {/* Ambient Particles */}
            <points ref={particlesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particleCount}
                        array={positions}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial size={0.02} color="#22d1ee" transparent opacity={0.6} blending={THREE.AdditiveBlending} />
            </points>

            {/* Main Architectural Core */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
                <mesh ref={sphereRef}>
                    <sphereGeometry args={[1.5, 128, 128]} />
                    <MeshDistortMaterial
                        color="#6366f1"
                        attach="material"
                        distort={0.5}
                        speed={2.5}
                        roughness={0}
                        metalness={1}
                        emissive="#6366f1"
                        emissiveIntensity={0.3}
                        envMapIntensity={2}
                    />
                </mesh>
            </Float>

            {/* Inner Rotating Sphere */}
            <Float speed={3} rotationIntensity={0.8} floatIntensity={1.2}>
                <mesh ref={innerSphereRef}>
                    <sphereGeometry args={[0.8, 64, 64]} />
                    <meshStandardMaterial
                        color="#22d1ee"
                        wireframe
                        emissive="#22d1ee"
                        emissiveIntensity={0.8}
                        transparent
                        opacity={0.3}
                    />
                </mesh>
            </Float>

            {/* Aftab SK Text */}
            <Float speed={4} rotationIntensity={0.3} floatIntensity={1.5}>
                <Text
                    position={[0, 0, 2.2]}
                    fontSize={0.5}
                    color="#ffffff"
                    font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf"
                    anchorX="center"
                    anchorY="middle"
                    fontWeight={900}
                    letterSpacing={0.3}
                >
                    AFTAB SK
                    <meshStandardMaterial
                        color="#ffffff"
                        emissive="#6366f1"
                        emissiveIntensity={0.6}
                        metalness={0.8}
                        roughness={0.2}
                    />
                </Text>
            </Float>

            {/* Primary Orbiting Ring */}
            <Float speed={3} rotationIntensity={6} floatIntensity={2.5}>
                <mesh rotation={[Math.PI / 2, 0, 0]}>
                    <torusGeometry args={[3, 0.02, 16, 100]} />
                    <meshStandardMaterial
                        color="#22d1ee"
                        emissive="#22d1ee"
                        emissiveIntensity={2.5}
                        metalness={1}
                        roughness={0}
                    />
                </mesh>
            </Float>

            {/* Secondary Accent Ring */}
            <Float speed={2.5} rotationIntensity={-5} floatIntensity={2}>
                <mesh rotation={[0, Math.PI / 2, 0]}>
                    <torusGeometry args={[3.5, 0.015, 16, 100]} />
                    <meshStandardMaterial
                        color="#a855f7"
                        emissive="#a855f7"
                        emissiveIntensity={1.8}
                        transparent
                        opacity={0.6}
                    />
                </mesh>
            </Float>

            <ambientLight intensity={0.6} />
            <pointLight position={[15, 15, 15]} intensity={200} color="#6366f1" castShadow />
            <pointLight position={[-15, -15, -15]} intensity={200} color="#22d1ee" />
            <spotLight position={[0, 20, 0]} intensity={150} angle={0.3} penumbra={1} color="#a855f7" />
        </group>
    );
};

export default Hero3D;
