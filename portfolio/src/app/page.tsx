"use client";
import { Suspense, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import Loader from "@/components/Loader";
import { Island } from "@/models/Island";

export default function Home() {
  return (
    <main className="w-full h-screen relative">
      {/*  <div className='absolute top-28 left-0 right-0 z-10 flex justify-center items-center'>
        popup
      </div>  */}

      <div id="canvas-container w-full h-screen bg-transparent">
        <Canvas
          frameloop="demand"
          className="w-full h-screen bg-transparent"
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight />
            <ambientLight intensity={0.5} />
            <pointLight position={[3, 6, -4]} />
            <spotLight />
            <hemisphereLight />
            <Island/>
          </Suspense>
        </Canvas>
      </div>
    </main>
  );
}
