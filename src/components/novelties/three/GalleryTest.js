import { createRoot } from 'react-dom/client'
import React from 'react'
import Gallery from './Gallery'

const images = [
  // Front
//   { position: [0, 0, 1.5], rotation: [0, 0, 0], url: pexel(1103970) },
//   { position: [0, 0, 1.5], rotation: [0, 0, 0], src: require('../../../assets/images/events/ben.png')},
  { position: [0, 0, 1.5], rotation: [0, 0, 0], src: require('../../../assets/images/events/headshots/ben.jpg'), caption: 'Ben Logsdon\nVP of Computational Biology at Cajal Neuroscience'},
  { position: [2, 0, 1.5], rotation: [0, 0, 0], src: require('../../../assets/images/events/headshots/emmanuel.jpg'), caption: '(Planned) Emmanuel Noutahi\nHead of Platform at Valence Discovery'},
  // Back
//   { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(416430) },
//   { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: pexel(310452) },
  // Left
//   { position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: pexel(327482) },
//   { position: [-1.75, 0, 1.25], rotation: [0, Math.PI / 2.5, 0], src: require('../../../assets/images/events/headshots/emmanuel.jpg'), caption: '(Planned) Emmanuel Noutahi\nHead of Platform at Valence Discovery'},
//   { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: pexel(325185) },
//   { position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: pexel(358574) },
  // Right
//   { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: pexel(227675) },
//   { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: pexel(911738) },
//   { position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: pexel(1738986) }
]

export default () => {
    return (
        <Gallery images={images} />
    )
}
