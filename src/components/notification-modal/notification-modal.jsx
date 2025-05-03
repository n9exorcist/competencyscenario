import React, { useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import './notification-modal.css';

const NotificationModal = ({ show, onClose, book }) => {
    const [averageRating, setAverageRating] = React.useState(0);
    const [percentageRatings, setPercentageRatings] = React.useState([]);
    const [topRatings, setTopRatings] = React.useState([]);
    const [newRating, setNewRating] = React.useState({ stars: 0, comment: ''});
 if (!book) return null; // Handle case where book is undefined
    return (
        <>
            <Modal show={show} onHide = {onClose}
                backdrop="static"
                size="xl"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {book.name}
                    </Modal.Title>
                        
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