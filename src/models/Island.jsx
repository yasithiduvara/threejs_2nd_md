/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useRef, useLayoutEffect } from 'react';
import { useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import islandScene from '../assets/3d/bg.glb';
import { a } from '@react-spring/three';

const Island = ({ ...props }) => {
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
    <a.group ref={islandRef} {...props} dispose={null}>
    <group position={[1.053, 0.206, 1.153]}>
      <mesh
        geometry={nodes.Object_14.geometry}
        material={materials.Wood_fence}
      />
      <mesh
        geometry={nodes.Object_15.geometry}
        material={materials.Wood_molding}
      />
    </group>
    <group position={[2.6, 1.325, -0.675]}>
      <mesh
        geometry={nodes.Object_90.geometry}
        material={materials.Leaves1}
        position={[-0.013, 0.238, 0.024]}
      />
    </group>
    <group position={[2.429, 0.229, -0.356]}>
      <mesh
        geometry={nodes.Object_93.geometry}
        material={materials.Leaves2}
        position={[-0.069, 0.045, -0.066]}
      />
    </group>
    <group position={[0.652, 0.437, -0.07]}>
      <mesh
        geometry={nodes.Object_99.geometry}
        material={materials.Wood_fence}
      />
      <mesh
        geometry={nodes.Object_100.geometry}
        material={materials.Wood_molding}
      />
    </group>
    <mesh
      geometry={nodes.Object_4.geometry}
      material={materials.Barrel}
      position={[0.587, 0.142, 1.65]}
    />
    <mesh
      geometry={nodes.Object_6.geometry}
      material={materials.Rocks}
      position={[0.684, 0.087, 1.006]}
    />
    <mesh
      geometry={nodes.Object_8.geometry}
      material={materials.Wood_fence}
      position={[0.66, 0.128, 0.971]}
    />
    <mesh
      geometry={nodes.Object_10.geometry}
      material={materials.Rocks}
      position={[0.398, 0.044, 1.188]}
    />
    <mesh
      geometry={nodes.Object_12.geometry}
      material={materials.Rocks}
      position={[1.714, 0.044, 1.134]}
    />
    <mesh
      geometry={nodes.Object_17.geometry}
      material={materials.Rocks}
      position={[1.816, 0.027, 1.112]}
    />
    <mesh
      geometry={nodes.Object_19.geometry}
      material={materials.Rocks}
      position={[0.303, 0.035, 1.202]}
    />
    <mesh
      geometry={nodes.Object_21.geometry}
      material={materials.Wood_fence}
      position={[1.046, 0.26, 1.155]}
    />
    <mesh
      geometry={nodes.Object_23.geometry}
      material={materials.Wood_fence}
      position={[1.064, 0.381, 1.151]}
    />
    <mesh
      geometry={nodes.Object_25.geometry}
      material={materials.Metal}
      position={[1.053, 0.337, 1.421]}
    />
    <mesh
      geometry={nodes.Object_27.geometry}
      material={materials.Tiles}
      position={[0.721, 0.354, 0.461]}
    />
    <mesh
      geometry={nodes.Object_29.geometry}
      material={materials.Wood_fence}
      position={[0.712, 0.114, 0.404]}
    />
    <mesh
      geometry={nodes.Object_31.geometry}
      material={materials.Walls}
      position={[0.721, 0.202, 0.467]}
    />
    <mesh
      geometry={nodes.Object_33.geometry}
      material={materials.Metal}
      position={[0.721, 0.354, 0.461]}
    />
    <mesh
      geometry={nodes.Object_35.geometry}
      material={materials.Metal}
      position={[-0.687, 0.476, 0.628]}
    />
    <mesh
      geometry={nodes.Object_37.geometry}
      material={materials.Bricks}
      position={[-0.187, 2.207, -0.421]}
    />
    <mesh
      geometry={nodes.Object_39.geometry}
      material={materials.Wood_molding}
      position={[-0.52, 0.533, 0.568]}
    />
    <mesh
      geometry={nodes.Object_41.geometry}
      material={materials.Wood_fence}
      position={[-0.533, 1.377, 0.625]}
    />
    <mesh
      geometry={nodes.Object_43.geometry}
      material={materials.Wood_molding}
      position={[-1.067, 0.92, -0.074]}
    />
    <mesh
      geometry={nodes.Object_45.geometry}
      material={materials.Smoke}
      position={[-0.189, 2.822, -0.503]}
    />
    <mesh
      geometry={nodes.Object_47.geometry}
      material={materials.Wood_molding}
      position={[-0.542, 1.629, -0.07]}
    />
    <mesh
      geometry={nodes.Object_49.geometry}
      material={materials.Wood_molding}
      position={[0.19, 1.075, -0.063]}
    />
    <mesh
      geometry={nodes.Object_51.geometry}
      material={materials.Wood_molding}
      position={[-0.543, 2.231, -0.069]}
    />
    <mesh
      geometry={nodes.Object_53.geometry}
      material={materials.Wood_molding}
      position={[-0.542, 0.773, -0.07]}
    />
    <mesh
      geometry={nodes.Object_55.geometry}
      material={materials.Wood_molding}
      position={[-0.542, 1.235, -0.07]}
    />
    <mesh
      geometry={nodes.Object_57.geometry}
      material={materials.Wood_molding}
      position={[-0.542, 1.376, 0.656]}
    />
    <mesh
      geometry={nodes.Object_59.geometry}
      material={materials.Wood_molding}
      position={[-1.044, 0.915, -0.062]}
    />
    <mesh
      geometry={nodes.Object_61.geometry}
      material={materials.Bricks}
      position={[-0.409, 0.02, -0.07]}
    />
    <mesh
      geometry={nodes.Object_63.geometry}
      material={materials.Bricks}
      position={[-0.542, 0.133, -0.07]}
    />
    <mesh
      geometry={nodes.Object_65.geometry}
      material={materials.Tiles}
      position={[-0.542, 1.919, -0.07]}
    />
    <mesh
      geometry={nodes.Object_67.geometry}
      material={materials.Tiles}
      position={[-0.542, 1.924, -0.07]}
    />
    <mesh
      geometry={nodes.Object_69.geometry}
      material={materials.Tiles}
      position={[0.205, 1.106, -0.062]}
    />
    <mesh
      geometry={nodes.Object_71.geometry}
      material={materials.Island}
      position={[0.735, -1.301, 0.447]}
    />
    <mesh
      geometry={nodes.Object_73.geometry}
      material={materials.Water}
      position={[1.013, -1.073, 0.42]}
    />
    <mesh
      geometry={nodes.Object_75.geometry}
      material={materials.House}
      position={[-0.435, 1.082, -0.07]}
    />
    <mesh
      geometry={nodes.Object_77.geometry}
      material={materials.Grass}
      position={[0.738, 0.03, 0.421]}
    />
    <mesh
      geometry={nodes.Object_79.geometry}
      material={materials.Rocks}
      position={[1.029, 0.028, 1.069]}
    />
    <mesh
      geometry={nodes.Object_81.geometry}
      material={materials.Metal}
      position={[-0.92, 0.998, 0.983]}
    />
    <mesh
      geometry={nodes.Object_83.geometry}
      material={materials.Metal}
      position={[-0.92, 0.945, 0.957]}
    />
    <mesh
      geometry={nodes.Object_85.geometry}
      material={materials.Wood_fence}
      position={[-0.92, 0.788, 0.976]}
    />
    <mesh
      geometry={nodes.Object_87.geometry}
      material={materials.Metal}
      position={[-0.92, 0.998, 0.666]}
    />
    <mesh
      geometry={nodes.Object_95.geometry}
      material={materials.Wood_stump}
      position={[2.6, 1.325, -0.675]}
    />
    <mesh
      geometry={nodes.Object_97.geometry}
      material={materials.Wood_stump}
      position={[2.429, 0.229, -0.356]}
    />
    <mesh
      geometry={nodes.Object_102.geometry}
      material={materials.Metal}
      position={[0.466, 0.437, -0.07]}
    />
    <mesh
      geometry={nodes.Object_104.geometry}
      material={materials.Wood_fence}
      position={[0.652, 0.439, -0.07]}
    />
    <mesh
      geometry={nodes.Object_106.geometry}
      material={materials.Wood_fence}
      position={[0.652, 0.437, -0.07]}
    />
    <mesh
      geometry={nodes.Object_108.geometry}
      material={materials.Wood_fence}
      position={[0.652, 0.437, -0.07]}
    />
    <mesh
      geometry={nodes.Object_110.geometry}
      material={materials.Metal}
      position={[0.765, 0.437, -0.07]}
    />
  </a.group>
  );
};

export default Island;
