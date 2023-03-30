import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './ModalDetails.css'


const ModalDetails = (props) => {
  // console.log(props);
  const { country, name, t20i} = props.modal

  console.log(t20i.match)

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button  variant="outline-info" onClick={handleShow}>
        View Details
      </Button>

      <Modal className="mdl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    {
      t20i.map(mt=>{  return <div>
       <h3>International Career 
     </h3>
       <p>Nationality: {country}</p>
         <p>Match Played: {mt.match}</p>
          <p>Runs: {mt.run}</p>
          <p>Wickets : {mt.wicket} </p>
      </div>} )
    }
      </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default ModalDetails;