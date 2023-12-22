import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='text-center text-white' style={{ marginTop: "5%",backgroundColor: '#263238' }}>
      <Container className='p-4 pb-0'>
        <section className='mb-4'>
          <Button href='#!'style={{backgroundColor: "#fd4930"}} className='m-1' as='a' role='button'>
            <FaFacebook />
          </Button>
          <Button href='#!' style={{backgroundColor: "#fd4930"}} className='m-1' as='a' role='button'>
            <FaTwitter />
          </Button>
          <Button href='#!' style={{backgroundColor: "#fd4930"}} className='m-1' as='a' role='button'>
            <FaInstagram />
          </Button>

          
        </section>
      </Container>
      <hr className='w-50 mx-auto'></hr>
      <div className='text-center p-3' style={{ backgroundColor: '#263238' }}>
        © 2023 Copyright: Nexus.com
        
      </div>
    </footer>
  );
}
