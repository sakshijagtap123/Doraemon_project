import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SignupSuccessModal from './SignupSuccessModal';
import LoginModal from './LoginModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navebar() {
    const [show, setShow] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [modalShow, setModalShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLoginClose = () => setShowLogin(false);
    const handleLoginShow = () => setShowLogin(true);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setModalShow(true);
        handleClose();
    };

    return (
        <>
            <Navbar expand="lg" className="navigation" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/7018/1715414247018-t"
                            alt="Logo"
                            className="logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#history">History</Nav.Link>
                            <Nav.Link href="#fill-tab-example">Characters</Nav.Link>
                            <Nav.Link href="#about">Watch</Nav.Link>
                            <Nav.Link href="#gadget">Gadget</Nav.Link>
                            <Nav.Link href="#Signup" onClick={handleShow}>Sign Up</Nav.Link>
                            <Nav.Link href="#login" onClick={handleLoginShow}>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Sign Up Offcanvas */}
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Sign Up To Your Account</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required />
                        </Form.Group>

                        <InputGroup className="mb-3">
                            <InputGroup.Text>First and last name</InputGroup.Text>
                            <Form.Control aria-label="First name" required />
                            <Form.Control aria-label="Last name" required />
                        </InputGroup>

                        <Form.Select aria-label="Default select example" required>
                            <option value="">Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </Form.Select>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Agree to all conditions" required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>

            {/* Success modal */}
            <SignupSuccessModal show={modalShow} onHide={() => setModalShow(false)} />

            <LoginModal show={showLogin} onHide={handleLoginClose} />
        </>
    );
}

export default Navebar;
