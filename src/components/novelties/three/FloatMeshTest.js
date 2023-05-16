import React from 'react';
import { Canvas } from '@react-three/fiber';
import { BoxGeometry, MeshStandardMaterial } from 'three';

const BoxMesh = ({ size, position }) => {
    const meshRef = React.useRef();

    return (
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    );
};

const FloatArrayToMeshes = ({ dataArray }) => {
    const boxPositions = dataArray.map((_, idx) => [idx * 2, 0, 0]);

    return (
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        {dataArray.map((size, idx) => (
          <BoxMesh key={idx} size={size} position={boxPositions[idx]} />
        ))}
      </Canvas>
    );
};

export default FloatArrayToMeshes