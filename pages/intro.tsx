import { FunctionComponent, useRef } from "react";
import Head from "next/head";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

const AnimationBox: FunctionComponent = () => {
    const boxMesh = useRef();

    useFrame(({ clock }) => {
        console.log("Animated");
        // @ts-ignore
        boxMesh.current.rotation.x = clock.getElapsedTime();
        // console.log(a);
    });

    return (
        <mesh ref={boxMesh}>
            <boxGeometry />
            <meshBasicMaterial color="royalblue" />
        </mesh>
    );
};

const Page: FunctionComponent = () => {
    // const CanvasWithGUI = withControls(Canvas);

    return (
        <>
            <Head>
                <title>Three.js Introduction</title>
            </Head>
            <div className="flex h-screen">
                <Canvas>
                    <AnimationBox />
                </Canvas>
            </div>
        </>
    );
};

export default Page;
