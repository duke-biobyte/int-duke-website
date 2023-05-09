// This is a page for playing around with the persistent homology animation

import React, { useRef, useState } from 'react';
// import sections
import { PDBLoader } from 'three-stdlib';
import { OrbitControls } from '@react-three/drei';
import { Canvas, useLoader, useFrame, extend } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { useControls } from 'leva';
import { LayerMaterial, Depth, Fresnel } from 'lamina'
import SEO from 'react-seo-component';


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


const BallMesh = ({position, scale, color}) => {
  const color_to_string = (color) => {
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`
  }

  return (
        <mesh castShadow position={position} scale={scale}>
          <sphereGeometry />
          {/* <meshStandardMaterial metalness={1} color={'rgb(255, 0, 0)'}/> */}
          <meshPhysicalMaterial roughness={0.2} transmission={1} color={color_to_string(color)} ior={1.5} reflectivity={0.5} thickness={2.5}/>
          {/* <ambientLight intensity={0.5} /> */}
        </mesh>
  )
}

// The actual component. This component takes up the entire page (see the style field in <div>)
const PHCanvas = () => {

  const pdb = useLoader(PDBLoader, '/caffeine.pdb')
  const [atoms] = useState(() => pdb.json.atoms)
  const { scale } = useControls({ scale: { value: 0.1, min: 0, max: 5 } })

  return (
    <>
      <SEO
        title="Persistent Homology"
        titleTemplate="InT@Duke"
        titleSeparator=' - '
        description=''
        image='../assets/images/splash-image.png'
        siteLanguage='en'
        siteLocale='en_US'
      />

      <div style={{width:"100%", height: "100%", position: "fixed", top: "0", left: "0", zIndex: "0", overflow: "hidden"}}>

        <Canvas>
          {
            atoms.map((atom, idx) => (
              <BallMesh position={[atom[0], atom[1], atom[2]]} scale={scale} color={atom[3]} />
            ))
          }
          <OrbitControls />

          {/* The lights aren't even necessary if we use MeshMatcapMaterial */}
          <Environment preset="lobby" background />
        </Canvas>

      </div>
    </>
  );
}

export default PHCanvas;