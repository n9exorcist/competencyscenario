import React from 'react';
import Modal from 'react-bootstrap/Modal';
import './notification-modal.css';

const NotificationModal = ({book}) => {
    return (
        <>
            <Modal
                backdrop="static"
                size="xl"
                centered
            >
                <Modal.Header>
                   {book} wi
                </Modal.Header>
                <Modal.Body>
                    {/* body section */}
                </Modal.Body>
                <Modal.Footer>
                    {/* footer section */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NotificationModal;