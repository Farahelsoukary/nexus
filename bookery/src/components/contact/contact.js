import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import bookstoreImage from './wall1.jpg' // Replace with the actual path to your image file
import { Button } from 'react-bootstrap';
function Contact() {
    const containerStyle = {
        minHeight: '100vh',
        // backgroundColor: 'rgb(165, 110, 186)',
        // backgroundImage: `url(${bookstoreImage})`,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
    };

    const formStyle = {
        width: '100%',
        maxWidth: '400px',
        // backgroundColor: 'rgba(255, 255, 255, 0.9)', // Adjust the opacity as needed
        padding: '20px',
        borderRadius: '15px',
        border: '3px solid #fd4930',
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={containerStyle}>
            <form id='form' style={formStyle}>
                <h2 style={{ color: '#fd4930' , fontWeight: 500, fontSize: "35px"}} className='text-center'>Contact us</h2>

                <p style={{color: "#263238", fontSize: "20px" , textAlign: "left", marginBottom: "8px"}}>Name:</p>
                <MDBInput  name='name' wrapperClass='mb-4' style={{border: "0.5px solid #263238"}} />

                <p style={{color: "#263238", fontSize: "20px" , textAlign: "left", marginBottom: "8px"}}>Email address:</p>
                <MDBInput type='email'  name='email' wrapperClass='mb-4'  style={{border: "0.5px solid #263238"}}/>

                <p style={{color: "#263238", fontSize: "20px" , textAlign: "left", marginBottom: "8px"}}>Subject:</p>
                <MDBInput  name='subject' wrapperClass='mb-4'  style={{border: "0.5px solid #263238"}}/>

                <p style={{color: "#263238", fontSize: "20px" , textAlign: "left", marginBottom: "8px"}}>Message:</p>
                <MDBTextArea name='message'  wrapperClass='mb-4'  style={{border: "0.5px solid #263238"}}/>

                <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' style={{border: "0.5px solid #263238", marginRight: "8px"}}/>

                <div style={{margin: "auto", display: "flex"}}>
                <Button className='btn btn-default' style={{ marginTop: "14px", color: "white", backgroundColor: "#fd4930", width: "100%", fontSize: "18px", margin: "auto"}}>Send</Button>
                </div>

                
            </form>
        </div>
    );
}

export default Contact;
