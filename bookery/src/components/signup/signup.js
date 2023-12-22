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
import "./signup.css"
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";



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
            <MDBCard className='text-black ' style={{borderRadius: "15px", margin: "auto", width: "80%", marginTop: "10%" }}>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                            <h1  className="text-center" style={{color: "#fd4930", fontSize: "40px", fontWeight: 700, marginBottom: "10px"}}>Sign up</h1>


                            <div className="mb-2">
                                <label htmlFor="exampleInputEmail1" className="form-label" style={{color: "#263238", fontSize: "18px" , textAlign: "left", marginBottom: "8px"}}>Email address:</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={UserData.userEmail} name="Email Input"/* name="userEmail"*/ onChange={(e) => HandelChange(e)} style={{border: "0.5px solid #263238", width: "400px"}}/>
                                <div id="emailHelp" className="form-text text-danger">{errorData.userEmailerror}</div>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" value={UserData.userPassword} name="Password Input" /*name="userPassword"*/ onChange={(e) => HandelChange(e)} style={{border: "0.5px solid #263238", width: "400px"}}/>
                                <div id="emailHelp" className="form-text text-danger">{errorData.userPassworderror}</div>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="exampleInputPassword1" className="form-label">Re-enter Password:</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" value={UserData.userPassword} name="Password Input" /*name="userPassword"*/ onChange={(e) => HandelChange(e)} style={{border: "0.5px solid #263238", width: "400px"}}/>
                                <div id="emailHelp" className="form-text text-danger">{errorData.userPassworderror}</div>
                            </div>

                           
                            <Button  className="btn btn-success " disabled={errorData.userEmailerror || errorData.userPassworderror} style={{ marginTop: "14px", color: "white", backgroundColor: "#fd4930", width: "400px", fontSize: "18px", margin: "auto"}}>Sign up</Button>
                            <p style={{color: "#263238",  marginTop: "9px"}} className="text-center">Already have an account?</p>
                            <Link  className="text-center" to={`/login`} style={{ marginTop: "0px", color: "#fd4930",  fontSize: "16px"}}>Login</Link>
                        </MDBCol>
                        <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid style={{ marginLeft: "15%",width: '80%', height: '60%' }} />
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}

export default SignUp;

