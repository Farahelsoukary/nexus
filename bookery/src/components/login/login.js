import React, { useState } from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
} from 'mdb-react-ui-kit';

import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./login.css"

function SignUp() {
    const [UserData, setUserData] = useState({
        userEmail: "",
        userPassword: "",
    });

    const [errorData, setErrorData] = useState({
        userEmailerror: "",
        userPassworderror: "",
    });

    const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);

    const HandelChange = (event) => {
        if (event.target.name === "Email Input") {
            setUserData({
                ...UserData,
                userEmail: event.target.value
            });
            setErrorData({
                ...errorData,
                userEmailerror: event.target.value.length === 0
                    ? 'Required'
                    : event.target.value.includes('@gmail.com') ? ""
                        : "Please enter a correct email"
            });
        } else if (event.target.name === 'Password Input') {
            setUserData({
                ...UserData,
                userPassword: event.target.value
            });
            setErrorData({
                ...errorData,
                userPassworderror: event.target.value.length === 0
                    ? 'Required'
                    : event.target.value.length >= 8
                        ? ""
                        : "Enter at least 8 characters"
            });
        }
    };

    const handleCheckboxChange = () => {
        setSubscribeNewsletter(!subscribeNewsletter);
    };


    return (
        <MDBContainer fluid>
            <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid style={{ width: '100%', height: '70%' }} />
                        </MDBCol>
                        <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                            <h1 color="Purple" className="text-center h1 fw-bold mb-8 mx-1 mx-md-4 mt-4">Login</h1>


                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={UserData.userEmail} name="Email Input"/* name="userEmail"*/ onChange={(e) => HandelChange(e)} />
                                <div id="emailHelp" className="form-text text-danger">{errorData.userEmailerror}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" value={UserData.userPassword} name="Password Input" /*name="userPassword"*/ onChange={(e) => HandelChange(e)} />
                                <div id="emailHelp" className="form-text text-danger">{errorData.userPassworderror}</div>
                            </div>


                            <div className='mb-4'>
                                <MDBCheckbox
                                    name='flexCheck'
                                    value=''
                                    id='flexCheckDefault'
                                    label='Subscribe to our newsletter'
                                    checked={subscribeNewsletter}
                                    onChange={handleCheckboxChange}
                                />
                            </div>
                            <Button color="#0d6efd" className="btn btn-success" size='fixed' disabled={errorData.userEmailerror || errorData.userPassworderror}>Submit</Button>
                            <h4></h4>
                            <Link color="#0d6efd" className="btn btn-success" to={`/signup`} >Register</Link>
                        </MDBCol>

                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}

export default SignUp;

