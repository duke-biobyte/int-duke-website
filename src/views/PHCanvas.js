// This is a page for playing around with the persistent homology animation

import React, { useRef, useState, Fragment, useEffect } from 'react';
import * as THREE from 'three';
// import sections
import { PDBLoader } from 'three-stdlib';
import { OrbitControls,  Environment, Line  } from '@react-three/drei';
import { Canvas, useLoader, useFrame, extend } from '@react-three/fiber';
import { useControls } from 'leva';
import { LayerMaterial, Depth, Fresnel } from 'lamina'
import SEO from 'react-seo-component';
import { Perf } from 'r3f-perf'
import { FlexibleXYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, Crosshair } from 'react-vis';
import RVStyles from 'react-vis-styles';
import '../components/novelties/react-vis/HideTooltip.css';
import { MeshLineGeometry, MeshLineMaterial, raycast } from 'meshline';


extend({ MeshLineGeometry, MeshLineMaterial })

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
    <mesh castShadow position={position} >
      <sphereGeometry args={[scale, 16, 8]}/>
      {/* <meshStandardMaterial metalness={1} color={'rgb(255, 0, 0)'}/> */}
      <meshPhysicalMaterial roughness={0.2} transmission={1} color={color_to_string(color)} ior={1.5} reflectivity={0.5} thickness={2.5}/>
      {/* <ambientLight intensity={0.5} /> */}
    </mesh>
  )
}

function PHPlot(props) {
  var y = 0
  const data = props.data

  const betti_0 = data.filter((d) => d[2] === 0).map((d) => {y += 1; return [{x: d[0], y: y}, {x: d[1], y: y}]})
  const betti_1 = data.filter((d) => d[2] === 1).map((d) => {y += 1; return [{x: d[0], y: y}, {x: d[1], y: y}]})
  const betti_2 = data.filter((d) => d[2] === 2).map((d) => {y += 1; return [{x: d[0], y: y}, {x: d[1], y: y}]})

  return (
    <Fragment>
      <RVStyles />
      <FlexibleXYPlot>
        <LineSeries data={data} />
        {
          betti_0.map((d) => {
            return <LineSeries data={d} color={'red'} />
          })
        }
        {
          betti_1.map((d) => {
            return <LineSeries data={d} color={'blue'} />
          })
        }
        {
          betti_2.map((d) => {
            return <LineSeries data={d} color={'yellow'} />
          })
        }
        <Crosshair
          values={[{x: props.scale, y: 0}]}
          style={{line: {backgroundColor: 'blue'}}}
        />
        <XAxis />
      </FlexibleXYPlot>
    </Fragment>

  )
}

const FiltrationVisualization = (props) => {
  const atoms = props.atoms
  const coordinates = atoms.map((a) => [a[0], a[1], a[2]])

  const combinations = (arr) => {
    var result = []
    for (var i = 0; i < arr.length-1; i++) {
      for (var j = i+1; j < arr.length; j++) {
        result.push([arr[i], arr[j]])
      }
    }
    return result
  }

  const edges = combinations(coordinates).map((c) => c.flat())

  return (
    <>
    {
      edges.slice(0, 5).map((e, idx) => {
        <mesh>
            <meshLineGeometry points={e} />
            <meshLineMaterial lineWidth={0.03} color="hotpink" />
        </mesh>
      })

        // <mesh>
        //     <meshLineGeometry points={[1, 2, 3, 4, 5, 6]} />
        //     <meshLineMaterial lineWidth={0.03} color="hotpink" />
        // </mesh>

    }
    </>
  )
}

// Returns the center given a list of atoms
const getCenter = (atoms) => {
  var v = [0, 0, 0]
  atoms.map((a) => {
    v[0] += a[0]
    v[1] += a[1]
    v[2] += a[2]
  })

  const center = v.map((c) => - c / atoms.length)
  return center
}


const MoleculeMesh = (props) => {
  const atoms = props.atoms
  const scale = props.scale
  const center = getCenter(atoms)

  return (
    <>
      <group position={center}>
        {
          atoms.map((atom, idx) => (
            <BallMesh position={[atom[0], atom[1], atom[2]]} scale={scale} color={atom[3]} />
          ))
        }
      </group>
    </>

  )
}

const PHCanvas = () => {
  const [atoms, setAtoms] = useState([])

  // Leva controls
  const { scale } = useControls({ scale: { value: 0.1, min: 0, max: 5 } })

  const { show_performance } = useControls('Debug controls', {
    show_performance: {value: true}
  },
  {
    "order": 98,
    "collapsed": true
  })

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

  const [PHData, setPHData] = useState([]);

  useEffect(() => {
    fetch('/homologies/caffeine.json')
      .then(response => response.json())
      .then(jsonData => {
        setPHData(jsonData);
      });
  }, []); // Empty array as dependency means this effect will only run once, similar to componentDidMount

  const vertices = new Float32Array([
    0.0, 0.0, 0.0,
    1.0, 0.0, 0.0,
    0.0, 1.0, 0.0,
    1.0, 0.0, 0.0,
    1.0, 1.0, 0.0,
    0.0, 1.0, 0.0
  ]);

  const lineRef = useRef(null)
  useEffect(() => {
    if(lineRef.current) {
      lineRef.current.setAttribute( 'position', new THREE.BufferAttribute(new Float32Array(vertices), 3));
    }
  })

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
            show_performance && <Perf position="bottom-left" />
          }

          <MoleculeMesh atoms={atoms} scale={scale} />
          <OrbitControls />

          {/* The lights aren't even necessary if we use MeshMatcapMaterial */}
          <Environment preset="lobby" background />

          <FiltrationVisualization atoms={atoms}/>

        </Canvas>

        {/* The persistence plot */}
        <div style={{width:"20%", height: "20%", position: "fixed", top: "0", left: "0", zIndex: "1", overflow: "hidden"}}>
          <PHPlot data={PHData} scale={scale} />
        </div>

      </div>
    </>
  );
}

export default PHCanvas;