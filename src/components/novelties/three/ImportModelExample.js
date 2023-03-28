import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

import Logo3D from './Logo3D'

export default function ImportModelExample() {
  return (
      <Canvas>
        <Suspense fallback={null}>
          <Logo3D />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
  )
}