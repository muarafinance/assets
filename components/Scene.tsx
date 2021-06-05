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
                <pointLight
                    ref={light}
                    position-z={-15}
                    intensity={1}
                    color="#F8C069"
                />
            </PerspectiveCamera>
            <Suspense fallback={null}>
                <mesh scale={1}>
                    <sphereBufferGeometry args={[1, 64, 64]} />
                    <MeshDistortMaterial
                        attach="material"
                        color="#FFF"
                        envMapIntensity={1}
                        clearcoat={1}
                        clearcoatRoughness={0}
                        metalness={0.1}
                        // speed={0}
                        distort={0.7}
                    />
                </mesh>
                <Environment preset="warehouse" />
                <ContactShadows
                    rotation={[Math.PI / 2, 0, 0]}
                    position={[0, -1.6, 0]}
                    opacity={0.8}
                    width={15}
                    height={15}
                    blur={2.5}
                    far={1.6}
                />
            </Suspense>
        </>
    );
};

export default Scene;
