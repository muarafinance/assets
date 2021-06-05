import { FunctionComponent } from "react";
import Head from "next/head";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";

const Page: FunctionComponent = () => {
    return (
        <div className="bg-black flex h-screen">
            <Canvas className="canvas">
                <pointLight
                    position={[-10, 0, -20]}
                    color="red"
                    intensity={2.5}
                />
            </Canvas>
        </div>
    );
};

export default Page;
