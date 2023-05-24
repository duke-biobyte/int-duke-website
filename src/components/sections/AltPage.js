import React from 'react';
import ButtonBanner from './ButtonBanner';
import Background from './Background';

// Three.js related imports
import * as THREE from 'three';
import { PDBLoader } from 'three-stdlib';
import { OrbitControls,  Environment, Line  } from '@react-three/drei';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { MeshLineGeometry, MeshLineMaterial, raycast } from 'meshline';
import { useControls, folder } from 'leva';
import { LayerMaterial, Depth, Fresnel } from 'lamina'

import { BallMesh } from '../../views/PHCanvas';
import { useSpring, animated } from '@react-spring/three'


const AnimatedBallMesh = animated(BallMesh)

const AltPage = () => {

    const [springs, api] = useSpring (() => ({
        from: {scale: 1},
    }))

    const handlePointerOver = () => {
        api.start({
            from: {
                scale: springs.scale.get(),
            },
            to: {
                scale: 2
            }
        })
    }

    const handlePointerOut = () => {
        api.start({
            from: {
                scale: springs.scale.get(),
            },
            to: {
                scale: 1
            }
        })
    }

    return (
        <>

            <div style={{width:"100%", height: "100%", position: "fixed", top: "0", left: "0", zIndex: "0", overflow: "hidden"}}>
            {/* <ButtonBanner /> */}
            <Canvas>
                <AnimatedBallMesh position={[0, 0, 0]} scale={springs.scale} color={'red'} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}/>
                <OrbitControls />

                {/* The lights aren't even necessary if we use MeshMatcapMaterial */}
                <Environment preset={'city'} background blur={0.9}/>
            </Canvas>
            </div>
        </>
    )

}


export default AltPage