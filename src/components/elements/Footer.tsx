import React from 'react';
import { Layout, Row, Col } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer: React.FC = () => (
  <AntFooter style={{ background: '#2c3e50', color: 'white', padding: '50px 0 20px', marginTop: 48 }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
      <Row gutter={[32, 32]}>
        <Col xs={24} md={8}>
          <h3 style={{ color: 'white', marginBottom: 20 }}>Multi Run</h3>
          <p>Run multiple accounts and apps simultaneously on one device with complete data isolation.</p>
          <div style={{ display: 'flex', gap: 15, marginTop: 10 }}>
            <a href="#" title="Twitter" style={{ color: '#fff', fontSize: '1.3rem' }}>🐦</a>
            <a href="#" title="Facebook" style={{ color: '#fff', fontSize: '1.3rem' }}>📘</a>
            <a href="#" title="Instagram" style={{ color: '#fff', fontSize: '1.3rem' }}>📸</a>
          </div>
        </Col>
        <Col xs={24} md={8}>
          <h3 style={{ color: 'white', marginBottom: 20 }}>Products</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#features" style={footerLinkStyle}>Features</a></li>
            <li><a href="#download" style={footerLinkStyle}>Download</a></li>
            <li><a href="#pricing" style={footerLinkStyle}>Pricing</a></li>
            <li><a href="#updates" style={footerLinkStyle}>Updates</a></li>
          </ul>
        </Col>
        <Col xs={24} md={8}>
          <h3 style={{ color: 'white', marginBottom: 20 }}>Support</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#faq" style={footerLinkStyle}>FAQ</a></li>
            <li><a href="#contact" style={footerLinkStyle}>Contact Us</a></li>
            <li><a href="#tutorials" style={footerLinkStyle}>Tutorials</a></li>
            <li><a href="#privacy" style={footerLinkStyle}>Privacy Policy</a></li>
            <li><a href="#terms" style={footerLinkStyle}>Terms of Use</a></li>
          </ul>
        </Col>
      </Row>
      <div style={{ textAlign: 'center', paddingTop: 20, borderTop: '1px solid #444', color: '#aaa', marginTop: 40 }}>
        &copy; 2024 Multi Run. All rights reserved.
      </div>
    </div>
  </AntFooter>
);

const footerLinkStyle: React.CSSProperties = {
  color: '#ddd',
  textDecoration: 'none',
  transition: 'color 0.3s',
};

export default Footer;
