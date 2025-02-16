/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 ./public/hacking-device.glb -o ./src/components/HackingDevice.jsx 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import Button from './Button'

const buttonData = [
  { fontWeight: 500, fontSize: 1.0, position: [-2.699, 10.238, 2.459], number: 1 },
  { fontWeight: 500, fontSize: 1.0, position: [-0.04, 10.238, 2.459], number: 2 },
  { fontWeight: 500, fontSize: 1.0, position: [2.606, 10.238, 2.459], number: 3 },
  { fontWeight: 500, fontSize: 1.0, position: [-2.699, 7.769, 2.459], number: 4 },
  { fontWeight: 500, fontSize: 1.0, position: [-0.04, 7.769, 2.459], number: 5 },
  { fontWeight: 500, fontSize: 1.0, position: [2.606, 7.769, 2.459], number: 6 },
  { fontWeight: 500, fontSize: 1.0, position: [-2.699, 5.242, 2.459], number: 7 },
  { fontWeight: 500, fontSize: 1.0, position: [-0.04, 5.242, 2.459], number: 8 },
  { fontWeight: 500, fontSize: 1.0, position: [2.606, 5.242, 2.459], number: 9 },
  { fontWeight: 700, fontSize: 0.6, position: [-2.699, 2.703, 2.459], number: "ENTER" },
  { fontWeight: 500, fontSize: 1.0, position: [-0.04, 2.703, 2.459], number: 0 },
  { fontWeight: 700, fontSize: 0.6, position: [2.606, 2.703, 2.459], number: "DELETE" },
];

export function HackingDevice(props) {
  const { nodes, materials } = useGLTF('/hacking-device.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, -0.276]}>
        <mesh geometry={nodes.Cube001.geometry} material={materials['BODY.001']} />
        <mesh geometry={nodes.Cube001_1.geometry} material={materials['USB AND CHARGIN']} />
        <mesh geometry={nodes.Cube001_2.geometry} material={materials.Screen} />
        <mesh geometry={nodes.Cube001_3.geometry} material={materials.Button} />
      </group>
      <mesh geometry={nodes.Cube006.geometry} material={materials['BODY.001']} position={[3.962, 10.492, 0.704]} scale={[1, 1, 0.771]} />
      <mesh geometry={nodes.Cube007.geometry} material={materials['BODY.001']} position={[3.962, 8.507, 0.704]} scale={[1, 1, 0.771]} />
      <group position={[2.709, 12.971, 2.875]} rotation={[Math.PI / 2, 0, 0]} scale={0.365}>
        <mesh geometry={nodes.Cylinder003.geometry} material={materials['Potentiometer B']} />
        <mesh geometry={nodes.Cylinder003_1.geometry} material={materials['Potentionmeter stripes']} />
      </group>
      <mesh geometry={nodes.screen.geometry} material={materials.Screen} position={[-1.244, 13.249, 2.225]} scale={[1.003, 1.011, 1.003]} />
      <mesh geometry={nodes.Cylinder001.geometry} material={materials['Material.003']} position={[2.474, 15.069, 0.884]} scale={0.451} />
      <mesh geometry={nodes.Cube043.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.Cube044.geometry} material={materials['Material.022']} position={[2.474, 16.839, 0.811]} scale={[1, 0.553, 1]} />
      <mesh geometry={nodes.Sphere.geometry} material={materials['Material.003']} position={[2.474, 28.168, 0.884]} scale={0.602} />
      <mesh geometry={nodes.Cylinder002.geometry} material={materials['Material.003']} position={[2.474, 28.41, 0.884]} scale={[0.561, 0.033, 0.561]} />
      <mesh geometry={nodes.Cube045.geometry} material={materials.Material} />
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.019']} position={[2.439, 27.291, 1.009]} />

      {buttonData.map((button, index) => (
        <Button
          key={index}
          fontWeight={button.fontWeight}
          fontSize={button.fontSize}
          position={button.position}
          name={button.number}
        >
          {button.number}
        </Button>
      ))}
    </group>
  )
}

useGLTF.preload('/hacking-device.glb')
