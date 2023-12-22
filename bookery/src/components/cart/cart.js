import React from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
export default function Cart() {
    return (
        <MDBContainer fluid className="py-5" >
            <MDBRow className="d-flex justify-content-center">
                <MDBCol md="12" lg="8" xl="7">
                    <MDBCard>
                        <MDBCardBody className="p-md-5">
                            {/* <div>
                                <h4>Upgrade your plan</h4>
                                <p className="text-muted pb-2">
                                    Please make the payment to start enjoying all the features of
                                    our premium plan as soon as possible
                                </p>
                            </div> */}

                            {/* <div className="d-flex flex-row align-items-center">
                                    <img
                                        src="https://i.imgur.com/S17BrTx.webp"
                                        className="rounded"
                                        width="60"
                                    />
                                    <div className="d-flex flex-column ms-4">
                                        <span className="h5 mb-1">Small Business</span>
                                        <span className="small text-muted">CHANGE PLAN</span>
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                    <sup className="dollar font-weight-bold text-muted">$</sup>
                                    <span className="h2 mx-1 mb-0">8,350</span>
                                    <span className="text-muted font-weight-bold mt-2">
                                        / year
                                    </span>
                                </div> */}

                            <h4 className=" text-center" style={{color: "#fd4930", fontSize: "35px", fontWeight: 500, marginBottom: "10px"}}>Payment details</h4>
                            <div className="mt-4 d-flex justify-content-between align-items-center">
                                <div className="d-flex flex-row align-items-center">
                                    <img
                                        src="https://i.imgur.com/qHX7vY1.webp"
                                        className="rounded"
                                        
                                    />
                                    <div className="d-flex flex-column ms-3">
                                        <span className="h5 mb-1">Credit Card</span>
                                        <span className="small text-muted">
                                            1234 XXXX XXXX 2570
                                        </span>
                                    </div>
                                </div>
                                <MDBInput
                                    label="XXX"
                                    id="form1"
                                    type="text"
                                    style={{ width: "70px"}}
                                />
                            </div>
                            <div className="mt-4 d-flex justify-content-between align-items-center">
                                <div className="d-flex flex-row align-items-center">
                                    <img
                                        src="https://i.imgur.com/qHX7vY1.webp"
                                        className="rounded"
                                        width="70"
                                    />
                                    <div className="d-flex flex-column ms-3">
                                        <span className="h5 mb-1">Master Card</span>
                                        <span className="small text-muted">
                                            2344 XXXX XXXX 8880
                                        </span>
                                    </div>
                                </div>
                                <MDBInput
                                    label="XXX"
                                    id="form2"
                                    type="text"
                                    style={{ width: "70px" }}
                                />
                            </div>
                            {/* <h6 className="mt-4 mb-3 text-primary text-uppercase">
                                ADD PAYMENT METHOD
                            </h6> */}
                            <p style={{color: "#263238", fontSize: "18px" , textAlign: "left", marginBottom: "8px"}}>Email Address:</p>
                            <MDBInput
                                // label="Email address"
                                id="form3"
                                size="lg"
                                type="email"
                            />
                            <br></br>
                            <Button   style={{  color: "white", backgroundColor: "#fd4930", width: "400px", fontSize: "18px", margin: "auto", display: "flex"}}>Place Order</Button>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}