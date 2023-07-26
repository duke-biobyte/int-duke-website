// This is a page for playing around with the persistent homology animation

import React, { useRef, useState, Fragment, useEffect } from 'react';

// Three.js related imports
import * as THREE from 'three';
import { PDBLoader } from 'three-stdlib';
import { OrbitControls,  Environment, Center  } from '@react-three/drei';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { MeshLineGeometry, MeshLineMaterial, raycast } from 'meshline';
import { Leva, useControls, folder } from 'leva';
import { LayerMaterial, Depth, Fresnel } from 'lamina'

// React related imports
import SEO from 'react-seo-component';
import { Perf } from 'r3f-perf'
import Draggable from 'react-draggable';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import scrollUpIcon from '../assets/images/icons/noun-scroll-up-607573-optimized.svg'
import { useInView } from '@react-spring/three';

// visx
import { AnimatedAxis, AnimatedGrid, AnimatedLineSeries, LineSeries, XYChart, Tooltip, AnnotationLineSubject, Annotation} from '@visx/xychart';

extend({ MeshLineGeometry, MeshLineMaterial })

const BallMesh = ({position, scale, color, backgroundless, ...props}) => {
  const { x_segments, y_segments } = useControls("Debug Controls",{
    'Sphere Parameters': folder({
      x_segments: { value: 24, min: 1, max: 64, step: 1 },
      y_segments: { value: 24, min: 1, max: 64, step: 1 },
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
        <meshBasicMaterial color={color}/>
        <directionalLight position={[0, 0, 10]} intensity={0.5} />
      </mesh>
    )}
    else {
      return (
        <mesh castShadow position={position} {...props}>
          <sphereGeometry args={[scale, x_segments, y_segments]} />
          <meshPhysicalMaterial roughness={0.2} transmission={0.75} color={color} ior={1.5} reflectivity={0.5} thickness={2.5} transparent={1}/>
        </mesh>
      )
    }
}

function PHPlot(props) {
  var y = 0
  const data = props.data.filter((d) => d[0] !== d[1])
  const scale = props.scale

  const betti_0 = data.filter((d) => d[2] === 0).map((d) => {y += 1; return [{x: d[0], y: y}, {x: d[1], y: y}]})
  const betti_1 = data.filter((d) => d[2] === 1).map((d) => {y += 1; return [{x: d[0], y: y}, {x: d[1], y: y}]})
  const betti_2 = data.filter((d) => d[2] === 2).map((d) => {y += 1; return [{x: d[0], y: y}, {x: d[1], y: y}]})


  const accessors = {
    xAccessor: (d) => d && d.x,
    yAccessor: (d) => d && d.y,
    colorAccessor: (d) => d && d.color,
  }

  const chartRef = useRef(null)

  return (
    <>
      <div style={{height: "75%"}}>

        <XYChart xScale={{ type: 'linear', domain: [0, 5] }} yScale={{ type: 'linear' }} ref={chartRef}>
          <AnimatedAxis orientation="bottom" label="Filtration Radius (Å)" />

          {
            betti_0.map((d, i) => {
              return (
                <LineSeries
                  key={i} dataKey={`Line ${i}`} data={d} stroke="red" {...accessors} />
              )
            })
          }

          {
            betti_1.map((d, i) => {
              return (
                <LineSeries
                  key={i} dataKey={`Line ${i}`} data={d} stroke="yellow" {...accessors} />
              )
            })
          }

          {
            betti_2.map((d, i) => {
              return (
                <LineSeries
                  key={i} dataKey={`Line ${i}`} data={d} stroke="blue" {...accessors} />
              )
            })
          }

        <Annotation datum={{
          x: scale,
          y: 0,
        }} {...accessors}>
          <AnnotationLineSubject />
        </Annotation>


        </XYChart>
      </div>
      <Legend />
    </>

  )
}

function Legend() {
  const legendData = [
    { color: 'red', label: 'Betti 0' },
    { color: 'yellow', label: 'Betti 1' },
    { color: 'blue', label: 'Betti 2' },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }} className='pt-16'>
      {legendData.map((item, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
          <div style={{ width: '20px', height: '2px', backgroundColor: item.color }} />
          <div style={{ marginLeft: '5px' }} className='text-xs'>{item.label}</div>
        </div>
      ))}
    </div>
  );
}

const FiltrationVisualization = (props) => {
  const atoms = props.atoms
  const coordinates = atoms.map((a) => [a[0], a[1], a[2], a[a.length - 1]])
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

  const pairwiseOppositionDistance = (a, b) => {
    if (a[a.length-1] != b[b.length-1]) {
      return euclideanDistance(a.slice(0, -1), b.slice(0, -1))
    } else {
      return Infinity
    }
  }

  const edges = combinations(coordinates).map((c) =>  (
    {
      "line": [c[0].slice(0, -1), c[1].slice(0, -1)].flat(),
      "distance": pairwiseOppositionDistance(c[0], c[1])
    }
  ))

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


const MoleculeMesh = ({atoms, scale, color, ...props}) => {
  // const { fix_ball_scale } = useControls({
  //   fix_ball_scale: {
  //     value: false
  //   }
  // })

  const fix_ball_scale = true

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
            <BallMesh position={[atom[0], atom[1], atom[2]]} scale={ball_scale} color={color} {...props}/>
          ))
        }
      </group>
    </>

  )
}

const OppositionPHCanvas = () => {
  // Only show leva when canvas is in view
  const [canvasRef, canvasInView] = useInView()

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
  const [molecule1Atoms, setMolecule1Atoms] = useState([])
  const [molecule2Atoms, setMolecule2Atoms] = useState([])
  const [allAtoms, setAllAtoms] = useState([])

  const molecules = ["caffeine", "ethanol",  "fructose", "glucose", "adenine", "cytosine", "thymine", "guanine", "cholesterol","rapamycin", "1fsv", "1aa5", "1b9p"]

  const choices = {}
  molecules.map((m) => choices[m] = m)

  const { molecule1 } = useControls({
    molecule1: {value: "caffeine",
    options: choices,
  }},
  {
    "order": 99,
    "collapsed": true
  })

  const { molecule2 } = useControls({
    molecule2: {value: "ethanol",
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

  // load homology data
  const [PHData, setPHData] = useState([]);

  useEffect(() => {
    if (molecule1) {
      loader.load(pdb_file_map[molecule1], (pdb) => {
        const atoms = pdb.json.atoms
        setMolecule1Atoms(atoms.map(a => a.concat(['m1'])))
      })

    fetch(homology_file_map[molecule1])
      .then(response => response.json())
      .then(jsonData => {
        setPHData(jsonData);
      })
    }
  }, [molecule1])

  useEffect(() => {
    if (molecule2) {
      loader.load(pdb_file_map[molecule2], (pdb) => {
        const atoms = pdb.json.atoms
        setMolecule2Atoms(atoms.map(a => a.concat(['m2'])))
      })

    fetch(homology_file_map[molecule2])
      .then(response => response.json())
      .then(jsonData => {
        setPHData(jsonData);
      })
    }
  }, [molecule2])

  useEffect(() => {
    if (molecule1Atoms && molecule2Atoms) {
      setAllAtoms(molecule1Atoms.concat(molecule2Atoms))
    }
  }, [molecule1Atoms, molecule2Atoms])

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
        title="Opposition Persistent Homology Page"
        titleTemplate=""
        titleSeparator=""
        description=''
        image='../assets/images/splash-image.png'
        siteLanguage='en'
        siteLocale='en_US'
      />

      <div style={{ position: 'relative', width: '100%', height: '100vh', top: '0', left: '0', zIndex: '0', overflow: 'hidden' }}>
        <Leva hidden={!canvasInView} />

        <Canvas ref={canvasRef}>
            {
                show_performance && <Perf position="bottom-left" />
            }
            <MoleculeMesh atoms={molecule1Atoms} scale={scale / 2} backgroundless={low_quality_materials} color={'red'} />
            <MoleculeMesh atoms={molecule2Atoms} scale={scale / 2} backgroundless={low_quality_materials} color={'green'} />
            <OrbitControls />
            <Environment files="/venice_sunset_1k.hdr" background blur={blur}/>
            <FiltrationVisualization atoms={allAtoms} filtration_parameter={scale}/>
        </Canvas>

        <Draggable>
            <div style={{ position: 'absolute', width: decimal_to_percentage(barcode_width), aspectRatio: '3/4', top: '0', left: '0', zIndex: '1', overflow: 'hidden', borderRadius: '10px' }}>
                <center><b>Persistence Barcode</b></center>
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

export default OppositionPHCanvas;
export { MoleculeMesh, BallMesh, FiltrationVisualization };