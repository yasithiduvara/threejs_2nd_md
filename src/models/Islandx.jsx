/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useRef, useLayoutEffect } from 'react';
import { useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import islandScene from '../assets/3d/island.glb';
import { a } from '@react-spring/three';

const Islandx = ({ ...props }) => {
  const islandRef = useRef();
  const tl = useRef();
  const scroll = useScroll();
  const { nodes, materials } = useGLTF(islandScene);

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // Island 360-degree Rotation
    tl.current.to(
      islandRef.current.rotation,
      { duration: 2, y: Math.PI * 2 },
      0
    );

    // Additional animations can be added here
  }, []);

  return (
    <a.group ref={islandRef} {...props}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
};

export default Islandx;
