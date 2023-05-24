// From https://codesandbox.io/s/pj7zjq?file=/src/App.js:0-2157
import React, { useState, useTransition , useRef, useEffect} from 'react'
import { useControls } from 'leva'
import { Canvas , useFrame , useThree} from '@react-three/fiber'
import { AccumulativeShadows, RandomizedLight, Center, Environment, OrbitControls } from '@react-three/drei'
import Logo3D from './Logo3D'
import { ProteinModel } from './ProteinGeometry'
import { useSpring, animated } from '@react-spring/three'

const AnimatedLogo3D = animated(Logo3D)

const AmazingShadow = () => {
  const angle = Math.PI / 3.5

  const [springs, api] = useSpring (() => ({
      from: {scale: 0.8},
  }))

  const handlePointerOver = () => {
      api.start({
          from: {
              scale: springs.scale.get(),
          },
          to: {
              scale: 1.5
          }
      })
  }

  const handlePointerOut = () => {
      api.start({
          from: {
              scale: springs.scale.get(),
          },
          to: {
              scale: 0.8
          }
      })
  }

  return (
    <Canvas shadows camera={{ position: [0, 0, 4.5], fov: 50 }} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>
      <group position={[0, -0.65, 0]}>
        {/* <Sphere /> */}
        {/* <mesh
        geometry={<ProteinModel />}
        ></mesh> */}
        {/* <ProteinModel /> */}
        <AnimatedLogo3D scale={springs.scale}/>
        <AccumulativeShadows temporal frames={200} color="purple" colorBlend={0.5} opacity={1} scale={10} alphaTest={0.85}>
          <RandomizedLight amount={8} radius={5} ambient={0.5} position={[5, 3, 2]} bias={0.001} />
        </AccumulativeShadows>
      </group>
      <Env />
      <OrbitControls autoRotate autoRotateSpeed={4} enablePan={true} enableZoom={true} minPolarAngle={angle} maxPolarAngle={angle} />
    </Canvas>
  )
}

function Sphere() {
  const { roughness } = useControls({ roughness: { value: 1, min: 0, max: 1 } })
  return (
    <Center top>
      <mesh castShadow>
        <sphereGeometry args={[0.75, 64, 64]} />
        <meshStandardMaterial metalness={1} roughness={roughness} />
      </mesh>
    </Center>
  )
}

function Env() {
  const [preset, setPreset] = useState('sunset')
  // You can use the "inTransition" boolean to react to the loading in-between state,
  // For instance by showing a message
  const [inTransition, startTransition] = useTransition()

  // const { blur } = useControls({
  //   blur: { value: 0.65, min: 0, max: 1 },
  //   preset: {
  //     value: preset,
  //     options: ['sunset', 'dawn', 'night', 'warehouse', 'forest', 'apartment', 'studio', 'city', 'park', 'lobby'],
  //     // If onChange is present the value will not be reactive, see https://github.com/pmndrs/leva/blob/main/docs/advanced/controlled-inputs.md#onchange
  //     // Instead we transition the preset value, which will prevents the suspense bound from triggering its fallback
  //     // That way we can hang onto the current environment until the new one has finished loading ...
  //     onChange: (value) => startTransition(() => setPreset(value))
  //   }
  // })
  const blur = 0.65

  // const { blur } = {
  //   blur: { value: 0.65, min: 0, max: 1 },
  // }
  // useControls({
  //   blur: { value: 0.65, min: 0, max: 1 },
  //   preset: {
  //     value: preset,
  //     options: ['sunset', 'dawn', 'night', 'warehouse', 'forest', 'apartment', 'studio', 'city', 'park', 'lobby'],
  //     // If onChange is present the value will not be reactive, see https://github.com/pmndrs/leva/blob/main/docs/advanced/controlled-inputs.md#onchange
  //     // Instead we transition the preset value, which will prevents the suspense bound from triggering its fallback
  //     // That way we can hang onto the current environment until the new one has finished loading ...
  //     onChange: (value) => startTransition(() => setPreset(value))
  //   }
  // })
  return <Environment preset={preset} background blur={blur} />
}

export default AmazingShadow;