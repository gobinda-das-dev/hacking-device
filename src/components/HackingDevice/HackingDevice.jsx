import React from 'react';
import { useGLTF } from '@react-three/drei';
import Antenna from './Antenna';
import PotentioMeter from './PotentioMeter';
import { HackingDeviceContext } from './HackingDeviceContext';
import Others from './Others';
import Screen from './Screen';
import Buttons from './Buttons';

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