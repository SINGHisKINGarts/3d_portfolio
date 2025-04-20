import React, { useState, useEffect, Suspense , useRef, use} from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../../models/Island';
import Sky from '../../models/Sky';
import Bird from '../../models/Bird';
import Plane from '../../models/Plane';
import HomeInfo from '../components/HomeInfo';

import sakura from '../sakura.mp3';
import { soundoff, soundon } from '../assets/icons';

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isDay, setIsDay] = useState(true);
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  useEffect(() => {
    const hour = new Date().getHours();
    setIsDay(hour >= 6 && hour < 18);
  }, []);

  const[isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) { 
      audioRef.current.play();
    } 
    
    return ()=>{
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const adjustIslandForScreenSize = () => {
    if (window.innerWidth < 768) {
      return [[0.9, 0.9, 0.9], [0, -6.5, -43], [0.1, 4.7, 0]];
    }
    return [[1, 1, 1], [0, -6.5, -43], [0.1, 4.7, 0]];
  };

  const adjustPlaneForScreenSize = () =>
    window.innerWidth < 768
      ? [[1.5, 1.5, 1.5], [0, -1.5, 0]]
      : [[3, 3, 3], [0, -4, -4]];

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        <HomeInfo currentStage={currentStage} />
      </div>
      <div
        className={`w-full h-screen ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseDown={() => setIsRotating(true)}
        onMouseUp={() => setIsRotating(false)}
      >
        <Canvas camera={{ near: 0.1, far: 1000 }}>
          <color attach="background" args={[isDay ? 0xb1e1ff : 0x000022]} />
          <Suspense fallback={<Loader />}>
            <directionalLight
              color={0xffffff}
              intensity={1.5}
              position={[5, 10, 7.5]}
            />
            <hemisphereLight
              skyColor={0xb1e1ff}
              groundColor={0xffffff}
              intensity={isDay ? 0.6 : 0.2}
            />
            <ambientLight intensity={0.5 } />

            <Bird />
            <Sky isRotating={isRotating} isDay={isDay} />
            <Island
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage}
            />
            <Plane
              isRotating={isRotating}
              scale={planeScale}
              position={planePosition}
              rotation={[0, 20, 0]}
            />
          </Suspense>
        </Canvas>

      </div>
      <div className="absolute bottom-2 left-2">
        <img src={!isPlaying ? soundoff : soundon}
        alt="sound"
        className="w-10 h-10 cursor-pointer object-contain"
        onClick={() => setIsPlaying(!isPlaying)}
        />
      </div>
    </section>
  );
};

export default Home;
