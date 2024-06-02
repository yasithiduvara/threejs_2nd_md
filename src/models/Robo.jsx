/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useRef, useLayoutEffect } from 'react';
import { useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
// import skyScene from '../assets/3d/sky.glb';
import skyScene from '../assets/3d/robo.glb';

export function Robo({ ...props }) {
  const { scene } = useGLTF(skyScene);
  const skyRef = useRef();
  const tl = useRef();
  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // Sky 360-degree Rotation
    tl.current.to(
      skyRef.current.rotation,
      { duration: 2, y: Math.PI * 2 },
      0
    );

    // Additional animations can be added here
  }, []);

  return (
    <mesh ref={skyRef} {...props}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Robo;
