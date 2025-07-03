import React from 'react';
import { Layout, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const { Footer: AntFooter } = Layout;

const Footer: React.FC = () => (
  <AntFooter style={{ background: '#2c3e50', color: 'white', padding: '50px 0 20px', marginTop: 48 }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
      <Row gutter={[32, 32]}>
        <Col xs={24} md={8}>
          <h3 style={{ color: 'white', marginBottom: 20 }}>Multi Run</h3>
          <p>Run multiple accounts and apps simultaneously on one device with complete data isolation.</p>
        </Col>
        <Col xs={24} md={8}>
          <h3 style={{ color: 'white', marginBottom: 20 }}>Products</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#features" style={footerLinkStyle}>Features</a></li>
            <li><a href="#download" style={footerLinkStyle}>Download</a></li>
          </ul>
        </Col>
        <Col xs={24} md={8}>
          <h3 style={{ color: 'white', marginBottom: 20 }}>Support</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="#privacy" style={footerLinkStyle}><Link to="/privacy-policy">Privacy Policy</Link></a></li>
            <li><a href="#terms" style={footerLinkStyle}><Link to="/terms-of-use">Terms of Use</Link></a></li>
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
