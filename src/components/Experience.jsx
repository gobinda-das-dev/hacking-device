import { Center, Environment, OrbitControls } from '@react-three/drei'
import React, { Suspense } from 'react'
import { HackingDevice } from './HackingDevice/HackingDevice'

const Experience = () => {
  return (
    <>
      <group rotation={[0, 0, Math.PI * -0.1]}>
        <Center scale={0.3} position={[0, 2, 0]} rotation={[0, -Math.PI * 0.2, 0]}>
          <HackingDevice />
        </Center>
      </group>
      <Environment preset='warehouse' />

      <OrbitControls />
    </>
  )
}

export default Experience
