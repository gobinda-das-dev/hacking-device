import React, { useContext } from 'react'
import { HackingDeviceContext } from '../HackingDeviceContext'
import { Text } from '@react-three/drei'
import textStore from '../textStore'
import * as THREE from 'three'

const Screen = () => {
   const { nodes, materials } = useContext(HackingDeviceContext)
   const { text } = textStore();

   return (
      <group position={[-1.244, 13.249, 2.225]} scale={[1.003, 1.011, 1.003]}>
         <mesh geometry={nodes.screen.geometry}>
            <meshPhysicalMaterial
               metalness={0.9}
               roughness={0.05}
               envMapIntensity={0.9}
               clearcoat={1}
               transparent={true}
               // transmission={0.95}
               opacity={0.5}
               reflectivity={0.2}
               reflectivity={0.2}
               refractionRatio={0.985}
               ior={0.9}
               // side={THREE.BackSide}
               color='green'
            />
         </mesh>
         <Text position={[0, 0, -0.1]} color='black'>
            {text}
            <meshPhysicalMaterial
               metalness={0.9}
               roughness={0.05}
               envMapIntensity={0.9}
               clearcoat={1}
               transparent={true}
               // transmission={0.95}
               opacity={0.5}
               reflectivity={0.2}
               reflectivity={0.2}
               refractionRatio={0.985}
               ior={0.9}
               // side={THREE.BackSide}
               color='green'
            />
         </Text>
      </group>
   )
}

export default Screen
