import { Text } from '@react-three/drei'
import React, { forwardRef, useContext, useRef } from 'react'
import { downAudio, upAudio } from './Audio';
import { HackingDeviceContext } from './HackingDeviceContext';

const Button = ({ children, fontWeight = 600, fontSize = 1, ...props }, ref) => {
  const { nodes, materials } = useContext(HackingDeviceContext);
   const bodyMaterial = materials['BODY.001'];
   const button = ref || useRef();

   const down = (event) => {
      downAudio.play();
      button.current.position.z = 2;
   };

   const up = (event) => {
      upAudio.play();
      button.current.position.z = 2.459;
   };

   return (
      <group
         ref={button}
         {...props}
         rotation={[Math.PI / 2, 0, 0]}
         scale={[0.139, 0.323, 0.131]}
         onPointerDown={down}
         onPointerUp={up}
      >
         <mesh geometry={nodes.Cube022.geometry} material={bodyMaterial} />
         <Text color='black' fontSize={4} scale={fontSize} fontWeight={fontWeight} position={[0, 0, 0]} rotation={[-Math.PI * 0.5, 0, 0]} position={[0, 1.3, 0]}>{children}</Text>
      </group>
   )
}

export default forwardRef(Button)
