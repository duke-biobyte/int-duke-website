// This is a page for playing around with the persistent homology animation

import React, { useRef, useState, Fragment, useEffect } from 'react';

// Three.js related imports
import * as THREE from 'three';
import { PDBLoader } from 'three-stdlib';
import { OrbitControls,  Environment, Line, Center  } from '@react-three/drei';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { MeshLineGeometry, MeshLineMaterial, raycast } from 'meshline';
import { Leva, useControls, folder } from 'leva';
import { LayerMaterial, Depth, Fresnel } from 'lamina'

// React related imports
import SEO from 'react-seo-component';
import { Perf } from 'r3f-perf'
import Draggable from 'react-draggable';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import scrollUpIcon from '../assets/images/icons/noun-scroll-up-607573-optimized.svg'

// react-vis related imports
import { FlexibleXYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, Crosshair, DiscreteColorLegend } from 'react-vis';
import RVStyles from 'react-vis-styles';
import '../components/novelties/react-vis/HideTooltip.css';

// keep explanation page in a separate file
import PHExplanation from '../components/PHsections/PHExplanation';

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

const BallMesh = ({position, scale, color, backgroundless, ...props}) => {
  const color_to_string = (color) => {
    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`
  }

  const { x_segments, y_segments } = useControls("Debug Controls",{
    'Sphere Parameters': folder({
      x_segments: { value: 16, min: 1, max: 64, step: 1 },
      y_segments: { value: 8, min: 1, max: 64, step: 1 },
    })

  },
  {
    "order": 98,
    "collapsed": true
  }
  )

  if (backgroundless === true) {
    return (
      <mesh castShadow position={position} {...props}>
        <sphereGeometry args={[scale, x_segments, y_segments]} />
        <meshBasicMaterial color={color_to_string(color)}/>
        <directionalLight position={[0, 0, 10]} intensity={0.5} />
      </mesh>
    )}
    else {
      return (
        <mesh castShadow position={position} {...props}>
          <sphereGeometry args={[scale, x_segments, y_segments]} />
          <meshPhysicalMaterial roughness={0.2} transmission={0.75} color={color_to_string(color)} ior={1.5} reflectivity={0.5} thickness={2.5} transparent={1}/>
        </mesh>
      )
    }
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
      <FlexibleXYPlot xDomain={[0, 5]}>
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
          style={{line: {backgroundColor: 'azure'}}}
        />
        <XAxis />
      </FlexibleXYPlot>
      <DiscreteColorLegend items={
        [
          {title: 'Betti 0 (connected components)', color: 'red'},
          {title: 'Betti 1 (holes)', color: 'blue'},
          {title: 'Betti 2 (voids)', color: 'yellow'}
        ]
      }/>
    </Fragment>

  )
}

const FiltrationVisualization = (props) => {
  const atoms = props.atoms
  const coordinates = atoms.map((a) => [a[0], a[1], a[2]])
  const filtration_parameter = props.filtration_parameter
  FiltrationVisualization.defaultProps = {
    lineWidth: 0.03
  }

  const combinations = (arr) => {
    var result = []
    for (var i = 0; i < arr.length-1; i++) {
      for (var j = i+1; j < arr.length; j++) {
        result.push([arr[i], arr[j]])
      }
    }
    return result
  }

  const euclideanDistance = (a, b) => Math.hypot(...Object.keys(a).map(k => b[k] - a[k]));

  const edges = combinations(coordinates).map((c) =>  (
    {
      "line": [c[0], c[1]].flat(),
      "distance": euclideanDistance(c[0], c[1])
    }
  )
  )
  const center = getCenter(atoms)

  return (
    <group position={center}>
      {
        edges.map((e, idx) =>
        {
          if (e.distance < filtration_parameter) {
            return (
              <mesh>
                  <meshLineGeometry points={e.line} />
                  <meshLineMaterial lineWidth={props.lineWidth} color="hotpink" />
              </mesh>
            )
          } else { return null }
        })
      }
    </group>
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


const MoleculeMesh = ({atoms, scale, ...props}) => {
  const { fix_ball_scale } = useControls({
    fix_ball_scale: {
      value: false
    }
  })

  var ball_scale

  if (!fix_ball_scale) {
    ball_scale = scale
  } else {
    ball_scale = 0.1
  }

  const center = getCenter(atoms)

  return (
    <>
      <group position={center}>
        {
          atoms.map((atom, idx) => (
            <BallMesh position={[atom[0], atom[1], atom[2]]} scale={ball_scale} color={atom[3]} {...props}/>
          ))
        }
      </group>
    </>

  )
}

const PHCanvas = () => {
  // Leva controls
  const { scale } = useControls({ scale: { value: 0.1, min: 0, max: 5 } })

  const { show_performance } = useControls("Debug Controls", {
    show_performance: {value: false}
  },
  {
    "order": 98,
    "collapsed": true
  })

  // load pdb file
  const [atoms, setAtoms] = useState([])
  const molecules = ["caffeine", "ethanol", "cholesterol", "fructose", "glucose", "adenine", "cytosine", "thymine", "guanine", "rapamycin", "1fsv", "1aa5", "1b9p"]

  const choices = {}
  molecules.map((m) => choices[m] = m)

  const { molecule } = useControls({
    molecule: {value: "caffeine",
    options: choices,
  }},
  {
    "order": 99,
    "collapsed": true
  })

  const loader = new PDBLoader()

  const pdb_file_map = {}
  molecules.map((m) => pdb_file_map[m] = "/pdb/" + m + ".pdb")

  const homology_file_map = {}
  molecules.map((m) => homology_file_map[m] = "/homologies/" + m + ".json")

  useEffect(() => {
    if (molecule) {
      loader.load(pdb_file_map[molecule], (pdb) => {
        const atoms = pdb.json.atoms
        setAtoms(atoms)
      })

    fetch(homology_file_map[molecule])
      .then(response => response.json())
      .then(jsonData => {
        setPHData(jsonData);
      });
    }
  }, [molecule])

  // load homology data
  const [PHData, setPHData] = useState([]);

  const { preset, blur } = useControls("Debug Controls", {
    preset: {
      value: "sunset",
      options: ["sunset", "dawn", "night", "warehouse", "forest", "apartment", "studio", "sunny", "city", "park", "lobby", "empty"]
    },
    blur: {
      value: 0.9, min: 0, max: 1, step: 0.01
    }
  })

  const { barcode_width } = useControls("Debug Controls", {
    barcode_width: {
      value: 0.25, min: 0, max: 1, step: 0.01
    }
  })

  const { low_quality_materials } = useControls({
    low_quality_materials: {
      value: false
    }
  })

  const decimal_to_percentage = (decimal) => ((decimal * 100).toString() + "%")

  return (
    <>
      <SEO
        title="Interactive Persistent Homology on Molecules"
        titleTemplate=""
        titleSeparator=""
        description=''
        image='../assets/images/splash-image.png'
        siteLanguage='en'
        siteLocale='en_US'
      />


      <div style={{width:"100%", top: "0", left: "0", zIndex: "0", overflow: "hidden"}}>
        <Element name='introductionPage'>
          <PHExplanation />

          <center>TODO: Finish the explanation on persistent homology</center>
          <center>Want to talk about:
            <ol>
              <li>What is a simplex?</li>
              <li>What is simplicial complex and simplicial homology?</li>
              <li>What is a filtration?</li>
              <li>What is a barcode?</li>
              <li>What is a persistence diagram?</li>
            </ol>
          </center>

        </Element>
      </div>

      <div style={{ position: 'relative', width: '100%', height: '100vh', top: '0', left: '0', zIndex: '0', overflow: 'hidden' }}>

        <Canvas>
            {
                show_performance && <Perf position="bottom-left" />
            }
            <MoleculeMesh atoms={atoms} scale={scale} backgroundless={low_quality_materials} />
            <OrbitControls />
            <Environment preset={preset} background blur={blur}/>
            <FiltrationVisualization atoms={atoms} filtration_parameter={scale}/>
        </Canvas>
        <Draggable>
            <div style={{ position: 'absolute', width: decimal_to_percentage(barcode_width), aspectRatio: '16/9', top: '0', left: '0', zIndex: '1', overflow: 'hidden', borderRadius: '10px' }}>
                <center>Persistence Barcode</center>
                <PHPlot data={PHData} scale={scale} />
            </div>
        </Draggable>

        {/* A button on the bottom right that scrolls to introductionPage */}
        {/* Using the scroll icon src/assets/images/icons/noun-scroll-up-607573-optimized.svg */}
        <div style={{ position: 'absolute', width: '10%', aspectRatio: '1/1', bottom: '0', right: '0', zIndex: '1', overflow: 'hidden', borderRadius: '10px' }}>
          <center>Return to the Explanation</center>
          <img src={scrollUpIcon} style={{cursor: 'pointer'}} onClick={() => scroller.scrollTo('introductionPage', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
          })} />
        </div>

      </div>

    </>
  );
}

export default PHCanvas;
export { MoleculeMesh, BallMesh, FiltrationVisualization };