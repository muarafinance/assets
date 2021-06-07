import { FunctionComponent } from "react";
import Head from "next/head";
import * as THREE from "three";
import Scene from "../components/Scene";
import { Canvas, useFrame } from "@react-three/fiber";
import Link from "next/link";

const Page: FunctionComponent = () => {
    // const CanvasWithGUI = withControls(Canvas);

    return (
        <>
            <Head>
                <title>Milky Safe Assets</title>
            </Head>
            <Link href="/intro">Intro</Link>
            <div className="flex h-screen">
                <Canvas>
                    <Scene />
                </Canvas>
            </div>
        </>
    );
};

export default Page;
