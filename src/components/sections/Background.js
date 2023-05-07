import React from 'react';
import SpinningProteinBackground from "../novelties/three/SpinningProteinBackground"
import ASCIITorusKnot from '../novelties/three/ASCIITorusKnot';

class Background extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const Background = (props) => {
        console.log("background rendered")

        // var background
        var i = props.backgroundIndex

        if (i == 1) {
          this.background = <ASCIITorusKnot />
        } else {
          this.background = <SpinningProteinBackground />
        }


        return (
          <div style={{width:"100%", height: "100%", position: "fixed", top: "0", left: "0", zIndex: "-9999"}}>
            {this.background}
          </div>
        )
    }

    return Background(this.props)
  }

}

export default Background