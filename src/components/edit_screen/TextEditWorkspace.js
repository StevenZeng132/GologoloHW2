import React, { Component } from 'react'
import ChangeTextPopup from './ChangeTextPopup.js'

// THIS IS HOW WE DISPLAY THE LOGO, IN THIS COMPONENT
class TextEditWorkspace extends Component {
    render() {
        const styles = {
            container: {
                color: this.props.logo.textColor,
                fontSize: this.props.logo.fontSize + "pt",
                backgroundColor: this.props.logo.backgroundColor,
                borderStyle : "solid",
                borderColor: this.props.logo.borderColor,
                borderRadius : this.props.logo.borderRadius + "pt",
                borderWidth : this.props.logo.borderThickness + "pt",
                padding : this.props.logo.padding + "pt",
                margin : this.props.logo.margin + "pt"

            }
        }
        return (
            <div className="col s8" >
                <div style={ styles.container }>
                {this.props.logo.text}
                </div>
            </div>
            
        )
    }
}

export default TextEditWorkspace