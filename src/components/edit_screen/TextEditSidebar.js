import React, { Component } from 'react';
import ReactDOM from "react-dom";
import ChangeTextPopup from './ChangeTextPopup.js';
import { Modal } from 'react-materialize';
import { Button } from 'react-materialize';
import { TextInput } from 'react-materialize';


class TextEditSidebar extends Component {
    constructor(props) {
        super(props);

        // WE'LL MANAGE THE UI CONTROL
        // VALUES HERE
        this.state = {
            textColor : "#FF0000",
            fontSize : 24,
            backgroundColor : '#FFF',
            borderColor : '#000033',
            borderRadius : 24,
            borderThickness: 24,
            padding : 24,
            margin : 24,
            changeText: this.props.logo.text
        }
    }

    handleUndo = () => {
        this.props.undoCallback();
    }

    handleRedo = () => {
        this.props.redoCallback();
    }

    changeText = () => {
        console.log("hi")
        this.setState({modalPopup : true})
    }

    handleTextColorChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.setState({ textColor: event.target.value }, this.completeUserEditing);
    }

    handleFontSizeChange = (event) => {
        console.log("handleTextColorChangeComplete to " + event.target.value);
        this.setState({ fontSize: event.target.value }, this.completeUserEditing);
    }

    handleBackgroundColorChange = (event) => {
        console.log("handleBackgroundColorChange to " + event.target.value);
        this.setState({ backgroundColor: event.target.value }, this.completeUserEditing);
    }

    handleBorderColorChange = (event) => {
        console.log("hi");
        console.log("handleBorderColorChange to " + event.target.value);
        this.setState({ borderColor: event.target.value }, this.completeUserEditing);
    }

    handleBorderRadiusChange = (event) => {
        console.log("handleBorderRadiusChangeComplete to " + event.target.value);
        this.setState({ borderRadius: event.target.value }, this.completeUserEditing);
    }

    handleBorderThicknessChange = (event) => {
        console.log("handleBorderThicknessChangeComplete to " + event.target.value);
        this.setState({ borderThickness: event.target.value }, this.completeUserEditing);
    }
    handlePaddingChange = (event) => {
        console.log("handlePaddingChangeComplete to " + event.target.value);
        this.setState({ padding: event.target.value }, this.completeUserEditing);
    }

    handleMarginChange = (event) => {
        console.log("handleMarginChangeComplete to " + event.target.value);
        this.setState({ margin: event.target.value }, this.completeUserEditing);
    }

    completeUserEditing = () => {
        console.log("completeUserEditing");
        console.log("this.state.textColor: " + this.state.textColor);
        this.props.changeLogoCallback(this.props.logo, this.props.logo.key, this.state.changeText, this.state.textColor, this.state.fontSize, this.state.backgroundColor, this.state.borderColor, this.state.borderRadius, this.state.borderThickness, this.state.padding, this.state.margin);
    }

    handleSubmitText = (event) => {
        this.completeUserEditing();
    }

    changeText = (event) => {
        this.setState({changeText : event.target.value})
    }

    handleCancelButton = (event) => {
        this.setState({changeText : this.props.logo.text})
    }

    render() {
        let undoDisabled = !this.props.canUndo();
        let redoDisabled = !this.props.canRedo();
        let undoClass = "waves-effect waves-light btn-small";
        let redoClass = "waves-effect waves-light btn-small";
        let EditTextClass = "waves-effect waves-light btn-small"
        if (undoDisabled)
            undoClass += " disabled";

        if (redoDisabled)
            redoClass += " disabled";
        
        return (
            <div className="card-panel col s4">
                {/* {this.state.modalPopup ? < ChangeTextPopup/> : <div> </div>} */}
                
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                    <Modal
  actions={[
    <Button onClick={this.handleCancelButton} flat modal="close" node="button" waves="green">Close</Button>,
    <Button onClick={this.handleSubmitText} flat modal="close" node ="button" waves="blue"> Change</Button>
  ]}
  
  bottomSheet={false}
  fixedFooter={false}
  header="Change Text To: "
  id="modal-0"
  options={{
    dismissible: true,
    endingTop: '10%',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    opacity: 0.5,
    outDuration: 250,
    preventScrolling: true,
    startingTop: '4%'
  }}
  trigger={<button className={EditTextClass} onClick={this.changeText}>&#9998;</button>}
>
<TextInput onChange = {this.changeText}></TextInput>
</Modal>
                        <button className={undoClass} onClick={this.handleUndo}>Undo</button>
                        <button className={redoClass} onClick={this.handleRedo}>Redo</button>
                    </div>
                </div>
                
                
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Text</span>
                        <div className="row">
                            <div className="col s4">Color:</div>
                            <div className="col s8">
                                <input type="color"
                                        onChange={this.handleTextColorChange}
                                        value={this.props.logo.textColor}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Font Size:</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleFontSizeChange}
                                    value={this.props.logo.fontSize} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Background Color:</div>
                            <div className="col s8">
                                <input type="color"
                                    onChange={this.handleBackgroundColorChange}
                                    value={this.props.logo.backgroundColor} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Color:</div>
                            <div className="col s8">
                                <input type="color"
                                    onChange={this.handleBorderColorChange}
                                    value={this.props.logo.borderColor} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Radius:</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleBorderRadiusChange}
                                    value={this.props.logo.borderRadius} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Thickness:</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleBorderThicknessChange}
                                    value={this.props.logo.borderThickness} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Padding:</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handlePaddingChange}
                                    value={this.props.logo.padding} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Margin:</div>
                            <div className="col s8">
                                <input type="range" min="4" max="144" 
                                    onChange={this.handleMarginChange}
                                    value={this.props.logo.margin} />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default TextEditSidebar