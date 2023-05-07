import React from 'react';
import SpinningProteinBackground from "../novelties/three/SpinningProteinBackground"
import ASCIITorusKnot from '../novelties/three/ASCIITorusKnot';

const Background = (props) => {

    var background
    var i = props.backgroundIndex

    if (i == 1) {
      background = <SpinningProteinBackground />
    } else {
      background = <ASCIITorusKnot />
    }

    return (
      <div style={{width:"100%", height: "100%", position: "fixed", top: "0", left: "0", zIndex: "-9999"}}>
        {background}
      </div>
    )
}

export default Background