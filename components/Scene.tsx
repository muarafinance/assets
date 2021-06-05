import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
    PerspectiveCamera,
    Environment,
    MeshDistortMaterial,
    ContactShadows,
} from "@react-three/drei";
// import { useSpring } from "@react-spring/core";
// import { a } from "@react-spring/three";
import type { FunctionComponent } from "react";

const Scene: FunctionComponent<{}> = ({}) => {
    const light = useRef();

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={75}>
                <ambientLight intensity={1} />
            </PerspectiveCamera>
            <Suspense fallback={null}>
                <mesh
                    scale={1.5}
                    rotation={[Math.PI / 2, Math.PI / 1, Math.PI / 2]}
                >
                    <sphereBufferGeometry args={[1, 64, 64]} />
                    <MeshDistortMaterial
                        color="white"
                        envMapIntensity={1}
                        clearcoat={1}
                        clearcoatRoughness={0}
                        metalness={0.6}
                        speed={0}
                        distort={0.8}
                        skinning
                    />
                </mesh>
                <Environment preset="warehouse" />
            </Suspense>
        </>
    );
};

export default Scene;
