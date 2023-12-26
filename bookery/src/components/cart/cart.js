import React, { useState } from "react";
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
const Cart = ({ searchText }) => {
    const [text, setText] = useState("");
    const [showValidTextModal, setShowValidTextModal] = useState(false);

    const [UserData, setUserData] = useState({
        userEmail: "",
        uservalue1: "",
        uservalue2: "",
    });

    const [errorData, setErrorData] = useState({
        userEmailerror: "",
        uservalue1error: "",
        uservalue2error: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text === "" || !text.trim()) {
            setShowValidTextModal(true);
            return;
        }
        searchText(text);
    };

    const HandelChange = (event) => {
        if (event.target.name === "Email Input") {
            setUserData({
                ...UserData,
                userEmail: event.target.value,
            });
            setErrorData({
                ...errorData,
                userEmailerror: event.target.value.length === 0
                    ? 'Required'
                    : event.target.value.includes('@gmail.com') ? ""
                        : "Please enter a correct email"
            });
        }
        if (event.target.name === "value1") {
            setUserData({
                ...UserData,
                uservalue1: event.target.value,
            });
            setErrorData({
                ...errorData,
                uservalue1error: event.target.value.length === 0
                    ? 'Required'
                    : event.target.value.length === 3 ? ""
                        : "Please enter a correct number"
            });
        }
        if (event.target.name === "value2") {
            setUserData({
                ...UserData,
                uservalue2: event.target.value,
            });
            setErrorData({
                ...errorData,
                uservalue2error: event.target.value.length === 0
                    ? 'Required'
                    : event.target.value.length === 3 ? ""
                        : "Please enter a correct number"
            });
        }
    };

    return (
        <MDBContainer fluid className="py-5" >
            <MDBRow className="d-flex justify-content-center">
                <MDBCol md="12" lg="8" xl="7">
                    <MDBCard>
                        <MDBCardBody className="p-md-5">
                            <h4 className=" text-center" style={{color: "#fd4930", fontSize: "35px", fontWeight: 500, marginBottom: "10px"}}>Payment details</h4>
                            <div className="mt-4 d-flex justify-content-between align-items-center">
                                <div className="d-flex flex-row align-items-center">
                                    <img
                                        src="https://cdn0.iconfinder.com/data/icons/flat-travel-icons-1/48/54-512.png"
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
                                    name="value1"
                                    value={UserData.uservalue1}
                                    onChange={HandelChange}
                                />
                            </div>
                            <div id="emailHelp" className="form-text text-danger">
                                    {errorData.uservalue1error}
                                </div>
                            
                            <div className="mt-4 d-flex justify-content-between align-items-center">
                                <div className="d-flex flex-row align-items-center">
                                    <img
                                        src="https://th.bing.com/th/id/R.bf9656c02c52f178d1090664bf694feb?rik=HjrE9dK%2bkNRYaA&riu=http%3a%2f%2fpngimg.com%2fuploads%2fmastercard%2fmastercard_PNG4.png&ehk=NCnhifrpL5zACJ5ig1r8E2OEWsYdbg%2bDttMEVcjg61M%3d&risl=&pid=ImgRaw&r=0"
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
                                    name="value2"
                                    value={UserData.uservalue2}
                                    onChange={HandelChange}
                                />
                            </div>
                            <div id="emailHelp" className="form-text text-danger">
                                    {errorData.uservalue2error}
                            </div>
                            <p style={{color: "#263238", fontSize: "18px" , textAlign: "left", marginBottom: "8px"}}>Email Address:</p>
                            <MDBInput
                                size="lg"
                                type="email"
                                id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    value={UserData.userEmail}
                                    name="Email Input"
                                    onChange={HandelChange}
                            /><div id="emailHelp" className="form-text text-danger">
                            {errorData.userEmailerror}
                        </div>
                            <p style={{color: "#263238", fontSize: "18px" , textAlign: "left", marginBottom: "8px"}}>Promocode:</p>
                            <MDBInput
                                id="form3"
                                size="lg"
                                type="promocode"
                            />
                            <br></br>
                            <Button   style={{  color: "white", backgroundColor: "#fd4930", width: "400px", fontSize: "18px", margin: "auto", display: "flex"}} disabled={errorData.userEmailerror || UserData.userEmail == ""}
                                onClick={() => setShowValidTextModal(true)}>Place Order</Button>
                                <div
                                id="popup1"
                                className={
                                    showValidTextModal ? "overlay modal-active" : "overlay"
                                }
                            >
                                <div className="popup">
                                    <div className="close" onClick={() => setShowValidTextModal(false)}>
                                        &times;
                                    </div>
                                    <h3 className="content">Your order is placed successfully</h3>
                                </div>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};
export default Cart;