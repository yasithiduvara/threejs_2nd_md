/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import { useScroll, ScrollControls } from "@react-three/drei";
import Loader from "../components/Loader";
import HomeInfo from "../components/HomeInfo";
import { ClearSky } from "../models/ClearSky";
import { Office } from "../models/Office";
import Islandx from "../models/Islandx";
import Island from "../models/Island";
import Robo from "../models/Robo";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  // Adjust Island position and scale for screen size
  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1, 1, 1];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -1.5, 0];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative bg-blue-900 flex items-center justify-center">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >

      <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={5} />
          <ambientLight intensity={0.8} />
          <ScrollControls pages={8} damping={0.25}>
            <ScrollManager setCurrentStage={setCurrentStage} />
            <Island position={islandPosition} />
            <ClearSky />
          </ScrollControls>
        </Suspense>
    
      </Canvas>
    </section>
  );
};

const ScrollManager = ({ setCurrentStage }) => {
  const scroll = useScroll();

  useFrame(() => {
    const scrollOffset = scroll.offset;
    const newStage = Math.ceil(scrollOffset * 4); // Assuming 4 stages, adjust as needed
    setCurrentStage(newStage);
  });

  return null;
};

export default Home;
