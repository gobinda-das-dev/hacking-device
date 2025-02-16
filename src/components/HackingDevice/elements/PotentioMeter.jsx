import React, { useContext } from 'react';
import { HackingDeviceContext } from '../HackingDeviceContext';

const PotentioMeter = () => {
  const { nodes, materials } = useContext(HackingDeviceContext);

  return (
    <group position={[2.709, 12.971, 2.875]} rotation={[Math.PI / 2, 0, 0]} scale={0.365}>
      <mesh geometry={nodes.Cylinder003.geometry} material={materials['Potentiometer B']} />
      <mesh geometry={nodes.Cylinder003_1.geometry} material={materials['Potentionmeter stripes']} />
    </group>
  );
};

export default PotentioMeter;