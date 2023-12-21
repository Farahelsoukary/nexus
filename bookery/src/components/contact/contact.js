import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import bookstoreImage from './wall1.jpg' // Replace with the actual path to your image file
import { Button } from 'react-bootstrap';
function Contact() {
    const containerStyle = {
        minHeight: '100vh',
        backgroundColor: 'rgb(165, 110, 186)',
        backgroundImage: `url(${bookstoreImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };

    const formStyle = {
        width: '100%',
        maxWidth: '400px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Adjust the opacity as needed
        padding: '20px',
        borderRadius: '15px',
        border: '3px solid rgb(165, 110, 186)',
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={containerStyle}>
            <form id='form' className='text-center' style={formStyle}>
                <h2 style={{ color: 'rgb(165, 110, 186)' }}>Contact us</h2>

                <MDBInput label='Name' name='name' wrapperClass='mb-4' />

                <MDBInput type='email' label='Email address' name='email' wrapperClass='mb-4' />

                <MDBInput label='Subject' name='subject' wrapperClass='mb-4' />

                <MDBTextArea name='message' label='Message' wrapperClass='mb-4' />

                <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />

                <Button color="#0d6efd" className="btn btn-success" size='fixed' >Submit</Button>
            </form>
        </div>
    );
}

export default Contact;
