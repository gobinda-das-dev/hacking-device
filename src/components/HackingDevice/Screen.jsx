import React, { useContext } from 'react'
import { HackingDeviceContext } from './HackingDeviceContext'

const Screen = () => {
   const { nodes, materials } = useContext(HackingDeviceContext)

   return (
      <mesh geometry={nodes.screen.geometry} material={materials.Screen} position={[-1.244, 13.249, 2.225]} scale={[1.003, 1.011, 1.003]} />
   )
}

export default Screen
