import React, { useContext } from 'react'
import { HackingDeviceContext } from '../HackingDeviceContext'

const Others = () => {
   const {nodes, materials} = useContext(HackingDeviceContext)
   
   return (
      <>
         <group position={[0, 0, -0.276]}>
            <mesh geometry={nodes.Cube001.geometry} material={materials['BODY.001']} />
            <mesh geometry={nodes.Cube001_1.geometry} material={materials['USB AND CHARGIN']} />
            <mesh geometry={nodes.Cube001_2.geometry} material={materials.Screen} />
            <mesh geometry={nodes.Cube001_3.geometry} material={materials.Button} />
         </group>
         <mesh geometry={nodes.Cube006.geometry} material={materials['BODY.001']} position={[3.962, 10.492, 0.704]} scale={[1, 1, 0.771]} />
         <mesh geometry={nodes.Cube007.geometry} material={materials['BODY.001']} position={[3.962, 8.507, 0.704]} scale={[1, 1, 0.771]} />
      </>
   )
}

export default Others
