import React from 'react';
import Container from '../components/layout/Container';

const ContactUsPage: React.FC = () => {
  return (
    <div>
      <Container>
        <div style={{ padding: '4rem 0', textAlign: 'center' }}>
          <h1>Contact Us</h1>
          <p style={{ marginBottom: '3rem', fontSize: '1.2rem' }}>
            We'd love to hear from you! Here are the best ways to reach us.
          </p>

          <div style={{ marginTop: '3rem', padding: '2rem', background: '#f9f9f9', borderRadius: '10px', maxWidth: '600px', margin: '3rem auto 0' }}>
            <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Direct Email</h3>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '1.1rem', color: '#666' }}>dongshan1025@gmail.com</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUsPage;
