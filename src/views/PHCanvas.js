// This is a page for playing around with the persistent homology animation

import React, { useRef, useState } from 'react';
// import sections
import { MetaTags } from 'react-meta-tags';
import AltPage from '../components/sections/AltPage';
import ASCIITorusKnot from '../components/novelties/three/ASCIITorusKnot';
import { PDBLoader } from 'three-stdlib';
import { OrbitControls } from '@react-three/drei';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { Points, PointMaterial} from '@react-three/drei';
import { useControls } from 'leva';
import { LayerMaterial, Depth, Fresnel } from 'lamina'


// An interesting looking material from https://codesandbox.io/s/ledhe1
// Performs well with rotating the camera, but not from scaling the object
// Could be interesting someday
const GradientMaterial = () => {
  const { gradient } = useControls({ gradient: { value: 0.7, min: 0, max: 1 } })
  const ref = useRef()
  // Animate gradient
  useFrame((state) => {
    const sin = Math.sin(state.clock.elapsedTime / 2)
    const cos = Math.cos(state.clock.elapsedTime / 2)
    ref.current.layers[0].origin.set(cos / 2, 0, 0)
    ref.current.layers[1].origin.set(cos, sin, cos)
    ref.current.layers[2].origin.set(sin, cos, sin)
    ref.current.layers[3].origin.set(cos, sin, cos)
  })

  return (
    <>
      <LayerMaterial ref={ref} toneMapped={false}>
        <Depth colorA="#ff0080" colorB="black" alpha={1} mode="normal" near={0.5 * gradient} far={0.5} origin={[0, 0, 0]} />
        <Depth colorA="blue" colorB="#f7b955" alpha={1} mode="add" near={2 * gradient} far={2} origin={[0, 1, 1]} />
        <Depth colorA="green" colorB="#f7b955" alpha={1} mode="add" near={3 * gradient} far={3} origin={[0, 1, -1]} />
        <Depth colorA="white" colorB="red" alpha={1} mode="overlay" near={1.5 * gradient} far={1.5} origin={[1, -1, -1]} />
        <Fresnel mode="add" color="white" intensity={0.5} power={1.5} bias={0.05} />
      </LayerMaterial>
    </>
  )
}


// The actual component. This component takes up the entire page (see the style field in <div>)
const PHCanvas = () => {

  const pdb = useLoader(PDBLoader, '/caffeine.pdb')
  const [pdb_pos] = useState(() => pdb.geometryAtoms.getAttribute('position').array)

  const { x, y, z } = useControls({
    x: { value: 0, min: -10, max: 10},
    y: { value: 0, min: -10, max: 10},
    z: { value: 0, min: -10, max: 10}
  })


  const { scale } = useControls({ scale: { value: 1, min: 0, max: 10 } })

  return (
    <>
      <div style={{width:"100%", height: "100%", position: "fixed", top: "0", left: "0", zIndex: "0", overflow: "hidden"}}>
        <Canvas>
          <mesh castShadow position={[x, y, z]} scale={scale}>
            <sphereGeometry />
            <meshPhongMaterial metalness={1} color={'hotpink'}/>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
          </mesh>
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}

export default PHCanvas;