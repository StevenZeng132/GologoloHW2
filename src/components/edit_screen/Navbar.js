import React, { Component } from 'react';
import ReactDOM from "react-dom";
import ChangeTextPopup from './ChangeTextPopup.js';
import { Modal } from 'react-materialize';
import { Button } from 'react-materialize';
import { TextInput } from 'react-materialize';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    console.log("Navbar constructed");
  }

  componentDidMount = () => {
      console.log("\tNavbar component did mount");
  }

  componentWillUnmount = () => {
      console.log("\tNavbar component will unmount");
  }

  handleGoHome = () => {
    console.log("handleGoHome");
    this.props.goToHomeCallback();
  }

  handleDelete = () => {
    console.log("delete button clicked");
    this.props.deleteLogoCallback(this.props.logoKey);  
  }

  

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div  className='brand-logo' 
                style={ {cursor: "pointer"} }
                onClick={this.handleGoHome}>
            goLogoLo
          </div>
          
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          <Modal
  actions={[
    <Button onClick={this.handleDelete.bind(this)} flat modal="close" node="button" waves="green">Yes</Button>,
    <Button flat modal="close" node ="button" waves="blue"> No</Button>
  ]}
  
  bottomSheet={false}
  fixedFooter={false}
  header="Are you sure you want to delete this logo?"   
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
  trigger={<button id = "trash-button" className="right hide-on-med-and-down"  >&#128465;</button>}
>
</Modal>
            {/* <li style={ {cursor: "pointer"} }>&#128465;</li> */}
            
          </ul>
        </div>
      </nav>
    )
  };
}

export default Navbar;