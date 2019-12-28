import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useDispatch } from 'react-redux';
import * as asyncAtions from '../Reducers/AdvertiseReducer/AsyncAdvertiseActions'


const DeleteConfirme = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const dispatch = useDispatch()
 


  const toggle = () => setModal(!modal);
//   const onDeleteHandler =(item)=>{ 
//     dispatch(asyncAtions.deleteAdvertise(item))
//   }

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

  return (
  <div>
    <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
    <Modal isOpen={modal} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle} close={closeBtn}>DELETE ADVERTISE</ModalHeader>
      <ModalBody>
       are you sure you want to delete ? 
      </ModalBody>
      <ModalFooter>
        <Button color="danger"  outline onClick={()=>dispatch(asyncAtions.deleteAdvertise(props.item))}>Delete</Button>{' '}
        <Button color="success" outline onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  </div>
);
}

export default DeleteConfirme;