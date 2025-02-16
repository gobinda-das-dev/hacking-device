import { Center, Environment, OrbitControls } from '@react-three/drei'
import React, { Suspense } from 'react'
import { HackingDevice } from './HackingDevice/HackingDevice'
import Events from './HackingDevice/elements/Events'

const Experience = () => {

  return (
    <>
      <Events>
        <group rotation={[0, 0, Math.PI * -0.1]}>
          <Center scale={0.3} position={[0, 2, 0]} rotation={[0, -Math.PI * 0.2, 0]}>
            <HackingDevice />
          </Center>
        </group>
      </Events>
      
      <Environment preset='warehouse' />

      <OrbitControls />
    </>
  )
}

export default Experience
