import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Modal } from 'react-materialize';
import { Button } from 'react-materialize';


class ChangeTextPopup extends Component {
    state = { show: false};

    showModal = () => {
        this.setState({ show: true});
    };

    hideModal = () => {
        this.setState({ show: false});
    };

    render() {
        return (
            <Modal
  actions={[
    <Button flat modal="close" node="button" waves="green">Close</Button>
  ]}
  bottomSheet={false}
  fixedFooter={false}
  header="Modal Header"
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
  trigger={<Button node="button">MODAL</Button>}
>
  
</Modal>
        )
    }
}

export default ChangeTextPopup