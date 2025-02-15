import { Text, useGLTF } from '@react-three/drei'
import React from 'react'

const Button = ({ children, fontWeight = 600, fontSize = 1, ...props }) => {
   const { nodes, materials } = useGLTF('/hacking-device.glb');
   const body = materials['BODY.001'];

   return (
      <group {...props} rotation={[Math.PI / 2, 0, 0]} scale={[0.139, 0.323, 0.131]}>
         <mesh geometry={nodes.Cube022.geometry} material={body} />
         <Text color='black' fontSize={4} scale={fontSize} fontWeight={fontWeight} position={[0, 0, 0]} rotation={[-Math.PI * 0.5, 0, 0]} position={[0, 1.3, 0]}>{children}</Text>
      </group>
   )
}

export default Button
