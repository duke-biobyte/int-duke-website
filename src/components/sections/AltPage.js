import React, { useEffect, useState } from 'react';
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

import { BallMesh, MoleculeMesh, FiltrationVisualization } from '../../views/PHCanvas';
import { useSpring, animated } from '@react-spring/three'


const AnimatedBallMesh = animated(BallMesh)
const AnimatedMoleculeMesh = animated(MoleculeMesh)
const AnimatedFiltrationVisualization = animated(FiltrationVisualization)

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

    // load pdb file

    const [atoms, setAtoms] = useState([])

    const { pdb_file } = useControls({
        pdb_file: {value: "/pdb/caffeine.pdb",
        options: {
        // "1fsd":  "/pdb/1fsd.pdb",
        "Caffeine":  "/pdb/caffeine.pdb",
        "Ethanol":  "/pdb/ethanol.pdb",
        "Glucose":  "/pdb/glucose.pdb",
        },
    }},
    {
        "order": 99,
        "collapsed": true
    })

    const loader = new PDBLoader()

    useEffect(() => {
        if (pdb_file) {
        loader.load(pdb_file, (pdb) => {
            const atoms = pdb.json.atoms
            setAtoms(atoms)
        })
        }
    }, [pdb_file])

    return (
        <>

            {/* <div style={{width:"100%", height: "100%", position: "fixed", top: "0", left: "0", zIndex: "0", overflow: "hidden"}}>
            <Canvas>
                <AnimatedMoleculeMesh atoms={atoms} scale={0.3} />

                <AnimatedFiltrationVisualization atoms={atoms} filtration_parameter={springs.scale} lineWidth={0.1} />

                <OrbitControls />

                <Environment preset={'city'} background blur={0.9}/>
            </Canvas>
            </div> */}

            <div style={{width:"100%", height: "100%", position: "absolute", top: "0", left: "0", overflow: "hidden"}}>

                <div style={{width:"33%", height: "33%", position: "absolute", bottom: "0", left: "0", overflow: "hidden"}}>
                    <Canvas>
                        <AnimatedMoleculeMesh atoms={atoms} scale={0.3} />

                        <AnimatedFiltrationVisualization atoms={atoms} filtration_parameter={springs.scale} lineWidth={0.1} />

                        <OrbitControls />

                        <Environment preset={'city'} background blur={0.9}/>
                    </Canvas>
                </div>



                <div style={{width:"33%", height: "33%", position: "absolute", bottom: "0", left: "33%", overflow: "hidden"}} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut}>
                    <Canvas>
                        <AnimatedMoleculeMesh atoms={atoms} scale={0.3} backgroundless={true} />

                        <AnimatedFiltrationVisualization atoms={atoms} filtration_parameter={springs.scale} lineWidth={0.1} />

                        <OrbitControls />

                        <Environment preset={'city'} blur={0.9}/>
                    </Canvas>
                </div>

                <div style={{width:"33%", height: "33%", position: "absolute", bottom: "0", left: "66%", overflow: "hidden"}}>
                    <Canvas>
                        <AnimatedMoleculeMesh atoms={atoms} scale={0.3} />

                        <AnimatedFiltrationVisualization atoms={atoms} filtration_parameter={springs.scale} lineWidth={0.1} />

                        <OrbitControls />

                        <Environment preset={'city'} background blur={0.9}/>
                    </Canvas>
                </div>

            </div>

        </>
    )

}


export default AltPage