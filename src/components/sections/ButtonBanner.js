import React from 'react'
import AltButtonGroup from "../elements/AltButtonGroup"
import Button from "../elements/Button"
import Background from './Background'


class ButtonBanner extends React.Component {
    constructor(props) {
      super(props)
      this.state = {backgroundIndex: 0}
    }

    handleHover(box_index) {
      this.setState({
        backgroundIndex: box_index
      })
      console.log("Updated background index to " + this.state.backgroundIndex)
    }

    handleFinishHover() {
      this.setState({
        backgroundIndex: 0
      })
    }

    render() {
      return (
        <>
          <Background backgroundIndex={this.state.backgroundIndex}/>

          <div style={{width:"100%", height: "100%", position: "fixed", top: "0", left: "0", zIndex: "0", overflow: "hidden"}}>
            <AltButtonGroup className={"stick-to-bottom"}>
              <Button tag="a" color="primary" wideMobile href="https://forms.gle/DqpPWCMc7t8Dbm7V6"
                onMouseEnter={() => {this.handleHover(1)}}
                onMouseLeave={() => {this.handleFinishHover()}}
              >
                Apply Here
                </Button>
              <Button tag="a" color="primary" wideMobile href="https://forms.gle/DqpPWCMc7t8Dbm7V6">
                Apply Here
                </Button>
              <Button tag="a" color="primary" wideMobile href="https://forms.gle/DqpPWCMc7t8Dbm7V6">
                Apply Here
                </Button>
              <Button tag="a" color="primary" wideMobile href="https://forms.gle/DqpPWCMc7t8Dbm7V6">
                Apply Here
                </Button>
            </AltButtonGroup>
          </div>
        </>
      )


    }


}



export default ButtonBanner