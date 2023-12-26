// import React from 'react';
// import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
// import bookstoreImage from './wall1.jpg' // Replace with the actual path to your image file
// import { Button } from 'react-bootstrap';
// function Contact() {
//     const containerStyle = {
//         minHeight: '100vh',
//         // backgroundColor: 'rgb(165, 110, 186)',
//         // backgroundImage: `url(${bookstoreImage})`,
//         // backgroundSize: 'cover',
//         // backgroundPosition: 'center',
//         // backgroundRepeat: 'no-repeat',
//     };

//     const formStyle = {
//         width: '100%',
//         maxWidth: '400px',
//         // backgroundColor: 'rgba(255, 255, 255, 0.9)', // Adjust the opacity as needed
//         padding: '20px',
//         borderRadius: '15px',
//         border: '3px solid #fd4930',
//     };

//     return (
//         <div className="d-flex justify-content-center align-items-center" style={containerStyle}>
//             <form id='form' style={formStyle}>
//                 <h2 style={{ color: '#fd4930' , fontWeight: 500, fontSize: "35px"}} className='text-center'>Donation</h2>

//                 <p style={{color: "#263238", fontSize: "20px" , textAlign: "left", marginBottom: "8px"}}>Name:</p>
//                 <MDBInput  name='name' wrapperClass='mb-4' style={{border: "0.5px solid #263238"}} />

//                 <p style={{color: "#263238", fontSize: "20px" , textAlign: "left", marginBottom: "8px"}}>Email address:</p>
//                 <MDBInput type='email'  name='email' wrapperClass='mb-4'  style={{border: "0.5px solid #263238"}}/>

//                 <p style={{color: "#263238", fontSize: "20px" , textAlign: "left", marginBottom: "8px"}}>Charity name:</p>
//                 <MDBInput  name='charity_name' wrapperClass='mb-4'  style={{border: "0.5px solid #263238"}}/>

//                 <p style={{color: "#263238", fontSize: "20px" , textAlign: "left", marginBottom: "8px"}}>Book name:</p>
//                 <MDBInput name='book_name'  wrapperClass='mb-4'  style={{border: "0.5px solid #263238"}}/>

//                 {/* <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' style={{border: "0.5px solid #263238", marginRight: "8px"}}/> */}

//                 <div style={{margin: "auto", display: "flex"}}>
//                 <Button className='btn btn-default' style={{ marginTop: "14px", color: "white", backgroundColor: "#fd4930", width: "100%", fontSize: "18px", margin: "auto"}}>Send</Button>
//                 </div>

                
//             </form>
//         </div>
//     );
// }
import React, { useState } from 'react';
import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';

function Contact({ searchText }) {
    const containerStyle = {
        minHeight: '100vh',
    };

    const [showValidTextModal, setShowValidTextModal] = useState(false);
    const [UserData, setUserData] = useState({
        userEmail: '',
        userPassword: '',
        userName: '',
        userCharityname: '',
    });

    const [errorData, setErrorData] = useState({
        userEmailerror: '',
        userPassworderror: '',
        userNameerror: '',
        userCharitynameerror: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...UserData, [name]: value });

        if (name === 'Email Input') {
            setUserData({
                ...UserData,
                userEmail: event.target.value
            });
            setErrorData({
                ...errorData,
                userEmailerror: value.length === 0 ? 'Required' : value.includes('@gmail.com') ? '' : 'Please enter a correct email',
            });
        } else if (name === 'Password Input') {
            setUserData({
                ...UserData,
                userPassword: event.target.value
            });
            setErrorData({
                ...errorData,
                userPassworderror: value.length === 0 ? 'Required' : value.length >= 8 ? '' : 'Enter at least 8 characters',
            });
        } else if (name === 'name Input') {
            setUserData({
                ...UserData,
                userName: event.target.value
            });
            setErrorData({
                ...errorData,
                userNameerror: value.length === 0 ? 'Required' : value.length >= 8 ? '' : 'Enter at least 8 characters',
            });
        } else if (name === 'Charity Input') {
            setUserData({
                ...UserData,
                userCharityname: event.target.value
            });
            setErrorData({
                ...errorData,
                userCharitynameerror: value.length === 0 ? 'Required' : value.length >= 8 ? '' : 'Enter at least 8 characters',
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.values(UserData).every((value) => value.trim() !== '')) {
            // searchText(UserData);
            alert('Your book will be transferred to the charity soon');
            setUserData({
                userEmail: '',
                userPassword: '',
                userName: '',
                userCharityname: '',
            });
        } else {
            setShowValidTextModal(false);
        }
    };

    const formStyle = {
        width: '100%',
        maxWidth: '400px',
        padding: '20px',
        borderRadius: '15px',
        border: '3px solid #fd4930',
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={containerStyle}>
            <form id="form" style={formStyle} onSubmit={handleSubmit}>
                <h2 style={{ color: '#fd4930', fontWeight: 500, fontSize: '35px' }} className="text-center">
                    Donation
                </h2>

                <p style={{ color: '#263238', fontSize: '20px', textAlign: 'left', marginBottom: '8px' }}>Name:</p>
                <MDBInput value={UserData.userName} onChange={handleChange} wrapperClass="mb-4" style={{ border: '0.5px solid #263238' }} name="name Input" />
                <div className="form-text text-danger">{errorData.userNameerror}</div>

                <p style={{ color: '#263238', fontSize: '20px', textAlign: 'left', marginBottom: '8px' }}>Email:</p>
                <MDBInput value={UserData.userEmail} onChange={handleChange} wrapperClass="mb-4" style={{ border: '0.5px solid #263238' }} name="Email Input" />
                <div className="form-text text-danger">{errorData.userEmailerror}</div>


<p style={{ color: '#263238', fontSize: '20px', textAlign: 'left', marginBottom: '8px' }}>Charity Name:</p>
                <MDBInput value={UserData.userPassword} onChange={handleChange} wrapperClass="mb-4" style={{ border: '0.5px solid #263238' }} name="Password Input" />
                <div className="form-text text-danger">{errorData.userCharitynameerror}</div>

                <p style={{ color: '#263238', fontSize: '20px', textAlign: 'left', marginBottom: '8px' }}>Book Details:</p>
                <MDBTextArea value={UserData.userCharityname} onChange={handleChange} wrapperClass="mb-4" style={{ border: '0.5px solid #263238' }} name="Charity Input" />
                <div className="form-text text-danger">{errorData.userPassworderror}</div>

                <div style={{ margin: 'auto', display: 'flex' }}>
                    <Button
                        className="btn btn-default"
                        style={{ marginTop: '14px', color: 'white', backgroundColor: '#fd4930', width: '100%', fontSize: '18px', margin: 'auto' }}
                        type="submit" onClick={() => setShowValidTextModal(true)}
                    >
                        Send
                    </Button>
                </div>
            </form>

            <div id="popup1" className={showValidTextModal ? 'overlay modal-active' : 'overlay'}>
                <div className="popup">
                    <div className="close" onClick={() => setShowValidTextModal(false)}>
                        &times;
                    </div>
                    <h3 className="content" style={{ margin: 'auto' }}>
                        Donated Succesfully
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Contact;