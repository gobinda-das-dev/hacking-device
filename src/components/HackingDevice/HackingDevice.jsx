import React from 'react';
import { useGLTF } from '@react-three/drei';
import Antenna from './elements/Antenna';
import PotentioMeter from './elements/PotentioMeter';
import { HackingDeviceContext } from './HackingDeviceContext';
import Others from './elements/Others';
import Screen from './elements/Screen';
import Buttons from './elements/Buttons';

export function HackingDevice(props) {
  const { nodes, materials } = useGLTF('/models/hacking-device.glb');

  return (
    <HackingDeviceContext.Provider value={{ nodes, materials }}>
      <group {...props} dispose={null}>
        <Screen />  
        <PotentioMeter />
        <Antenna />
        <Others />
        <Buttons />
      </group>
    </HackingDeviceContext.Provider>
  );
}

useGLTF.preload('/models/hacking-device.glb');