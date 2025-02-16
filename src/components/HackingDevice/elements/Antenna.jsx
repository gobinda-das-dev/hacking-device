import { useGLTF } from '@react-three/drei';
import React from 'react'

const Antenna = () => {
   const { nodes, materials } = useGLTF('/models/hacking-device.glb');

   return (
      <group>
         <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.003']} position={[2.474, 15.069, 0.884]} scale={0.451} />
         <mesh geometry={nodes.Cube043.geometry} material={materials['Material.003']} />
         <mesh geometry={nodes.Cube044.geometry} material={materials['Material.022']} position={[2.474, 16.839, 0.811]} scale={[1, 0.553, 1]} />
         <mesh geometry={nodes.Sphere.geometry} material={materials['Material.003']} position={[2.474, 28.168, 0.884]} scale={0.602} />
         <mesh geometry={nodes.Cylinder002.geometry} material={materials['Material.003']} position={[2.474, 28.41, 0.884]} scale={[0.561, 0.033, 0.561]} />
         <mesh geometry={nodes.Cube045.geometry} material={materials.Material} />
         <mesh geometry={nodes.Plane.geometry} material={materials['Material.019']} position={[2.439, 27.291, 1.009]} />
      </group>
   )
}

export default Antenna
