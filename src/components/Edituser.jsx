import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { edituser } from '../redux/Actions';

function Edituser({user}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [name, setName]=useState(user.name);
    const [email, setEmail]=useState(user.email);
    const [gender, setGender]=useState(user.gender);
    const [image, setImage]=useState(user.image);
    const [password, setPassword]=useState(user.password);
    const dispatch= useDispatch()
    const handlesubmit=()=>{
        dispatch(edituser(user._id,{name, email, gender, image, password}))
        handleClose()
    }
    
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit User
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>name</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={user.name}
                                autoFocus
                                onChange={(e)=>setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                defaultValue={user.email}
                                onChange={(e)=>setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>image</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={user.image}
                                onChange={(e)=>setImage(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                defaultValue={user.password}
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select onChange={(e)=>setGender(e.target.value)}
                             defaultValue={user.gender}>
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
                        Edit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Edituser;