import { FunctionComponent } from "react";
import Head from "next/head";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import Scene from "../components/Scene";

const Page: FunctionComponent = () => {
    return (
        <>
            <Head>
                <title>Milky Safe Assets</title>
            </Head>
            <div className="bg-black flex h-screen">
                <Canvas className="canvas" dpr={[1, 2]}>
                    <Scene />
                </Canvas>
            </div>
        </>
    );
};

export default Page;
