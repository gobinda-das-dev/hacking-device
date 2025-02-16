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
         <mesh geometry={nodes.screen.geometry}/>
         <Text position={[0, 0, 0.1]} color='black'>{text}</Text>
      </group>
   )
}

export default Screen
