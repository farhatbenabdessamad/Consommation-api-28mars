import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { adduser } from '../redux/Actions';

function Adduser() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [gender, setGender]=useState("");
    const [image, setImage]=useState("");
    const [password, setPassword]=useState("");
    const dispatch= useDispatch()
    const handlesubmit=()=>{
        dispatch(adduser({name, email, gender, image, password}))
        handleClose()
    }
    
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add User
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="name user"
                                autoFocus
                                onChange={(e)=>setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>image</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="insérer image"
                                onChange={(e)=>setImage(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="*******"
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select onChange={(e)=>setGender(e.target.value)}>
                                <option value="Male">
                                    male
                                </option>
                                <option value="Female">
                                    female
                                </option>
                               
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handlesubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Adduser;