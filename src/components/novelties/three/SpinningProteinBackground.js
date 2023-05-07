// From https://codesandbox.io/s/rrppl0y8l4?file=/src/App.js
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Logo3DGeometry from './Logo3DGeometry'
import Logo3D from './Logo3D'
import { ProteinModel } from './ProteinGeometry'
import CameraController from './CameraController'
import { useControls } from 'leva'

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // const { scale } = useControls({ scale: { value: 10, min: 0, max: 20 } })

  // Subscribe this component to the render-loop, rotate the mesh every frame
  // Return the view, these are regular Threejs elements expressed in JSX
  // Logo3DGeometry()
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.05 * delta
  })
  const geometry = Logo3DGeometry()
  geometry.computeBoundingBox()
  geometry.center()
  return (
    <mesh
      {...props}
      ref={ref}
      scale={10}
      position={[0, 0, 0]}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      // geometry={geometry}
      >
      <ProteinModel />
    </mesh>

  )
}

const SpinningProteinBackground = () => {
  // function trackMouseLocation(event) {
  //   var x = event.clientX;
  //   var y = event.clientY;
  // }

  // window.onload() = function() {
  //   var screenX = window.innerWidth
  //   var screenY = window.innerHeight
  // }

  // window.onresize() = () => {
  //   var screenX = window.innerWidth
  //   var screenY = window.innerHeight
  // }

  // document.addEventListener('mousemove', trackMouseLocation);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Box position={[0, 0, 0]} />
      <CameraController a='sus'/>
    </Canvas>
  )
}

export default SpinningProteinBackground;