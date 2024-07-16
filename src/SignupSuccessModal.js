import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignupSuccessModal.css';

function SignupSuccessModal({ show, onHide }) {
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Success</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="success-message">
                    <img 
                        src="https://www.iconpacks.net/icons/2/free-check-mark-icon-3281-thumb.png"
                        alt="Success"
                        className="success-icon"
                    />
                    <p>You have successfully signed up!</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SignupSuccessModal;
